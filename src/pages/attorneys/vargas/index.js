import Image from "next/image";
import styled from "styled-components";
import AttorneyBanner from "@/components/UI/attorney-banner/attorneyBanner";
import banner from "../../../../public/images/sara-banner.png";
import SecondaryNav from "@/components/UI/attorney-secondary-nav/secondaryNav";
import profile from "../../../../public/images/Sara.jpeg";
export default function Vargas() {
  return (
    <Container>
      <AttorneyBanner
        src={banner}
        alt="Sara banner image"
        name={"SARA VARGAS"}
        email={"SARA@TEXFAMILYLAWYER.COM"}
        top={"15px"}
        mobileTop={"15px"}
        maxWidth={"440px"}
        priority={true}
      />
      <SecondaryNav />
      <div className="center-wrapper">
        <Content className="item">
          <p>
            Driven by my own experience of finding my father and siblings, I am
            passionate about advocating for my clients in and outside of the
            courtroom. Whether it is a simple divorce or a complicated appeal, I
            assist my clients in navigating the court system while also
            bettering their family. I enjoy connecting with my clients by
            learning their stories, and helping them through difficult
            situations.
            <br />
            <br />I grew up primarily in Minnesota with a single mom, but we
            moved often. I now proudly call Texas home. I attended Hardin-Simmon
            University in Abilene for my undergraduate degree, and graduated
            from Texas A&M University School of Law in 2019. In my free time, I
            enjoy playing basketball, kickboxing, travelling to different
            beaches, spending time with my family and two dogs.
            <br />
            <br />
            While at Texas A&M, I was a member of Phi Delta Phi, a two-time
            fellow for the Aggie Public Interest Law Fellowship, served on the
            Honor Council, and was a mock trial competitor.
          </p>
          <span />
          <b>Education</b>
          <p>
            Texas A&M School of Law Juris Doctorate 2019 - Phi Delta Phi,
            two-time Fellow - Aggie Public Interest Law Fellowship, Board Member
            - Honor Council, President - Black Law Students Association
            <br />
            <br />
            Hardin Simmons University B.B.S. Criminal Justice 2016 - Magna Cum
            Laude, Dean&apos;s List, ASC All-Academic
          </p>
          <span />
          <b>Experience</b>
          <p>Nag Law Firm, P.C. - Managing Attorney, Family Law</p>
          <span />
          <b>Memberships</b>
          <p>
            State Bar of Texas, 2019-present
            <br />
            Tarrant County Family Law Bar Association, 2020-present
            <br />
            Tarrant County Bar Association, 2019-present
            <br />
            L. Clifford Davis Legal Association, 2016-present
            <br />
            State Bar of Texas Family Law Section, 2020-present
            <br />
            State Bar of Texas African American Lawyers Section, 2020-present
            <br />
            Texas Bar College, 2022 - present
          </p>
          <br />
          <br />
          <b>Awards</b>
          <p>
            2022 Top Attorney, Fort Worth Magazine
            <br />
            2023 Top Attorney, Fort Worth Magazine
            <br />
            2023 Inaugural L. Clifford Davis Legal Association Young Trailblazer
          </p>
          <br />
          <br />
          <b>Community Involvement</b>
          <p>
            Board member of Tarrant County Young Lawyers Association,
            2022-present
            <br />
            Board member ACH Child and Family Services, 2022-present
          </p>
        </Content>
        <Image
          src={profile}
          alt="Dally profile picture"
          className="item"
          quality={100}
          style={{
            height: "auto",
            maxHeight: "472px",
            width: "100%",
            maxWidth: "460px",
          }}
          priority={true}
        />
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
