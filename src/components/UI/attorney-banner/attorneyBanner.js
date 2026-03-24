import Image from "next/image";
import styled from "styled-components";

export default function attorneyBanner(props) {
  const memoriam = Boolean(props.memoriam);
  const memoriamSubline =
    props.memoriamSubline ?? "DANIEL P. WEBB • 1980 - 2026";

  return (
    <Container
      maxWidth={props.maxWidth}
      top={props.top}
      mobileTop={props.mobileTop}
      right={props.right}
      $memoriam={memoriam}
    >
      <Title $memoriam={memoriam}>
        <p className="header-white-large">
          {memoriam ? "IN MEMORIAM" : props.name}
        </p>
        <p className="practice-area">
          {memoriam
            ? memoriamSubline
            : props.title || "ATTORNEY & COUNSELOR AT LAW"}
        </p>
      </Title>
      {props.src && (
        <Image
          className="attorney-banner-img"
          src={props.src}
          alt={props.alt}
          loading="eager"
        />
      )}

      <Contact $memoriam={memoriam}>
        {!memoriam && (
          <div className="contact-wrapper">
            <p className="contact-info">817-409-1136</p>
            <p className="contact-info">{props.email}</p>
          </div>
        )}
      </Contact>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: ${(props) => (props.$memoriam ? "300px" : "400px")};
  position: relative;
  background-color: #272d47;

  .attorney-banner-img {
    width: 100%;
    max-width: ${(props) => (props.maxWidth ? props.maxWidth : "452px")};
    height: auto;
    position: absolute;
    right: ${(props) => (props.right ? props.right : "10rem")};
    z-index: 2;
    top: ${(props) => (props.top ? props.top : "-18px")};
  }

  @media (max-width: 1300px) {
    height: ${(props) => (props.$memoriam ? "180px" : "200px")};
    .attorney-banner-img {
      display: none;
    }
  }
`;

const Title = styled.div`
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1230px;
  padding-left: 0;

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

  ${(p) =>
    p.$memoriam &&
    `
    .practice-area {
      letter-spacing: 0.12em;
    }
  `}

  @media (max-width: 1510px) {
    .header-white-large {
      font-size: 32px;
      letter-spacing: 0.2em;
      padding-bottom: 0.2rem;
    }
  }
  @media (max-width: 1300px) {
    top: 0;
    left: 2rem;
    transform: none;
    max-width: none;
    padding-left: 0;
    .header-white-large {
      font-size: 32px;
      letter-spacing: 0.2em;
      padding-bottom: 0.2rem;
    }
    .practice-area {
      font-size: 18px;
      margin-top: 0.5rem;
    }
  }
  @media (max-width: 672px) {
    top: 2rem;
    left: 2rem;
    .header-white-large {
      font-size: 24px;
      line-height: normal;
      letter-spacing: 5px;
      border-bottom: 1px solid #67318d;
      padding-bottom: 0.5rem;
    }
    .practice-area {
      font-size: 14px;
      letter-spacing: 2px;
      margin-top: 0rem;
    }
  }
`;
const Contact = styled.div`
  width: 100%;
  background-color: rgba(83, 53, 117, 0.7);
  padding: ${(p) => (p.$memoriam ? "1.25rem 0" : "1rem 0")};
  min-height: ${(p) => (p.$memoriam ? "3.5rem" : "auto")};
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;

  .contact-wrapper {
    width: 100%;
    max-width: 1230px;
  }

  .contact-info {
    color: #ffffff;
    font-size: 20px;
    letter-spacing: 0.25em;
    margin: 0.5rem 0;
  }

  @media (max-width: 1300px) {
    padding: ${(p) => (p.$memoriam ? "0.75rem 1rem" : "0.5rem 1rem")};
    min-height: ${(p) => (p.$memoriam ? "2.75rem" : "auto")};
    justify-content: flex-start;

    .contact-wrapper {
      max-width: none;
    }

    .contact-info {
      font-size: 13px;
      line-height: normal;
      letter-spacing: 2px;
      margin: 0.5rem 0 0.5rem 1rem;
    }
  }

  @media (max-width: 672px) {
    .contact-info {
      font-size: 11px;
    }
  }
`;
