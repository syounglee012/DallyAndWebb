import Image from "next/image";
import styled from "styled-components";

const Images = styled(Image)`
  width: 100%;
  max-width: 552px;
  height: auto;
  position: absolute;
  right: 10rem;
  z-index: 999;

  @media (max-width: 768px) {
    max-width: 300px;
    right: -10px;
  }
`;
export default function attorneyBanner(props) {
  return (
    <Container>
      <Title>
        <h1>{props.name}</h1>
        <h2>ATTORNEY & COUNSELOR AT LAW</h2>
      </Title>
      <Images
        src={props.src}
        alt={props.alt}
        style={{
          top: `${props.top}`,
        }}
      />

      <Contact>
        <h4>817-409-1136</h4>
        <h4>{props.email}</h4>
      </Contact>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  background-color: #272d47;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Title = styled.div`
  position: absolute;
  top: 6rem;
  left: 18rem;
  & h1 {
    font-size: 3rem;
    color: #ffffff;
    letter-spacing: 12px;
    border-bottom: 2px solid #67318d;
    width: fit-content;
    padding-bottom: 1rem;
  }
  & h2 {
    color: #ffffff;
    letter-spacing: 5px;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    left: 50px;
    font-size: 12px;
    padding: 0.5rem 1rem;
  }
`;
const Contact = styled.div`
  width: 100%;
  background-color: rgba(83, 53, 117, 0.7);
  padding: 1.3rem;
  position: absolute;
  bottom: 0;

  & h4 {
    color: #ffffff;
    font-size: 1.1rem;
    letter-spacing: 4px;
    margin: 0.5rem 0 0.5rem 17rem;
  }
`;
