import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
})

const isDev = process.env.NODE_ENV === 'development'

/**
 * Fetch data from Sanity.
 * - In development: bypasses the Next.js cache entirely so Studio changes
 *   appear immediately on every page refresh (no waiting for revalidation).
 * - In production: uses ISR with 60-second revalidation.
 */
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {}
): Promise<T> {
  return client.fetch<T>(
    query,
    params,
    isDev
      ? { cache: 'no-store' }
      : { next: { revalidate: 60, tags: ['sanity'] } }
  )
}
