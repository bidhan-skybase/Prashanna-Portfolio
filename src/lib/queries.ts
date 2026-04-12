import { groq } from 'next-sanity'

export const brandRowsQuery = groq`
  *[_type == "brandRow"] | order(order asc) {
    _id,
    title,
    order,
    logos[] {
      _key,
      alt,
      bwImage,
      colorImage,
      customSizeClass,
    }
  }
`

export const artistRowsQuery = groq`
  *[_type == "artistRow"] | order(order asc) {
    _id,
    title,
    order,
    artists[] {
      _key,
      name,
      color,
    }
  }
`
