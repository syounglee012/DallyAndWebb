import Image from "next/image";
import styled from "styled-components";
import SecondaryNav from "@/components/UI/attorney-secondary-nav/secondaryNav";
import AttorneyBanner from "@/components/UI/attorney-banner/attorneyBanner";
import banner from "../../../../public/images/hixon_banner.png";

export default function Dally() {
  return (
    <Container>
      <AttorneyBanner
        src={banner}
        alt="Hixon banner image"
        maxWidth={"434px"}
        top={"12px"}
        name={"LAKYN M. HIXON"}
        email={"LAKYN@TEXFAMILYLAWYER.COM"}
        title={"ASSOCIATE ATTORNEY"}
        priority={true}
      />
      <SecondaryNav />
      <div className="center-wrapper">
        <Content className="item">
          <p>
            My passion for family law comes from my own life experiences and
            challenges growing up. I understand firsthand how emotional and
            overwhelming family legal matters can be. That perspective drives me
            to be an advocate for my clients—someone who listens, supports, and
            guides them with understanding and compassion through every step of
            the process.
            <br />
            <br />
            I&apos;m a proud Russellville, Arkansas native and graduate of
            Arkansas Tech University. I earned my Juris Doctorate from the
            University of Arkansas at Little Rock William H. Bowen School of
            Law, where I worked in the family law clinic and served as Clerk of
            the Exchequer for Delta Theta Phi during my 2L and 3L years.
            <br />
            <br />
            Outside of work, I enjoy spending time with my family, friends, and
            two dogs.
          </p>
          <span />
          <b>Education</b>
          <p>
            William H. Bowen School of Law Juris Doctorate, 2025
            <br />
            Arkansas Tech University, Bachelor of Science, Business Data
            Analytics, 2015, Dean&apos;s List, Alpha Sigma Tau Sorority
          </p>
        </Content>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .center-wrapper {
    width: 100%;
    max-width: 1230px;
    margin: 0 auto;
    padding: 4rem 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (max-width: 1300px) {
    .center-wrapper {
      padding: 2rem;
    }
    .item:nth-child(2) {
      order: -1;
      margin: 1rem 0 2rem;
    }
  }
`;

const Content = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 752px;
  & b {
    font-weight: 700;
    display: block;
  }
  & p {
    margin-top: 0.5rem;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    display: inline-block;
  }

  & span {
    display: block;
    width: 100%;
    max-width: 488px;
    border-top: 1px solid #67318d;
    margin: 2rem 0;
  }
`;
