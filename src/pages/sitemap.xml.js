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

export async function getServerSideProps({ res }) {
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.texfamilylawyer.com"
  ).replace(/\/$/, "");
  const lastModified = new Date().toISOString();

  const urls = ROUTES.map((route) => {
    const location = `${baseUrl}${route === "/" ? "" : route}`;
    return `<url><loc>${location}</loc><lastmod>${lastModified}</lastmod></url>`;
  }).join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
