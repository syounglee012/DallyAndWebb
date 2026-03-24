import Image from "next/image";
import styled from "styled-components";
import AttorneyBanner from "@/components/UI/attorney-banner/attorneyBanner";
import memoriamImage from "../../../../public/images/memoriam.jpg";

export default function Webb() {
  return (
    <Container>
      <AttorneyBanner
        memoriam
        memoriamSubline="DANIEL P. WEBB • 1980 - 2026"
      />
      <div className="center-wrapper">
        <Content className="item">
          <p>
            Daniel Paul Webb, 46, of Fort Worth, TX, passed away on January 28,
            2026, leaving behind a legacy as big as Texas and a heart even
            bigger.
            <br />
            <br />
            Danny didn&apos;t plan on practicing family law -- it was actually the
            one area he intended to avoid. But life had other plans. He
            discovered a rare talent for it, and a deep sense of purpose in
            guiding families through some of the most difficult passages of
            their lives. He earned Board Certification in Family Law in 2011,
            and colleagues and clients alike remember him not only for his
            sharp legal mind, but for the fairness, humor, and genuine care he
            brought to every case.
            <br />
            <br />
            Outside the office, Danny was the kind of person every community is
            lucky to know -- generous with his time, his home, and his table.
            His faith showed up in how he treated everyone around him, and he
            had a particular gift for finding the humor in hard moments and
            offering it as a gift.
            <br />
            <br />
            Above all else, Danny was a family man. He was the beloved husband
            of Sarah Ann Elliott Webb, his partner in life, love, and faith. He
            was an amazing father to Elliott and Anna, two teenagers who were
            the pride and joy of his life. He showed them how to live with
            kindness and courage, work hard, laugh loud, and love deeply -- and
            they will carry those lessons with them always.
            <br />
            <br />
            Danny was a dedicated attorney, a trusted colleague, and a
            compassionate advocate for his clients. He will be deeply missed by
            our firm and by the many people he helped throughout his career.
          </p>
          <span />
          <b>Education</b>
          <p>
            Abilene Christian University Cum Laude, BBA
            <br />
            <br />
            Texas Wesleyan University School of Law <br />
            (now Texas A&M University School of Law) <br />
            Juris Doctorate, Cum Laude (top 10%)
          </p>
          <span />
          <b>Experience</b>
          <p>
            Seltzer Dally & Webb, PLLC - Fort Worth, Texas
            <br />
            Attorney and Counselor at Law
            <br />
            <br />
            The Law Offices of Daniel P. Webb
            <br />
            Attorney and Counselor at Law
          </p>
          <span />
          <b>Memberships</b>
          <p>
            State Bar of Texas <br />
            Family Law Section, State Bar of Texas <br />
            American Academy of Matrimonial Lawyers - Fellow 2021 <br />
            The College of the State Bar of Texas <br />
            Licensed to practice before the Western, Northern, and Eastern
            Federal District Courts of Texas <br />
            Texas Academy of Family Law Specialists - Member <br />
            Texas Family Law Foundation - Lifetime Member <br />
            Texas Family Law Foundation - Board of Directors 2017 – Present
            <br />
            Texas Family Law Section - Pro Bono Committee 2020 - Present
            <br />
            Texas Academy of Family Law Specialists - Board Member 2021 –
            Present
            <br />
            Advanced Family Law Drafting CLE - Planning Committee – December
            2021
            <br />
            Family Law Essentials CLE – Granbury Course Director 2022
            <br />
            Texas Bar Foundation - Fellow
            <br />
            Hood County Bar Association - Member
            <br />
            Hood County Bar Association - Past President 2013
            <br />
            Tarrant County Family Law Bar Association - Member
          </p>
          <span />
          <b>Awards</b>
          <p>
            2022 Top Attorney - Family Law, Fort Worth Magazine <br />
            2021-2022 Texas Super Lawyer <br />
            2012-2020 Texas Rising Stars, Super Lawyers
          </p>
          <span />
          <b>Community Involvement</b>
          <p>
            Team in Training - Leukemia & Lymphoma Society
            <br />
            Altamesa Church of Christ
            <br />
            Illuminate Ministries - Z3:17
            <br />
            Meals on Wheels of Tarrant County - Endowment Board
            <br />
            Leadership Granbury - Board Member and Alumni
          </p>
          <span />
          <b>Publications and Seminars</b>
          <p>
            <i>
              Know When to Hold &apos;Em, Know When to Fold &apos;Em, Making &
              Responding to Objections
            </i>
            , Advanced Family Law 101 2022, Author & Speaker
            <br />
            <i>Unique Possession Schedules</i>, Advanced Family Law Drafting
            2021, Author & Speaker
            <br />
            <i>TAFLS Trial Institute 2021</i>, Faculty & Speaker
            <br />
            <i>Think (What Are You Trying to Do to Me): Overlooked SAPCR Issues</i>
            , Advanced Family Law Seminar 2020, Author & Speaker
            <br />
            <i>Initial Client Interview</i>, Family Law Essentials 2020, Speaker
            <br />
            <i>Custody Cases on a Shoestring</i>, Family Law Essentials 2019,
            Speaker
            <br />
            <i>Characterization of Property</i>, Family Law Essentials 2018,
            Speaker
            <br />
            <i>UCCJEA</i>, Family Law Essentials 2014, Speaker
            <br />
            <i>Alphabet Soup - UCCJEA and UIFSA</i>, Family Law Essentials
            2014, Speaker
            <br />
            <i>Rights, Powers and Duties: Creative Solutions</i>, Family Law
            Essentials 2013, Speaker
          </p>
        </Content>
        <div className="memoriam-photo">
          <Image
            src={memoriamImage}
            alt="Daniel P. Webb memoriam portrait"
            className="memoriam-photo__image"
            priority
          />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .center-wrapper {
    width: 100%;
    max-width: 1230px;
    margin: 0 auto;
    padding: 4rem 0 6rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .memoriam-photo {
    margin-left: auto;
    display: inline-flex;
    width: 100%;
    max-width: 460px;
  }

  .memoriam-photo__image {
    width: 100%;
    height: auto;
  }

  @media (max-width: 1300px) {
    .center-wrapper {
      padding: 2rem 2rem 4rem;
    }
    .item {
      order: 2;
    }
    .memoriam-photo {
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
