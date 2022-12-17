import styled from "styled-components";
import check from "../images/icon-check.svg";

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <InfoDiv>
          <Check />
          <p>Unlimited websites</p>
        </InfoDiv>
        <InfoDiv>
          <Check />
          <p>100% data ownership</p>
        </InfoDiv>
        <InfoDiv>
          <Check />
          <p>Email reports</p>
        </InfoDiv>
      </div>

      <StartButton>Start my trial</StartButton>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 550px) {
    width: 90%;
    padding: 0 46px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const InfoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 11px;
  @media (min-width: 550px) {
    justify-content: flex-start;
  }
`;

const Check = styled.div`
  background-image: url(${check});
  background-repeat: no-repeat;
  background-size: cover;
  width: 8px;
  height: 6px;
  margin-right: 16px;
`;

const StartButton = styled.div`
  background: #293356;
  border-radius: 20.5px;
  font-weight: 800;
  text-align: center;
  color: #becdff;
  padding: 12px 46px;
  margin: 21px 0 32px 0;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    color: white;
  }
`;
