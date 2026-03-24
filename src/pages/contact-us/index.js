import styled from "styled-components";
import Banner from "@/components/UI/banner/banner";
import bannerImage from "../../../public/images/attorney-landing-banner.png";
import GoogleMap from "@/components/google-map/googleMap";

export default function ContactUs() {
  return (
    <>
      <Banner
        src={bannerImage}
        alt={"attorney landing page banner image"}
        title="CONTACT US"
        left="180px"
      />
      <Container>
        <div className="center-wrapper">
          <GoogleMap />
          <InfoBox>
            <div>
              <p className="contact-info">
                To schedule a consultation, call{" "}
                <a className="contact-link" href="tel:8174091136">
                  817-409-1136
                </a>{" "}
                or contact us online through the form below.
              </p>
            </div>

            <div className="inside-wrapper">
              <p className="location-title">FORT WORTH OFFICE</p>
              <span />
              <p className="body-copy">
                2813 S. Hulen Street, Suite 250
                <br /> Fort Worth, Texas 76109 <br />
                Tel:{" "}
                <a className="contact-link" href="tel:8174091136">
                  817-409-1136
                </a>{" "}
                <br />
                Fax: 817-887-4244 <br />
                <a className="contact-link" href="mailto:lori@texfamilylawyer.com">
                  lori@texfamilylawyer.com
                </a>{" "}
                <br />
              </p>
            </div>
          </InfoBox>
        </div>
        <p className="lower-text">
          **DISCLAIMER: This website presents general information about Dally &
          Webb Family Law, PLLC and is not intended as legal advice nor should
          you consider it as such. You should not act upon this information
          without seeking professional counsel. Please keep in mind that merely
          contacting Dally & Webb Family Law, PLLC will not establish an
          attorney-client relationship. Dally & Webb Family Law, PLLC cannot
          represent you until the firm knows there would not be a conflict of
          interest, and the firm determines that it is otherwise able to accept
          the engagement. Accordingly, please do not send Dally & Webb Family
          Law, PLLC any information or documents until a formal attorney-client
          relationship has been established through a consultation with an
          attorney and you get authorization in the form of an engagement letter
          or contract for legal services from Dally & Webb Family Law, PLLC. Any
          information or documents sent prior to your receipt of an engagement
          letter or contract for legal services cannot be treated as
          confidences, secrets or protected information of any nature.
        </p>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 4rem;

  .center-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    max-width: 1500px;
    margin: 0 auto;
  }
  .lower-text {
    width: 100%;
    max-width: 1200px;
    margin: 4rem auto 0 auto;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
  }

  @media (max-width: 1068px) {
    padding: 2rem;
    .center-wrapper {
      align-items: center;
      flex-direction: column;
    }
  }
`;

const InfoBox = styled.div`
  width: 100%;
  max-width: 620px;
  margin-left: 1rem;
  & span {
    display: block;
    width: 100%;
    max-width: 299px;
    border-top: 1px solid #67318d;
    margin: 1rem 0;
  }
  .contact-info {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 36px;
    color: #67318d;
  }
  .location-title {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.15em;
    color: #272d47;
    margin-top: 1.5rem;
  }
  .contact-link {
    color: inherit;
    text-decoration: none;
    transition: 0.3s ease-in-out;
    :hover {
      color: #c293ff;
    }
  }

  .italic {
    font-style: italic;
    font-size: 14px;
  }

  .inside-wrapper {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    max-width: 376px;
  }

  @media (max-width: 768px) {
    padding-top: 1rem;
  }
`;
