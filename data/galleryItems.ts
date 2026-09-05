export type GalleryCategory = "all" | "garden" | "pool" | "living" | "kitchen" | "exterior";

export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  category: Exclude<GalleryCategory, "all">;
};

export const galleryItems: GalleryItem[] = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCD-GErG7oCZP1ODKBIjossTC0YJSKHwSuz2te84MpZ5Bn3g-nwVwP4fplC9pxoaymLLqUqcr0P4x7-07pu4ziz5sJ_CcW9PW4smd3aeIxN0G4VdBGFlwT49dRehPfFXDFPz-gVmMs5k6oDJno4Pt3jjRQTmaTKH-v7TZVsuRH6XQUhQjbAbwHIY0gBAehm0gonixPTfwrJPGg5eUVsp8lh5TnckrJQajHyqSNyjELrkKzqv-I7IMhMdoyMYxMxAuxVltg",
    alt: "Crystal blue private pool with sun canopy shade sails and pebble wash coping at Garden Villa Bataan",
    title: "Crystal Blue Private Pool & Sun Canopy",
    caption: "Private tiled pool framed by pebble wash coping and lush tropical shrubbery under protective sun shades.",
    category: "pool",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbKEPkE0Y1yb_i4JI5vEfyy_neviwWFf_SmD_UHtHqF7Duf7_PDs-1YwjSZehhPo_N8vC6vHStNpQUko7hA2YzRuYV_Q9d1_SgvLeTLyt7m2cnE89TInfaMcVd-nkej7Ie3GLrckFZ3D7ekNWhaEsUecXpEmt0zAvLoOgnGlzlmWv2uNJzTHgqLl-K6Vm-Yf_O5jXtIDzHiwoZjYnCh9a1AXF1HVBSD2hRKQ9yxoPRQYu9alMsIGVbqu2XkdfSLFC_J24",
    alt: "Balinese-inspired carved stone garden statue surrounded by cycads and tropical ferns at Garden Villa",
    title: "Balinese-Inspired Garden Statue & Lush Flora",
    caption: "Peaceful praying stone guardian surrounded by vibrant cycads, philodendrons, and weathered stone steps.",
    category: "garden",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSuXTVVwc3nhbSNV0Ew3nKvVT2Q69evN3BWc7iccIXCU7x2jwVmPtKvQkPFdIVmEQKc-tUllWhOq8Dz6MqsJO8VTessyP2pNnA8k0QTAnKjxNWeCCseKFkF2Sjyq4ZPJHROhCVw_o_jowkeUzRgckACzBjs7Bfl98_psoZ61pOWm9jLgnPgU3slujpVmeK0R6EPLpSLWazkyPFPurW5nwEgA42EqH_BDErX1WROxQEH1aTS4_GYbd5uMr-zECroTKtg0U",
    alt: "Custom oak kitchen with breakfast bar island, warm cabinetry, and modern appliances at Garden Villa",
    title: "Custom Oak Kitchen & Breakfast Bar",
    caption: "Warm natural cabinetry, deep black faucet accents, modern appliances, and comfortable bar seating.",
    category: "kitchen",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDak9W4GnZAzPewwkU6_m3HLCxO7l8UBZQmvBfp3t7vQyKnMBu_mvIMpMxxF4pDdakToPTmvGmLkZvJjlFgU73vp050y0X7JQ-lTTx6IjvPHVGdTmfRCK5bm9jmEeMZn2bstbPpJ4Y5N-gYrrBMLsWylfG7WWAsgYAoF93DHNje9XoNVXrs7p4BfX_e_B6H-WEN6TlQ3gfO1yww4D0TdiaihI_KJUNc100wsnqBeyYwkF5n_W2gE-9EGqPtVQnG630i7Xk",
    alt: "Open living room with fluted wood accent wall, sliding glass doors, and dining area at Garden Villa",
    title: "Open Living Room with Fluted Wood Accents",
    caption: "Airy great room layout featuring floor-to-ceiling sliding glass, ceiling fan cooling, and rich fluted wall details.",
    category: "living",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqb2JGg7fb1VOAiQfsjA8MPq_vJrdKZrQPlYTkw6_CwkV7c9_E0IIVr2_Kf_t3RLgpR1wI5t3DQunbqz0CmeU5dYsZiAh7ke-5Jqh2nW1_oFE2ZbuS1vId3BoGd7FLBfmb31Rlo_g6EekuwM1raRrokMDOWDV8kvI8tNaoBnpeRtClIB98HaTGVqPv3ANfy4p2aozhI26Dtf-Is1GwpHTObn9fM2F01E4qS9CC5V-32QqIOfMCaSzTL-gl66t9b_qf_HM",
    alt: "Modern tropical villa exterior with manicured lawns and botanical garden landscape at Garden Villa Bataan",
    title: "Modern Tropical Villa Exterior & Manicured Lawns",
    caption: "Contemporary architectural clean lines embedded in a flourishing botanical garden landscape under clear Bataan skies.",
    category: "exterior",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvOGGxErWOVuoDL7TW0HJ1NRGFsqkjFj84VxkJA6xbq-wt8OP-XpciFueOj9PiNN8ajRAwG4gUsEvBiODxxCbc2itnTk2XFJM5HnLPfJDFT0WSXlJPWP3sokOPjTaU_dycD-sp-BHCc1GRNB17bE9RpGUZFd-MM4Yn-LMdGZgV312lQTWIAvV-QT5ewWZMyuvILjfGlSygHLjlUEWWm3sZ2CI-BpHI-H-lTtaTHoq7mjzdhl09UzxFzQ",
    alt: "Shaded lanai deck veranda with teak chairs overlooking the private pool at Garden Villa Bataan",
    title: "Shaded Lanai Deck",
    caption: "Spacious transition between air-conditioned interiors and sunlit gardens, designed for slow afternoon coffee.",
    category: "exterior",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEKSAk7KiMg0h2BavzOMVrLxB65JT8EpmmjhxBvNM84pyyHXJUzibAsGJ-8fDU2wn2Wb-yuvA4A555w8XciaGca_BaQVpOgzuy0pglrGHDPkA2OM39XkvaSl71sLR9tEwfPiZ66IEuDc4mJyfWFIstMfRZEj9tNFTCulgU82nPjZTegaOJaQM35zt8E3hkkUIy160ggGU7AmhmoxAEoY_vFtvlVu9e-xo2AQZemJ_ekUrScjTYXTrKEA",
    alt: "Minimalist master bedroom suite with garden view window and natural timber headboard at Garden Villa",
    title: "Garden Master Suite",
    caption: "Minimalist aesthetic offering tranquil views into private bamboo clusters with soft natural daylight.",
    category: "living",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnhY8XyiL2xwRevP-XEotqiQeiPsCQHrWeTiRgzkm4PRIaTs7aveeEpO9D3chm13QmT2VjhTQjYx8OolihZjj7_OTV34B2e8a9cmDUWyE8Jz4WHGFHO6HMj3wJV0Z2qibCMiXVXV6jym1KFj5QOfNqGWDZujBgcwDFxjQv0marN_PiKCnW9AlhKl51aKnSa8EIhTmwu6gxoTf65m8drKsftgN5a9uMglbZnyHz1IjLvTuMchSQFnKUWw",
    alt: "Illuminated pool at dusk with underwater lights and tropical palm silhouettes at Garden Villa Bataan",
    title: "Dusk Reflections by the Pool",
    caption: "Illuminated garden pathways and pool lights providing intimate ambiance for starlit gatherings.",
    category: "pool",
  },
];

export const filterLabels: { label: string; value: GalleryCategory }[] = [
  { label: "All Photos", value: "all" },
  { label: "Garden & Grounds", value: "garden" },
  { label: "Private Pool", value: "pool" },
  { label: "Living & Dining", value: "living" },
  { label: "Kitchen", value: "kitchen" },
  { label: "Villa Exterior", value: "exterior" },
];
