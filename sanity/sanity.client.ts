import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
})

// Helper for fetching with revalidation
export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 3600,
}: {
  query: string
  params?: Record<string, any>
  revalidate?: number
}): Promise<T> {
  return client.fetch<T>(query, params, {
    next: {
      revalidate,
      tags: ['sanity'],
    },
  })
}
