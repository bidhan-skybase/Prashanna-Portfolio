export interface SanityImageRef {
    _type: string
    asset: { _ref: string; _type: string }
}

export interface LogoEntry {
    _key: string
    alt: string
    bwImage: SanityImageRef
    colorImage?: SanityImageRef
    customSizeClass?: string
}

export interface BrandRow {
    _id: string
    title: string
    order: number
    logos: LogoEntry[]
}

export interface ArtistEntry {
    _key: string
    name: string
    color: string
}

export interface ArtistRow {
    _id: string
    title: string
    order: number
    artists: ArtistEntry[]
}
