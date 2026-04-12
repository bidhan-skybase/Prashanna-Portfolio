import { createClient } from 'next-sanity'
import imageUrlBuilder, {createImageUrlBuilder, SanityImageSource} from '@sanity/image-url'

export const client = createClient({
    projectId: 'v07gtflr',   // ← replace this
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: true,
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
    return builder.image(source)
}
