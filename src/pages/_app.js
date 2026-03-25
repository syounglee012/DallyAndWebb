import Head from "next/head";
import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/footer/footer";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import ContactInfos from "@/components/contact-us/contactInfo";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Analytics } from "@vercel/analytics/next";
import { SEO_BY_PATH } from "@/config/seoByPath";
import JsonLd from "@/components/seo/JsonLd";

const SITE_NAME = "Dally & Webb Family Law, PLLC";
const DEFAULT_TITLE = "Fort Worth Family Law Attorneys | Dally & Webb";
const DEFAULT_DESCRIPTION =
  "Dally & Webb Family Law, PLLC serves Fort Worth families with experienced representation in divorce, child custody, child support, mediation, and related family law matters.";

const DEFAULT_SITE_URL = "https://www.texfamilylawyer.com";
const OG_IMAGE_PATH = "/images/about-us-main.png";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

function normalizePath(asPath) {
  const path = (asPath || "/").split("?")[0];
  if (path !== "/" && path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path;
}

function legalServiceSchema(baseUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: SITE_NAME,
    url: baseUrl,
    telephone: "+1-817-409-1136",
    email: "lori@texfamilylawyer.com",
    image: `${baseUrl}${OG_IMAGE_PATH}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2813 S. Hulen Street, Suite 250",
      addressLocality: "Fort Worth",
      addressRegion: "TX",
      postalCode: "76109",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Texas",
    },
  };
}

export default function App({ Component, pageProps }) {
  const siteKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY;
  const router = useRouter();
  const currentPath = normalizePath(router.asPath);
  const pageSeo = SEO_BY_PATH[currentPath] || {};
  const pageTitle = pageSeo.title || DEFAULT_TITLE;
  const pageDescription = pageSeo.description || DEFAULT_DESCRIPTION;
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL
  ).replace(/\/$/, "");
  const canonicalUrl = `${baseUrl}${currentPath === "/" ? "" : currentPath}`;
  const ogImageUrl = `${baseUrl}${OG_IMAGE_PATH}`;
  const googleSiteVerification =
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

  return (
    <>
      <Analytics />
      <GoogleReCaptchaProvider
        reCaptchaKey={siteKey}
        scriptProps={{
          async: true,
          defer: true,
          appendTo: "head",
          nonce: undefined,
        }}
      >
        <Head>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
          {googleSiteVerification ? (
            <meta
              name="google-site-verification"
              content={googleSiteVerification}
            />
          ) : null}
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:image" content={ogImageUrl} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />
          <meta name="twitter:image" content={ogImageUrl} />
          <link rel="canonical" href={canonicalUrl} />
          <JsonLd data={legalServiceSchema(baseUrl)} />

          <link rel="icon" href="/dw.svg" />
        </Head>

        <Container className={montserrat.className}>
          <Navigation />
          <main>
            <Component {...pageProps} />
          </main>
          <ContactInfos />
          <Footer />
        </Container>
      </GoogleReCaptchaProvider>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;
