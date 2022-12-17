import styled from "styled-components";

import circles from "../images/pattern-circles.svg";

export default function Header() {
  return (
    <HeaderContainer>
      <H1>Simple, traffic-based pricing</H1>
      <ParagraphDiv>
        <P>Sign-up for our 30-day trial. </P>
        <P>No credit card required. </P>
      </ParagraphDiv>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  background-image: url(${circles});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const H1 = styled.h1`
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;
  color: #293356;
`;

const ParagraphDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const P = styled.p`
  font-size: 13px;
  line-height: 23px;
`;
