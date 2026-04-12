import {client} from '@/lib/sanity'
import {brandRowsQuery, artistRowsQuery} from '@/lib/queries'
import ClientIndex from '@/components/ClientIndex'

export default async function Page() {
    const [brandRows, artistRows] = await Promise.all([
        client.fetch(brandRowsQuery, {}, {next: {revalidate: 60}}),
        client.fetch(artistRowsQuery, {}, {next: {revalidate: 60}}),
    ])

    return <ClientIndex brandRows={brandRows} artistRows={artistRows}/>
}
