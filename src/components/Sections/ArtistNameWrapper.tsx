import { client } from '@/lib/sanity'
import { artistRowsQuery } from '@/lib/queries'
import { ArtistRow } from '@/lib/types'
import ArtistNamesSection from "@/components/Sections/ArtistNameSection";

export default async function ArtistNamesSectionWrapper() {
    const rows: ArtistRow[] = await client.fetch(artistRowsQuery)
    return <ArtistNamesSection rows={rows} />
}
