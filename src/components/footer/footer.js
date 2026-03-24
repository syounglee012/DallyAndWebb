import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import footerLogo from "../../../public/images/logo-footer.svg";
import attorneys from "../../../public/attorneys.json";

export default function Footer() {
  return (
    <FooterContainer>
      <div className="container">
        <Image
          src={footerLogo}
          alt="footer logo"
          style={{
            width: "100%",
            maxWidth: "500px",
            height: "auto",
            position: "relative",
            marginTop: "-2rem",
          }}
        />
        <Wapper>
          <div className="inside-wrapper">
            <Link href="/contact-us">
              <p className="footer-title">FORT WORTH OFFICE</p>
            </Link>
            <span />
            <p>
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

          <div className="inside-wrapper">
            <Link href="/attorneys">
              <p className="footer-title">ATTORNEYS</p>
            </Link>
            <span />
            <ul>
              {attorneys.map((attorney, idx) => {
                return (
                  <li key={attorney + idx}>
                    <Link
                      href={`/attorneys/${
                        attorney.substring(0, 1) == "j"
                          ? attorney.split(", ")[0].split(" ").pop()
                          : attorney.split(" ").pop()
                      }`}
                      className="attorney-name"
                    >
                      {attorney.toUpperCase()}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="inside-wrapper inside-wrapper--memoriam">
            <Link href="/memoriam">
              <p className="footer-title footer-title--small">
                IN MEMORIAM: DANNY WEBB
              </p>
            </Link>
            <span />
          </div>
        </Wapper>
        <p className="rights">
          &#169; 2026 Dally & Webb Family Law, PLLC. All rights reserved. Legal.
        </p>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: 100%;
  bottom: 0;
  position: relative;
  background-color: #272d47;
  padding: 2rem;

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  .rights {
    color: #ffffff;
    width: 100%;
    text-align: end;
    font-size: 10px;
  }

  @media (max-width: 868px) {
    .rights {
      font-size: 8px;
      text-align: center;
    }
  }
`;

const Wapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 4rem;
  .inside-wrapper {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    max-width: 220px;
  }
  .inside-wrapper--memoriam {
    width: max-content;
    max-width: 100%;
  }
  .inside-wrapper--memoriam span {
    max-width: none;
    width: 100%;
  }
  & span {
    display: block;
    width: 100%;
    max-width: 300px;
    border-top: 1px solid #67318d;
    margin: 1rem 0;
  }

  & p,
  .footer-title {
    color: #ffffff;
    font-size: 14px;
  }

  .footer-title {
    letter-spacing: 3px;
    transition: 0.3s ease-in-out;
    :hover {
      color: #c293ff;
    }
    &.footer-title--small {
      white-space: nowrap;
    }
  }

  .contact-link {
    color: #ffffff;
    font-size: 14px;
    font-family: inherit;
    line-height: inherit;
    text-decoration: none;
    transition: 0.3s ease-in-out;
    :hover {
      color: #c293ff;
    }
  }

  .attorney-name {
    color: #ffffff;
    font-size: 14px;
    text-decoration: none;
    transition: 0.3s ease-in-out;
    :hover {
      color: #c293ff;
    }
  }

  .italic {
    font-style: italic;
  }
  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
    & li {
      color: #ffffff;
      font-size: 14px;
      transition: 0.3s ease-in-out;
      :hover {
        color: #c293ff;
      }
    }
  }

  @media (max-width: 1200px) {
    & span {
      max-width: 220px;
    }
    .inside-wrapper {
      margin-bottom: 2rem;
    }
  }
`;
