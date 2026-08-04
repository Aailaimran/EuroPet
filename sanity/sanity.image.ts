import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { client } from './sanity.client'

const builder = imageUrlBuilder(client)

export function urlForImage(
  source: SanityImageSource | null | undefined
): string {
  if (!source) return ''
  return builder
    .image(source)
    .auto('format')
    .fit('max')
    .url()
}
