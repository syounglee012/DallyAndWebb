import Image from "next/image";
import styled from "styled-components";

export default function attorneyBanner(props) {
  return (
    <Container top={props.top} mobileTop={props.mobileTop}>
      <Title>
        <p className="header-white-large">{props.name}</p>
        <p className="practice-area">ATTORNEY & COUNSELOR AT LAW</p>
      </Title>
      <Image className="attorney-banner-img" src={props.src} alt={props.alt} />

      <Contact>
        <p className="contact-info">817-409-1136</p>
        <p className="contact-info">{props.email}</p>
      </Contact>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  background-color: #272d47;
  .attorney-banner-img {
    width: 100%;
    max-width: 552px;
    height: auto;
    position: absolute;
    right: 6rem;
    z-index: 2;
    top: ${(props) => (props.top ? props.top : "-18px")};
  }
  @media (max-width: 1200px) {
    .attorney-banner-img {
      right: -4rem;
    }
  }
  @media (max-width: 572px) {
    height: 200px;
    .attorney-banner-img {
      max-width: 250px;
      right: -2rem;
      top: ${(props) => (props.mobileTop ? props.mobileTop : "11px")};
    }
  }
`;

const Title = styled.div`
  position: absolute;
  top: 4rem;
  left: 6rem;

  .header-white-large {
    border-bottom: 2px solid #67318d;
    width: fit-content;
    padding-bottom: 1rem;
  }
  .practice-area {
    font-size: 21px;
    color: #ffffff;
    letter-spacing: 0.15em;
    margin-top: 1rem;
  }

  @media (max-width: 1000px) {
    top: 5rem;
    left: 2rem;
    .header-white-large {
      font-size: 30px;
      letter-spacing: 0.1em;
      padding-bottom: 0.5rem;
    }
    .practice-area {
      font-size: 16px;
      margin-top: 0.5rem;
    }
  }
  @media (max-width: 572px) {
    top: 2rem;
    left: 2rem;
    .header-white-large {
      font-size: 16px;
      line-height: normal;
      letter-spacing: 5px;
      border-bottom: 1px solid #67318d;
      padding-bottom: 0.5rem;
    }
    .practice-area {
      font-size: 10px;
      letter-spacing: 2px;
      margin-top: 0.5rem;
    }
  }
`;
const Contact = styled.div`
  width: 100%;
  background-color: rgba(83, 53, 117, 0.7);
  padding: 1rem;
  position: absolute;
  bottom: 0;

  .contact-info {
    color: #ffffff;
    font-size: 20px;
    letter-spacing: 0.25em;
    margin: 0.5rem 0 0.5rem 5rem;
  }

  @media (max-width: 1000px) {
    padding: 0;
    padding-left: 1rem;
    .contact-info {
      font-size: 12px;
      line-height: normal;
      letter-spacing: 2px;
      margin: 0.5rem 0 0.5rem 1rem;
    }
  }

  @media (max-width: 572px) {
    padding: 0;
    padding-left: 1rem;
    .contact-info {
      font-size: 7px;
      line-height: normal;
      letter-spacing: 2px;
      margin: 0.5rem 0 0.5rem 1rem;
    }
  }
`;