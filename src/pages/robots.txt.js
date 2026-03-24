export async function getServerSideProps({ res }) {
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.texfamilylawyer.com"
  ).replace(/\/$/, "");

  const robotsText = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

  res.setHeader("Content-Type", "text/plain");
  res.write(robotsText);
  res.end();

  return { props: {} };
}

export default function Robots() {
  return null;
}
