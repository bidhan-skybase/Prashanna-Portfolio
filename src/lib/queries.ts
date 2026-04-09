export const brandsQuery = `
  *[_type == "brand"] | order(orderRank) {
    name,
    "logo": logo.asset->url,
    "hoverLogo": hoverLogo.asset->url,
    size
  }
`;

export const artistsQuery = `
  *[_type == "artist"] | order(orderRank) {
    name
  }
`;