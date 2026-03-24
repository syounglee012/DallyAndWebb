import styled from "styled-components";
import PhoneIcon from "../../../public/images/phone_icon.png";
import EmailIcon from "../../../public/images/email_icon.png";
import Image from "next/image";
import Form from "./form";

export default function ContactInfos() {
  return (
    <Constainer>
      <div className="container">
        <p className="title">CONTACT US</p>
        <span className="line" />
        <div className="wrapper">
          <Form />
          <ContactInfo>
            <div className="office-contact-lines">
              <div className="office-row">
                <Image
                  src={PhoneIcon}
                  alt="Phone icon"
                  width={15}
                  height={15}
                  className="office-icon"
                />
                <p className="office-infos">
                  FORT WORTH -{" "}
                  <a className="office-link" href="tel:8174091136">
                    817-409-1136
                  </a>
                </p>
              </div>

              <div className="office-row">
                <Image
                  src={EmailIcon}
                  alt="Email icon"
                  width={23}
                  height={23}
                  className="office-icon"
                />
                <a
                  className="office-infos office-link"
                  href="mailto:lori@texfamilylawyer.com"
                >
                  LORI@TEXFAMILYLAWYER.COM
                </a>
              </div>
            </div>

            <p>
              ** We welcome your email, but please understand that if you are
              not already a client of Dally & Webb Family Law, PLLC, we cannot
              consult with or represent you until we confirm that doing so would
              not create a conflict of interest and is otherwise consistent with
              the policies of our firm. Accordingly, please do not include any
              confidential information until we verify that the firm is in a
              position to consult with or represent you. Prior to that time,
              there is no assurance that information you send us will be
              maintained as confidential. Submitting information does not create
              an attorney-client relationship and no representation occurs
              unless and until a contract for legal services is executed. Thank
              you for your consideration.
            </p>
          </ContactInfo>
        </div>
      </div>
    </Constainer>
  );
}

const Constainer = styled.div`
  position: relative;
  background-color: #533575;

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
  }

  .title {
    width: fit-content;
    color: #ffffff;
    font-size: 30px;
    letter-spacing: 2px;
    width: fit-content;
    border-bottom: 2px solid #ffffff;
    padding-bottom: 1rem;
  }
  .line {
    display: block;
    border-bottom: 1px solid #ffffff;
    margin-bottom: 2rem;
  }

  & p {
    color: #ffffff;
    font-size: 12px;
    line-height: 1.5;
  }
  @media (max-width: 1300px) {
    .wrapper {
      flex-direction: column;
    }
  }
  @media (max-width: 768px) {
    .title {
      font-size: 24px;
    }
    .wrapper {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const ContactInfo = styled.div`
  width: 100%;
  max-width: 550px;
  padding: 0;
  .office-contact-lines {
    width: 100%;
  }
  .office-row {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 0.5rem;
  }
  .office-icon {
    width: auto;
    height: auto;
    flex-shrink: 0;
  }
  .office-infos {
    display: inline-block;
    color: #ffffff;
    font-size: 20px;
    letter-spacing: 4px;
    margin: 0;
    vertical-align: middle;
  }
  .office-link {
    color: #ffffff;
    text-decoration: none;
    transition: 0.3s ease-in-out;
    :hover {
      color: #c293ff;
    }
  }
  & p {
    margin-top: 2rem;
  }
  @media (max-width: 1300px) {
    margin-top: 1rem;
    max-width: 100%;
    .office-row {
      gap: 1rem;
      margin-bottom: 0.75rem;
    }
    .office-infos {
      margin: 0;
      font-size: 12px;
    }
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;
