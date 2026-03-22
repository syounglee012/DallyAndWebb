import React, { useState } from "react";
import styled from "styled-components";
import DropDownComponent from "../dropdown-menu/dropDownMenu";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
  const preferences = [
    "Divorce",
    "Child Support/Custody",
    "Modification",
    "Other",
  ];

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [website, setWebsite] = useState("");

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    // return toast.error(
    //   `We apologize for the inconvenience. Our contact form is temporarily unavailable.\n\nPlease call us at 817-409-1136 or email LORI@TEXFAMILYLAWYER.COM for immediate assistance. \n\n Thank you for your patience.`,
    //   {
    //     position: "top-center",
    //     style: {
    //       width: "400px",
    //       fontFamily: "Montserrat",
    //       whiteSpace: "pre-line",
    //     },
    //   }
    // );
    if (!executeRecaptcha) {
      toast.error("Security verification is loading. Please try again.", {
        position: "top-center",
        style: {
          width: "fit-content",
          fontFamily: "Montserrat",
        },
      });
      return;
    }

    try {
      const token = await executeRecaptcha("handleSubmit");
      handleSubmit(token);
    } catch (error) {
      toast.error("Could not verify reCAPTCHA. Please try again.", {
        position: "top-center",
        style: {
          width: "fit-content",
          fontFamily: "Montserrat",
        },
      });
    }
  };

  const handleSubmit = async (token) => {
    const isName = (nameValue) => {
      const normalized = nameValue.trim();
      return normalized.length >= 2 && normalized.length <= 100;
    };
    const isEmail = (email) => {
      let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return pattern.test(email);
    };
    const isPhone = (phoneValue) => {
      const digits = phoneValue.replace(/\D/g, "");
      return digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
    };
    const data = {
      name,
      email,
      phone,
      area,
    };
    if (!name || !email || !phone || !area) {
      return toast.error("Please fill out all fields", {
        position: "top-center",
        style: {
          width: "fit-content",
          fontFamily: "Montserrat",
        },
      });
    } else if (!isName(name))
      return toast.error("Please enter a valid name", {
        position: "top-center",
        style: {
          width: "max-content",
          fontFamily: "Montserrat",
        },
      });
    else if (!isEmail(email))
      return toast.error("Please enter a valid email address", {
        position: "top-center",
        style: {
          width: "max-content",
          fontFamily: "Montserrat",
        },
      });
    else if (!isPhone(phone))
      return toast.error("Please enter a valid 10-digit phone number", {
        position: "top-center",
        style: {
          width: "max-content",
          fontFamily: "Montserrat",
        },
      });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          token,
        },
        body: JSON.stringify({
          ...data,
          website,
        }),
      });
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || json.message || "Failed to send message");
      }

      toast.success("Message Sent", {
        position: "top-center",
      });
      setName("");
      setEmail("");
      setPhone("");
      setArea("");
      setWebsite("");
      setIsSubmitted(true);
    } catch (error) {
      toast.error(error.message || "Unable to send message right now", {
        position: "top-center",
        style: {
          width: "fit-content",
          fontFamily: "Montserrat",
        },
      });
    }
  };

  const handleSelect = (e) => {
    setIsSubmitted(false);
    setArea(e);
  };

  return (
    <ContactForm onSubmit={handleSubmitForm}>
      <InputField
        placeholder="Name*"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <InputField
        placeholder="Email Address*"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      ></InputField>
      <InputField
        type="text"
        placeholder="Phone Number*"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      ></InputField>
      <input
        name="website"
        type="text"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="honeypot"
        aria-hidden="true"
      />
      <DropDownComponent
        handleSelect={handleSelect}
        title={"Area of Interest*"}
        menu={preferences}
        isSubmitted={isSubmitted}
        type="text"
        required
      />
      <button className="six" type="submit" disabled={!executeRecaptcha}>
        SUBMIT INFO
      </button>{" "}
      <ToastContainer />
    </ContactForm>
  );
}

const ContactForm = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  .six {
    color: #ffffff;
    border: 1px solid #ffffff;
    transition: 0.3s ease-in-out;
    font-size: 16px;
    background-color: transparent;
    font-weight: 500;
    padding: 10px 40px;
    letter-spacing: 0.25em;
    margin-top: 1rem;
    cursor: pointer;
    :hover {
      border: 1px solid #c293ff;
      color: #c293ff;
    }
    :disabled {
      opacity: 0.6;
      cursor: not-allowed;
      border: 1px solid #ffffff;
      color: #ffffff;
    }
  }

  @media (max-width: 1300px) {
    max-width: 100%;
    gap: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .six {
      grid-column: 1;
      grid-row: 3;
      max-width: 200px;
    }
    .six {
      font-size: 12px;
      padding: 0;
    }
  }
  @media (max-width: 768px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    .six {
      padding: 5px 20px;
    }
  }

  .honeypot {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
  }
`;

const InputField = styled.input`
  width: 100%;
  max-width: 492px;
  padding: 0.67rem 1rem;
  border: none;
  background-color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 0;
  :focus {
    outline: none;
  }
`;
