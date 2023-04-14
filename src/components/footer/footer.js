import Link from "next/link";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <p>1234 Main Street</p>
        <p>Anytown, USA 12345</p>
        <p>Phone: 555-555-5555</p>
        <p>Fax: 555-555-5555</p>
      </div>
      <ul>
        <li>
          <Link href="/home">Home</Link>
        </li>

        <li>
          <Link href="/attorneys/dally">Dally</Link>
        </li>

        <li>
          <Link href="/attorneys/webb">Webb</Link>
        </li>

        <li>
          <Link href="/attorneys/brewington">Brewington</Link>
        </li>
      </ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: 100%;
  bottom: 0;
  position: relative;
  background-color: #272d47;
  color: #fff;
`;
