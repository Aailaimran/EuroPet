import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
})

export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 3600,
}: {
  query: string
  params?: Record<string, unknown>
  revalidate?: number
}): Promise<T> {
  return client.fetch<T>(query, params, {
    next: {
      revalidate,
      tags: ['sanity'],
    },
  })
}
