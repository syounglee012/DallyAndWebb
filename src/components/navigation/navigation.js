import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/banner_logo.png";
import phone from "../../../public/images/phone.png";

export default function Navigation() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <Nav>
      <Link href={"/"}>
        <Image
          src={logo}
          alt="banner logo"
          width={478}
          height={74}
          className="logo"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Link>

      <ul>
        <Link href={"/attorneys"} className="link">
          <li>ATTORNEYS</li>
        </Link>
        <Link href={"/practice-areas"} className="link">
          <li>PRACTICE AREAS</li>
        </Link>
        <Link href={"/about-us"} className="link">
          <li>ABOUT US</li>
        </Link>
        <Link href={"/contact-us"} className="link">
          <li>CONTACT US</li>
        </Link>
      </ul>
      <button>
        <Image
          src={phone}
          alt="phone"
          width={261}
          height={47}
          size="100vw"
          className="phoneLogo"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </button>
    </Nav>
  );
}

const Nav = styled.nav`
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: #ffffff;
  padding: 3rem 2rem 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & ul {
    & li {
      display: inline-block;
      margin: 0 3rem;
      font-size: 1.2rem;
      letter-spacing: 1px;
    }
  }

  .link {
    color: black;
  }

  & button {
    position: absolute;
    top: 0;
    right: 80px;
    border: none;
    cursor: pointer;
    z-index: 9999;
    margin-top: -8px;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 1rem 1rem 1rem;
    & ul {
      display: none;
    }
    .logo {
      max-width: 200px;
      margin: -2rem 0 0 -8px;
    }
  }
  & button {
    margin: -2px 0 0;
  }
  .phoneLogo {
    max-width: 120px;
  }
`;
