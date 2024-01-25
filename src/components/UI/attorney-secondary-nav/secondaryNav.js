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
            href={`/attorneys/${attorney.split(" ").pop()}`}
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
  max-width: 1230px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  border-top: 1px solid #67318d;
  letter-spacing: 2px;
  margin: 4rem auto 0;

  .attorney-name {
    color: #808080;
    font-size: 20px;
    font-weight: 500;
    :hover {
      color: #c293ff;
    }
  }
`;
