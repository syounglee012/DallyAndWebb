import Head from "next/head";
import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/footer/footer";
import styled from "styled-components";
import { useRouter } from "next/router";
import "../styles/globals.css";
import ContactInfos from "@/components/contact-us/contactInfo";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Analytics } from "@vercel/analytics/next";

const SITE_NAME = "Dally & Webb Family Law, PLLC";
const DEFAULT_TITLE = "Fort Worth Family Law Attorneys | Dally & Webb";
const DEFAULT_DESCRIPTION =
  "Dally & Webb Family Law, PLLC serves Fort Worth families with experienced representation in divorce, child custody, child support, mediation, and related family law matters.";

const SEO_BY_PATH = {
  "/": {
    title: "Fort Worth Family Law Attorneys | Dally & Webb",
    description:
      "Fort Worth family law attorneys focused on divorce, custody, support, and complex family law disputes. Trusted, compassionate, and strategic representation.",
  },
  "/attorneys": {
    title: "Our Attorneys | Dally & Webb Family Law",
    description:
      "Meet the attorneys at Dally & Webb Family Law, PLLC and learn about their background, experience, and commitment to families in Fort Worth.",
  },
  "/practice-areas": {
    title: "Practice Areas | Dally & Webb Family Law",
    description:
      "Explore Dally & Webb's family law practice areas including divorce, child custody, child support, adoption, mediation, and more.",
  },
  "/contact-us": {
    title: "Contact Us | Dally & Webb Family Law",
    description:
      "Contact Dally & Webb Family Law, PLLC to schedule a consultation with a Fort Worth family law attorney.",
  },
  "/about-us": {
    title: "About Us | Dally & Webb Family Law",
    description:
      "Learn about Dally & Webb Family Law, PLLC and our approach to helping families navigate difficult legal transitions.",
  },
  "/memoriam": {
    title: "In Memoriam: Daniel P. Webb | Dally & Webb",
    description:
      "A memorial page honoring Daniel P. Webb and his enduring legacy in family law and the Fort Worth community.",
  },
};

export default function App({ Component, pageProps }) {
  const siteKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY;
  const router = useRouter();
  const currentPath = (router.asPath || "/").split("?")[0];
  const pageSeo = SEO_BY_PATH[currentPath] || {};
  const pageTitle = pageSeo.title || DEFAULT_TITLE;
  const pageDescription = pageSeo.description || DEFAULT_DESCRIPTION;
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "");
  const canonicalUrl = baseUrl
    ? `${baseUrl}${currentPath === "/" ? "" : currentPath}`
    : null;
  const ogImageUrl = baseUrl ? `${baseUrl}/images/logo-footer.svg` : null;

  return (
    <>
      <Analytics />
      <GoogleReCaptchaProvider
        reCaptchaKey={siteKey}
        scriptProps={{
          async: false,
          defer: false,
          appendTo: "head",
          nonce: undefined,
        }}
      >
        <Head>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:locale" content="en_US" />
          {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
          {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />
          {ogImageUrl && <meta name="twitter:image" content={ogImageUrl} />}
          {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

          <link rel="icon" href="/dw.svg" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        </Head>

        <Container>
          <Navigation />
          <Component {...pageProps} />
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
