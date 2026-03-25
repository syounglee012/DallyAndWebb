import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import mainPic from "../../public/images/home-main.png";
import PracticeAreas from "@/components/main/practice-areas/practiceAreas";
import WhyChooseUs from "@/components/main/why-choose-us/whyChooseUs";

export default function Home() {
  return (
    <Container>
      <ImageContainer>
        <div className="wrapper">
          <Image
            src={mainPic}
            alt="main content area image"
            priority
            quality={75}
            sizes="(max-width: 480px) 270px, (max-width: 600px) 350px, (max-width: 795px) 400px, (max-width: 900px) 480px, (max-width: 1100px) 520px, (max-width: 1400px) 650px, 700px"
            className="main-image item"
          />
          <MainText className="item">
            <h1 className="hero-heading">
              <span className="main-top-text">DIVORCE</span>
              <span className="hero-rule" aria-hidden="true" />
              <span className="main-top-text">CUSTODY</span>
              <span className="hero-rule" aria-hidden="true" />
              <span className="main-top-text">CHILD SUPPORT</span>
            </h1>
            <p className="main-text">
              At Dally & Webb Family Law, PLLC, we are dedicated to providing
              you with an unparalleled level of legal representation for all
              your family law needs. Our team of experienced attorneys
              understands the complexities and sensitivities involved in family
              law matters, and we are here to guide you through every step of
              the process.
            </p>
          </MainText>
        </div>

        <ConsultationButtonBox>
          <p className="location-title">OFFICE IN FORT WORTH</p>
          <Link className="button" href={"/contact-us"}>
            BOOK A CONSULTATION
          </Link>
        </ConsultationButtonBox>
      </ImageContainer>
      <PracticeAreas />
      <WhyChooseUs />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 750px;
  position: relative;
  overflow: hidden;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(39, 45, 71, 0.8);
    z-index: -1;
  }
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("/images/main-background.jpg") no-repeat;
    object-fit: contain;
    background-size: 100% 100%;
    z-index: -2;
  }
  .wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    gap: 1rem;
  }
  .main-image {
    width: 100%;
    max-width: 700px;
    height: auto;
  }

  @media (max-width: 1400px) {
    height: 660px;
    .main-image {
      max-width: 650px;
    }
  }
  @media (max-width: 1100px) {
    height: 520px;
    .main-image {
      max-width: 520px;
    }
  }
  @media (max-width: 900px) {
    height: 500px;
    .main-image {
      max-width: 480px;
    }
  }
  @media (max-width: 795px) {
    height: 580px;
    .wrapper {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0;
      padding-top: 110px;
    }
    .main-image {
      max-width: 400px;
      margin-top: 0;
      margin-bottom: 110px;
    }
    .item:nth-child(2) {
      order: -1;
    }
  }
  @media (max-width: 600px) {
    height: 680px;
    .main-image {
      max-width: 350px;
    }
  }
  @media (max-width: 480px) {
    height: 500px;

    .wrapper {
      padding-top: 150px;
    }

    .main-image {
      max-width: 270px;
    }
    ::after {
      background: url("/images/main-background-mobile.jpg") no-repeat center center;
      background-size: cover;
    }
  }
`;

const MainText = styled.div`
  width: 100%;
  max-width: 648px;
  margin-bottom: 3rem;
  align-self: center;

  .hero-heading {
    margin: 0;
    font-weight: inherit;
  }

  .hero-rule {
    display: block;
    width: 100%;
    max-width: 100%;
    border-top: 2px solid #67318d;
    margin: 1rem 0;
  }

  .main-top-text {
    color: #ffffff;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: 0.25em;
  }

  .main-text {
    color: #ffffff;
    font-family: "Montserrat";
    font-style: normal;
    font-size: 20px;
    line-height: 32px;
    margin-top: 1rem;
  }

  @media (max-width: 1400px) {
    .main-top-text {
      font-size: 34px;
      letter-spacing: 0.2em;
    }
    .main-text {
      font-size: 18px;
    }
    .hero-rule {
      margin: 0.6rem 0;
    }
  }
  @media (max-width: 1100px) {
    margin-bottom: 0;
    max-width: 460px;
    align-self: center;
    padding-bottom: 110px;
    .main-top-text {
      font-size: 26px;
      letter-spacing: 0.15em;
      line-height: 1.3;
    }
    .hero-rule {
      max-width: 100%;
      margin: 0.3rem 0;
    }
    .main-text {
      font-size: 14px;
      line-height: 1.5rem;
    }
  }
  @media (max-width: 900px) {
    .main-top-text {
      font-size: 22px;
      letter-spacing: 0.1em;
    }
    .hero-rule {
      max-width: 100%;
      margin: 0.3rem 0;
    }
    .main-text {
      font-size: 13px;
      line-height: 1.3rem;
    }
  }
  @media (max-width: 795px) {
    padding: 0.5rem 1.5rem 0 1.5rem;
    margin-top: 8rem;
    max-width: 100%;
    width: 100%;
    .main-top-text {
      font-size: 20px;
      letter-spacing: 4px;
      line-height: 1.8rem;
    }
    .hero-rule {
      max-width: 100%;
      margin: 0.2rem 0;
    }
    .main-text {
      font-size: 13px;
      line-height: 1.3rem;
    }
  }
  @media (max-width: 600px) {
    margin-top: 6rem;
    .main-top-text {
      font-size: 20px;
      letter-spacing: 4px;
      line-height: 1.8rem;
    }
    .hero-rule {
      max-width: 100%;
    }
    .main-text {
      font-size: 13px;
      line-height: 1.3rem;
    }
  }
  @media (max-width: 480px) {
    margin-top: 1rem;
    .main-top-text {
      font-size: 16px;
      letter-spacing: 3px;
      line-height: 1.5rem;
    }
    .hero-rule {
      max-width: 100%;
    }
    .main-text {
      font-size: 11px;
      line-height: 1.1rem;
    }
  }
`;

const ConsultationButtonBox = styled.div`
  background-color: #533575;
  position: absolute;
  width: 100%;
  height: 100px;
  bottom: 0;
  background-color: rgba(83, 53, 117, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .location-title {
    color: #ffffff;
    font-size: 20px;
    letter-spacing: 6px;
    display: inline-block;
    margin-right: 0;
    opacity: 1;
  }

  .button {
    color: #ffffff;
    border: 1px solid #ffffff;
    padding: 10px 40px;
    font-size: 16px;
    letter-spacing: 0.1em;

    :hover {
      border: 1px solid #c293ff;
      color: #c293ff;
    }
  }

  @media (max-width: 1400px) {
    justify-content: center;
    gap: 1rem;
    bottom: 0;
    .location-title {
      text-align: center;
      font-size: 16px;
      letter-spacing: 3px;
      margin-right: 0;
    }
    .button {
      padding: 10px 40px;
      font-size: 16px;
      letter-spacing: 0.1em;
    }
  }

  @media (max-width: 795px) {
    bottom: 0;
    flex-direction: column;
    gap: 0.2rem;

    .location-title {
      font-size: 12px;
      letter-spacing: 2px;
    }
    .button {
      padding: 10px 40px;
      font-size: 16px;
      letter-spacing: 0.1em;
    }
  }
`;
