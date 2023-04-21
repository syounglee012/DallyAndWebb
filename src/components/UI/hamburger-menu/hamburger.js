import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const closeRef = useRef(null);

  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (closeRef.current && !closeRef.current.contains(event.target)) {
        return setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeRef]);

  return (
    <Container ref={closeRef}>
      <input
        type="checkbox"
        className={"check"}
        checked={isOpen}
        onClick={() => handleClick()}
      />
      <div className="ham-menu">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
      <ul className={`menu-items`}>
        <Link href={"/"} className="link">
          <li onClick={() => handleClick()}>HOME</li>
        </Link>
        <Link href={"/attorneys"}>
          <li onClick={() => handleClick()}>ATTORNEYS</li>
        </Link>
        <Link href={"/practice-areas"}>
          <li onClick={() => handleClick()}>PRACTICE AREAS</li>
        </Link>
        <Link href={"/about-us"}>
          <li onClick={() => handleClick()}>ABOUT US</li>
        </Link>
        <Link href={"/contact-us"}>
          <li onClick={() => handleClick()}>CONTACT US</li>
        </Link>
      </ul>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  ::after,
  ::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .menu-items {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    text-align: center;
    padding: 3rem 6rem;
    list-style: none;
    opacity: 0;
    font-size: 2rem;
    background-color: #ffffff;
    transform: translateY(-5%);
    transition: transform 1s ease-in-out, opacity 1s;
    pointer-events: none;
  }

  .menu-items li {
    color: black;
    padding: 0.5rem;
    cursor: pointer;
  }

  .menu-items li :hover {
    color: rgb(174, 174, 174);
  }

  .menu-items li :active {
    color: rgb(174, 174, 174);
  }

  .check {
    position: absolute;
    top: 0;
    right: 10px;
    height: 3rem;
    width: 3rem;
    opacity: 0;
    z-index: 3;
  }

  .check:hover {
    cursor: pointer;
  }

  .check:checked ~ .menu-items {
    pointer-events: all;
    transform: translateY(0%);
    opacity: 1;
  }

  .ham-menu {
    height: 3rem;
    width: 3rem;
    position: absolute;
    top: 0;
    right: 10px;
    padding: 0.9rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #ffffff;
    cursor: pointer;
  }

  .ham-menu .line {
    background-color: black;
    border-radius: 1rem;
    width: 21px;
    height: 2px;
  }

  .ham-menu .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
  }

  .ham-menu .line2 {
    transition: opacity 0.4s ease-in-out;
  }

  .ham-menu .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
  }

  .check:checked ~ .ham-menu .line1 {
    display: block;
    transform: rotate(45deg);
  }

  .check:checked ~ .ham-menu .line2 {
    opacity: 0;
  }

  .check:checked ~ .ham-menu .line3 {
    display: block;
    transform: rotate(-45deg);
  }
`;