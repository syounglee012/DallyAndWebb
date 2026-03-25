const ROUTES = [
  "/",
  "/about-us",
  "/attorneys",
  "/attorneys/brewington",
  "/attorneys/copp",
  "/attorneys/dally",
  "/attorneys/hixon",
  "/attorneys/king",
  "/attorneys/vargas",
  "/attorneys/webb",
  "/memoriam",
  "/contact-us",
  "/practice-areas",
  "/practice-areas/adoption",
  "/practice-areas/child-custody",
  "/practice-areas/child-protective-services",
  "/practice-areas/child-support",
  "/practice-areas/collaborative-divorce",
  "/practice-areas/contested-divorce",
  "/practice-areas/grandparent-rights",
  "/practice-areas/mediation",
  "/practice-areas/military-divorce",
  "/practice-areas/modification",
  "/practice-areas/paternity",
  "/practice-areas/protective-orders",
  "/practice-areas/same-sex-divorce",
  "/practice-areas/termination-of-parental-rights",
  "/practice-areas/uncontested-divorce",
];

const DEFAULT_SITE_URL = "https://www.texfamilylawyer.com";
/** Stable date; bump when sitemap URLs or content strategy changes meaningfully. */
const SITEMAP_LASTMOD = "2026-03-24";

export async function getServerSideProps({ res }) {
  try {
    const baseUrl = (
      process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL
    ).replace(/\/$/, "");

    const urls = ROUTES.map((route) => {
      const location = `${baseUrl}${route === "/" ? "" : route}`;
      return `<url><loc>${location}</loc><lastmod>${SITEMAP_LASTMOD}</lastmod><changefreq>monthly</changefreq></url>`;
    }).join("");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/xml; charset=utf-8");
    res.setHeader(
      "Cache-Control",
      "public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200"
    );
    res.write(sitemap);
    res.end();
  } catch (e) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/xml; charset=utf-8");
    res.write(
      '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>'
    );
    res.end();
  }

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
