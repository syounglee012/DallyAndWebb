import Image from "next/image";
import styled from "styled-components";
import SecondaryNav from "@/components/UI/attorney-secondary-nav/secondaryNav";
import AttorneyBanner from "@/components/UI/attorney-banner/attorneyBanner";
import AttorneyDropDown from "@/components/mobile-dropdown-menu/attorneyDropDown";
import banner from "../../../../public/images/copp_banner.png";

export default function Dally() {
  return (
    <Container>
      <AttorneyBanner
        src={banner}
        alt="Copp banner image"
        maxWidth={"434px"}
        top={"12px"}
        right={"23rem"}
        name={"LAURA E. COPP"}
        email={"LAURA@TEXFAMILYLAWYER.COM"}
        title={"SENIOR ASSOCIATE ATTORNEY"}
        priority={true}
      />
      <div className="center-wrapper">
        <Content className="item">
          <p>
            Although I initially intended to avoid both criminal defense and
            family law, my first position as Assistant Public Defender of Moore
            County introduced me to the courtroom. It quickly became clear that
            criminal defense was not my calling. At the same time, I began
            receiving requests for advice on family law matters. What began by
            chance developed into a passion. I discovered that I not only
            enjoyed family law but excelled at it. Practicing in this field has
            given me the opportunity to help people through some of life&apos;s
            most difficult moments, and the work continues to challenge me to
            grow as both an attorney and an advocate. I became Board Certified
            in Family Law in 2025 to further my knowledge and abilities as an
            attorney.
            <br />
            <br />I grew up in Frisco, Texas, and earned my undergraduate degree
            from the University of North Texas before graduating cum laude from
            St. Mary&apos;s University School of Law in 2017. I began my career
            in the Texas Panhandle, where I practiced for eight years before
            relocating. Outside the office, I enjoy working out, camping,
            playing Dungeons & Dragons, and spending time at home with my pets.
          </p>
          <span />
          <b>Education</b>
          <p>
            St. Mary&apos;s University School of Law – San Antonio, Texas,
            Doctor of Jurisprudence, Cum Laude (2017)
            <br />
            University of North Texas – Denton, Texas, Bachelor of Arts in
            History (2014)
          </p>
          <span />
          <b>Experience</b>
          <p>
            Briar Wilcox Law Firm, PLLC – Amarillo, Texas | Attorney and
            Counselor at Law
            <br />
            Law Office of Laura E. Copp – Amarillo, Texas | Attorney and
            Counselor at Law
            <br />
            Pingelton Law Office – Dumas, Texas | Attorney and Counselor at Law
          </p>
          <span />
          <b>Memberships</b>
          <p>
            State Bar of Texas
            <br />
            Family Law Section, State Bar of Texas
            <br />
            Collaborative Law Section, State Bar of Texas
            <br />
            Texas Bar College, State Bar of Texas
            <br />
            Family Law Section Leadership Class, State Bar of Texas
            <br />
            Collaborative Divorce Texas
            <br />
            Texas Academy of Family Law Specialists
            <br />
            Licensed to Practice in the Northern District of Texas, United
            States District Court
          </p>
          <span />
          <b>Seminars</b>
          <p>
            Speaker, 2025 Family Law Essentials – Laredo, &quot;Hard
            Evidence&quot;
            <br />
            Speaker, 2025 Family Law Essentials – Midland, &quot;Hard
            Evidence&quot;
            <br />
            Speaker and Co-Author, 2025 Advanced Family Law, &quot;Preparing for
            the Board Certification Exam&quot;
          </p>
        </Content>
        <div className="side-nav">
          <SecondaryNav />
        </div>
        <span className="mobile-dropdown">
          <AttorneyDropDown title={"Attorneys"} />
        </span>
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
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .side-nav {
    margin-left: auto;
    display: inline-flex;
  }

  .mobile-dropdown {
    display: none;
  }

  @media (max-width: 1300px) {
    .center-wrapper {
      padding: 2rem;
    }
    .item {
      order: 2;
    }
    .side-nav {
      display: none;
    }
    .mobile-dropdown {
      width: 100%;
      max-width: 492px;
      height: 44px;
      box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.1);
      display: block;
      margin: 0 auto 2rem auto;
      order: 1;
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
