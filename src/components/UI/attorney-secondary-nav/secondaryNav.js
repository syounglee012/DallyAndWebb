import React from "react";
import styled from "styled-components";
import Link from "next/link";
import attorneys from "../../../../public/attorneys.json";

export default function SecondaryNav() {
  return (
    <NameBox>
      {attorneys.map((attorney, idx) => {
        return (
          <Link
            href={`/attorneys/${
              attorney.substring(0, 1) == "j"
                ? attorney.split(", ")[0].split(" ").pop()
                : attorney.split(" ").pop()
            }`}
            key={attorney + idx}
          >
            <p className="attorney-name">{attorney.toUpperCase()}</p>
          </Link>
        );
      })}
    </NameBox>
  );
}
const NameBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  border-top: 1px solid #67318d;
  letter-spacing: 2px;
  padding-top: 1rem;
  gap: 1rem;

  .attorney-name {
    color: #808080;
    font-size: 20px;
    font-weight: 500;
    :hover {
      color: #c293ff;
    }
  }
`;
