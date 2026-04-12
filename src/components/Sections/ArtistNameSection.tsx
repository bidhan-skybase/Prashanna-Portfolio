import {ArtistRow} from '@/lib/types'
import {motion} from "framer-motion";


const ArtistNamesSection = ({rows}: { rows: ArtistRow[] }) => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-8">
                <div className="space-y-9">
                    {rows.map((row, rowIndex) => (
                        <motion.div
                            key={row._id}
                            className="flex justify-center items-center gap-6 lg:gap-12 flex-wrap"
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: rowIndex * 0.2}}
                            viewport={{once: true}}
                        >
                            {row.artists.map((artist, index) => (
                                <motion.div
                                    key={artist._key}
                                    className={`text-lg text-center whitespace-pre-line ${artist.color}`}
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0}}
                                    style={{fontFamily: 'Staatliches', fontSize: '24px'}}
                                    transition={{duration: 0.6, delay: rowIndex * 0.2 + index * 0.05}}
                                    viewport={{once: true}}
                                    whileHover={{scale: 1.05}}
                                >
                                    {formatName(artist.name)}
                                </motion.div>
                            ))}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const formatName = (name: string) => name.replace(/\\n/g, '\n').toUpperCase()


export default ArtistNamesSection
