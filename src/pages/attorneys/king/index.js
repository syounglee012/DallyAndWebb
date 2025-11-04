import Image from "next/image";
import styled from "styled-components";
import SecondaryNav from "@/components/UI/attorney-secondary-nav/secondaryNav";
import AttorneyBanner from "@/components/UI/attorney-banner/attorneyBanner";
import AttorneyDropDown from "@/components/mobile-dropdown-menu/attorneyDropDown";
import banner from "../../../../public/images/King_banner.png";
import profile from "../../../../public/images/King_profile.png";

export default function King() {
  return (
    <Container>
      <AttorneyBanner
        src={banner}
        alt="J. Steven King banner image"
        name={"J. STEVEN KING, Of Counsel"}
        email={"STEVEN@TEXFAMILYLAWYER.COM"}
        maxWidth={"472px"}
        top={"11px"}
        right={"5vw"}
      />
      <div className="center-wrapper">
        <Content className="item">
          <b>Education</b>
          <p>
            B.B.A., University of Texas at Arlington, 1971
            <br />
            <br />
            J.D., South Texas College of Law, 1974
            <br />
            <br />
            (Member Order of the Lytae; South Texas Bar Journal, 1973-74)
            <br />
            <br />
            Board Certified – Family Law, Texas Board of Legal Specialization
            since 1988
          </p>
          <span />
          <b>Professional Activites</b>
          <p>
            Charter Member, Texas Family Law Foundation
            <br />
            <br />
            Fellow of the American Academy of Matrimonial Lawyers
            <br />
            <br />
            President, Texas Chapter, American Academy of Matrimonial Lawyers,
            2006, through 2007
            <br />
            <br />
            Officer, Texas Chapter, American Academy of Matrimonial Lawyers,
            2002-2006
            <br />
            <br />
            Member, International Academy of Matrimonial Lawyers
            <br />
            <br />
            Board of Directors/Member, Texas Academy of Family Law Specialists
            2009 through 2010 Council
            <br />
            <br />
            Member, Family Law Section of the State Bar of Texas, 1996 to 2002
            <br />
            <br />
            Past Director, Tarrant County Bar Association
            <br />
            <br />
            Past Director and President, Tarrant County Family Law Bar
            Association
            <br />
            <br />
            Member, College of the State Bar of Texas
            <br />
            <br />
            Member, Who’s Who Among Outstanding Americans
            <br />
            <br />
            Master, Eldon B. Mahon Inn of Court, 2003, through 2008
          </p>
          <span />

          <b>Awards</b>
          <p>
            Recipient, <em>Eva Barnes Award</em> Significant Contributions to
            Family Law 2001
            <br />
            Selected in<em>The Best Lawyers In America</em> 1999 through the
            present
            <br />
            Selected as a<em>Super Lawyer</em>Texas Monthly Magazine 2003
            through the present <br />
          </p>
          <span />
          <b>Law Related Seminar Publications & Participation</b>
          <p>
            Author/Speaker, What To Do after A Temporary Hearing, Annual Family
            Law Seminar on Practical Approaches to Divorce Law 1992
            <br />
            <br />
            Author/Speaker, Discovery Trends: Objections, Sanctions, and
            Supplementation, Advanced Family Law Course for Legal Assistants
            1995
            <br />
            <br />
            Author/Speaker, Preparation For The Cross-Examination of A Mental
            Health Expert In A Sex Abuse Allegation Custody Case, Annual
            Advanced Family Law Course 1996
            <br />
            <br />
            Author/Speaker, An Attorney Ad Litem Is Really A Lawyer, Attorney Ad
            Litem Training Seminar 1997
            <br />
            <br />
            Author/Speaker, Trial Preparation & Planning, “Nuts & Bolts”
            Protective Order Seminar 1997
            <br />
            <br />
            Author/Speaker, Challenging Characterization Issues:Characterizing
            Trusts, Employee Stock Options, Workman’s Compensation Claims, And
            Intellectual Property, Advanced Family Law Course 1997
            <br />
            <br />
            Author/Speaker, Some Changes To The Texas Family Code, Blackstone
            Seminar 1998
            <br />
            <br />
            Participant, Trial of JMC vs. Sole MC & Disputed Allocation of
            Rights and Duties, Advanced Family Law Course 1998
            <br />
            <br />
            Moderator, The New Rules of Discovery, State Bar of Texas, Dallas
            1999
            <br />
            <br />
            Author/Speaker, The Potential Effect of The New Texas Family Law
            Legislation Regarding Proportional Ownership, Equitable Interests,
            Division Under Special Circumstances, & A Look At New Legislative
            Provisions For Transmutation Agreements, Advanced Family Law Course
            1999
            <br />
            <br />
            Author/Speaker, Discovery In Property Cases Under The New Rules,
            Advanced Family Law Course, Houston, Texas 1999
            <br />
            <br />
            Author/Speaker, When a Jury Is Needed; Voir Dire, Nuts and Bolts,
            Family Law Seminar, Fort Worth, Texas, 2000
            <br />
            <br />
            Speaker, Business Valuations, 26th Annual Advanced Family Law
            Course, San Antonio, Texas 2000
            <br />
            <br />
            Author/Speaker, Discovery Gotta Haves: Essential Discovery Ideas for
            Property and SAPCR’s, Marriage Dissolution Institute 2001, Corpus
            Christi, Texas
            <br />
            <br />
            Author/Trainer, Discovery, Advanced Family Law Trial Skills, West
            Texas Legal Services PAI Program, 2001, Fort Worth, Texas.
            <br />
            <br />
            Panel Speaker, Closing the File, Including Closing Documents, 27th
            Annual Advanced Family Law Court, San Antonio, Texas 2001
            <br />
            <br />
            Speaker, Winning Trial Techniques in Property Cases, Texas Academy
            of Family Law Specialists Annual Seminar, Cancun 2002
            <br />
            <br />
            Speaker, ”The Child’s Voice”, A Symposium On The Child’s Involvement
            In Parenting Plan Orders. September 27, 2002
            <br />
            <br />
            Author/Speaker, Drafting Trial Documents With An Eye Toward Winning,
            Advanced Family Law Drafting Course 2002, New Orleans, Louisiana
            2002
            <br />
            <br />
            Author/Speaker, Discovery: Tools, Techniques & Time bombs, Texas
            Academy of Family Law Specialists Annual Trial Institute, Cancun
            2003
            <br />
            <br />
            Player, Associate Judge Do’s & Don’ts, Tarrant County Family Law Bar
            Association, Fort Worth 2003
            <br />
            <br />
            Speaker, Evaluating A Custody Case, 26th Annual Marriage Dissolution
            Institute, Houston 2003
            <br />
            <br />
            Speaker, Evidence, 29th Annual Advanced Family Law Seminar, San
            Antonio 2003
            <br />
            <br />
            Speaker/Panelist, Texas Academy of Family Law Specialists Trial
            Institute, New Orleans 2004
            <br />
            <br />
            Speaker, Advanced CYA For The Family Law Attorney, Family Law
            Ultimate Trial Notebook, Dallas 2004
            <br />
            <br />
            Speaker, Advanced CYA For The Family Law Attorney, State Bar Summer
            School, Galveston 2005
            <br />
            <br />
            Speaker, Law Practice Management Seminar, Perfecting Your Family Law
            Practice, 30th Annual Advanced Family Law Seminar, Dallas 2005
            <br />
            <br />
            Litigator in Mock Trial Demonstration, Texas Academy of Family Law
            Specialists Trial Institute, Reno, Nevada, 2006
            <br />
            <br />
            Panelist/Author, 29th Annual Marriage Dissolution Institute Boot
            camp – Practical Aspects of Enhancing Your Practice, How To Lose A
            Paralegal In 10 Days, or Keep One for 10 Years, Austin, 2006
            <br />
            <br />
            Speaker, Family Law Essentials Seminar, “If You Can’t Get Before the
            Fact Finder, You Can’t Win” – Mineral Wells, Texas, April 2007
            <br />
            <br />
            Speaker, “Closing Argument”, The Trial of a Family Law Jury Case,
            Texas Bar CLE, Dallas January 2008
            <br />
            <br />
            Speaker, 31st Annual Marriage Dissolution Institute, “CYA in Family
            Law”, Galveston, Texas 2008
            <br />
            <br />
            Speaker, “Mechanics of Effective Cross Examination”, 35th Advanced
            Family Law Seminar, Dallas, Texas 2009
            <br />
            <br />
            Panel Speaker, 33rd Annual Marriage Dissolution Institute, Top Ten
            Ways to Show the Client You Care and Avoid a Grievance, San Antonio,
            Texas 2010
            <br />
            <br />
            Speaker, 2011 Family Law 101, “It Ain’t Over Till It’s Over, Closing
            the File”, Houston, Texas, 2011
            <br />
            <br />
            Speaker, 38th Annual Advanced Family Law Seminar, “Negotiating a
            Loser”, Houston, Texas 2012
            <br />
            <br />
            Speaker, 39th Annual Advanced Family Law Seminar, “Utilizing a
            Private Investigator without Getting Yourself in Trouble”, San
            Antonio, Texas 2013
            <br />
            <br />
            Speaker, 40th Annual Advanced Family Law Seminar, “Nuances of
            Selecting a Mediator”, San Antonio, Texas 2014
            <br />
            <br />
            Speaker, 41st Annual Advanced Family Law Seminar, “Criminal and
            Civil Collision”, San Antonio, Texas 2015
            <br />
            <br />
            Speaker, TCFLBA 2015 Advanced on a Shoestring Seminar, “Direct and
            Cross of Financial Experts”, Fort Worth, Texas 2015
            <br />
            <br />
            Speaker, 42nd Annual Advanced Family Law Seminar, “Effective
            Listening”, San Antonio, Texas 2016
          </p>
          <span />
          <b>Course Director</b>
          <p>
            Marriage Dissolution Institute 2007, El Paso, Texas
            <br />
            Texas Academy of Family Law Specialist Trial Institute 2012, Las
            Vegas, Nevada
          </p>
          <span />
          <b>Law Related Periodical/Magazine Publications</b>
          <p>
            Author, “Beating Out the Big Firms”, Texas Lawyer, Vol. 18, No. 21,
            July 29, 2002.
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
