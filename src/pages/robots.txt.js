const DEFAULT_SITE_URL = "https://www.texfamilylawyer.com";

export async function getServerSideProps({ res }) {
  try {
    const baseUrl = (
      process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL
    ).replace(/\/$/, "");

    const robotsText = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader(
      "Cache-Control",
      "public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200"
    );
    res.write(robotsText);
    res.end();
  } catch {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.write("User-agent: *\nAllow: /\n");
    res.end();
  }

  return { props: {} };
}

export default function Robots() {
  return null;
}
