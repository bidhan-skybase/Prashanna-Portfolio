"use client";

import { motion } from "framer-motion";
import { client } from "@/lib/sanity";
import { artistsQuery } from "@/lib/queries";
import { useEffect, useState } from "react";

const chunkArtists = (artists, size = 6) => {
  const rows = [];
  for (let i = 0; i < artists.length; i += size) {
    rows.push(artists.slice(i, i + size));
  }
  return rows;
};

const ArtistNamesSection = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    client.fetch(artistsQuery).then(setArtists);
  }, []);

  const artistRows = chunkArtists(artists, 6);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8 space-y-10">
        {artistRows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="flex flex-wrap justify-center gap-6 lg:gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: rowIndex * 0.2 }}
          >
            {row.map((artist, index) => {
              const isGray = (rowIndex + index) % 2 === 1;

              return (
                <motion.div
                  key={index}
                  className={`text-lg text-center whitespace-pre-line ${
                    isGray ? "text-gray-500" : "text-black"
                  }`}
                  style={{
                    fontFamily: "Staatliches",
                    fontSize: "24px",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {artist.name}
                </motion.div>
              );
            })}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ArtistNamesSection;