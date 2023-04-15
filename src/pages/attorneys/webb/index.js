import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import AttorneyBanner from "@/components/UI/banner/attorney-banner/attorneyBanner";
import banner from "../../../../public/images/Webb_banner.png";
import profile from "../../../../public/images/Webb_profile.png";

export default function Webb() {
  return (
    <Container>
      <AttorneyBanner
        src={banner}
        alt="Webb banner image"
        name={"DANIEL P. WEBB"}
        email={"DANIEL@TEXFAMILYLAWYER.COM"}
        top={"-18px"}
      />
      <h1>Webb</h1>
      <Image
        src={profile}
        alt="Dally profile picture"
        className="item"
        style={{
          height: "auto",
          maxHeight: "472px",
          width: "100%",
          maxWidth: "418px",
        }}
      />
    </Container>
  );
}

const Container = styled.div``;
