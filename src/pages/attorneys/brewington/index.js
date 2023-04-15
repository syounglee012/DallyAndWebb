import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import AttorneyBanner from "@/components/UI/banner/attorney-banner/attorneyBanner";
import banner from "../../../../public/images/brewington_banner.png";
export default function Brewington() {
  return (
    <Container>
      <AttorneyBanner
        src={banner}
        alt="Brewington banner image"
        name={"MAX BREWINGTON"}
        email={"MAX@TEXFAMILYLAWYER.COM"}
        top={"-9px"}
      />
      <h1>Brewingtion</h1>
    </Container>
  );
}

const Container = styled.div``;
