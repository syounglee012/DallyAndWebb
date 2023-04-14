import styled from "styled-components";

export default function WhyChooseUs() {
  return (
    <Constainer>
      <div>
        <h1>WHY CHOOSE US</h1>
        <span />
        <p>
          We understand the importance of effective communication, and we are
          committed to keeping you informed throughout your case. We will work
          tirelessly to achieve the best possible outcome for you and your loved
          ones.
          <br />
          <br />
          Contact us today to schedule a consultation and find out how we can
          help you with your family law needs. We are here for you every step of
          the way.
        </p>
      </div>
    </Constainer>
  );
}

const Constainer = styled.div`
  background-color: #f5f5f5;

  & div {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
  }
  & h1 {
    color: #533575;
    font-size: 30px;
    letter-spacing: 4px;
    width: fit-content;
    font-weight: 200;
    border-bottom: 2px solid #533575;
    padding-bottom: 1rem;
  }
  & span {
    display: block;
    border-bottom: 1px solid black;
    margin-bottom: 2rem;
  }

  & p {
    font-size: 20px;
    line-height: 1.8rem;
    letter-spacing: 1px;
    width: 90%;
  }
`;
