import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PracticeAreaList() {
  const [activeLink, setActiveLink] = useState(null);
  const router = useRouter();
  const practiceAreas = [
    { label: "UNCONTESTED DIVORCE", href: "/practice-areas/uncontested-divorce" },
    { label: "CONTESTED DIVORCE", href: "/practice-areas/contested-divorce" },
    { label: "COLLABORATIVE DIVORCE", href: "/practice-areas/collaborative-divorce" },
    { label: "SAME-SEX DIVORCE", href: "/practice-areas/same-sex-divorce" },
    { label: "MILITARY DIVORCE", href: "/practice-areas/military-divorce" },
    { label: "CHILD CUSTODY", href: "/practice-areas/child-custody" },
    { label: "CHILD SUPPORT", href: "/practice-areas/child-support" },
    { label: "MODIFYING CUSTODY OR CHILD SUPPORT", href: "/practice-areas/modification" },
    { label: "GRANDPARENT RIGHTS", href: "/practice-areas/grandparent-rights" },
    { label: "PATERNITY", href: "/practice-areas/paternity" },
    { label: "ADOPTION", href: "/practice-areas/adoption" },
    { label: "PROTECTIVE ORDERS", href: "/practice-areas/protective-orders" },
    { label: "MEDIATION", href: "/practice-areas/mediation" },
    {
      label: "CHILD PROTECTIVE SERVICES (CPS)",
      href: "/practice-areas/child-protective-services",
    },
    {
      label: "TERMINATION OF PARENTAL RIGHTS",
      href: "/practice-areas/termination-of-parental-rights",
    },
  ];

  useEffect(() => {
    const path = router.pathname;
    const links = document.querySelectorAll("a");

    for (let i = 0; i < links.length; i++) {
      const href = links[i].getAttribute("href");
      if (href == path) {
        setActiveLink(links[i].getAttribute("href"));
        break;
      }
    }
  }, [router.pathname]);

  return (
    <Container>
      <span />
      <ul>
        {practiceAreas.map((item) => (
          <li className={activeLink === item.href ? "active" : ""} key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 320px;
  & span {
    display: block;
    width: 100%;
    border-top: 1px solid #67318d;
    margin-bottom: 1rem;
  }
  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  & li {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 35px;
    letter-spacing: 0.1em;
    color: #808080;
    margin-bottom: 15px;
    cursor: pointer;
    :hover {
      color: #67318d;
    }
    & a {
      color: inherit;
      text-decoration: none;
    }
  }
  .active {
    color: #67318d;
  }

  @media (max-width: 1300px) {
    display: none;
  }
`;
