import styled from "styled-components";
import { useContext } from "react";

import { MyContext } from "./Main";

interface PropsForStyle {
  year: boolean;
}

type Context = {
  year: boolean;
  setYear: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BillingContainer() {
  const { year, setYear } = useContext(MyContext) as Context;

  const changeBilling = () => {
    setYear(!year);
  };

  return (
    <Billing>
      <p>Monthly Billing</p>
      <RadioButton year={year} onClick={changeBilling}>
        <Circle />
      </RadioButton>
      <p>Yearly Billing</p>
      <Sale>
        -25% <Span>discount</Span>
      </Sale>
    </Billing>
  );
}

const Billing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 38px;
  @media (min-width: 550px) {
    margin-top: 30px;
  }
`;

const RadioButton = styled.div<PropsForStyle>`
  background-color: #cfd8ef;
  border-radius: 15px;
  width: 43px;
  height: 22px;
  margin: 0 12px;
  padding: ${(props) => (props.year ? "4px 4px 4px 25px" : "4px")};
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background-color: #7aeadf;
  }
`;

const Circle = styled.div`
  background-color: white;
  width: 14px;
  height: 14px;
  border-radius: 50%;
`;

const Sale = styled.div`
  background: #feede8;
  border-radius: 9.5px;
  font-weight: 800;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  color: #ff8d68;
  padding: 3px 7px;
  margin-left: 6px;
`;

const Span = styled.span`
  display: none;
  @media (min-width: 550px) {
    display: inline-block;
  }
`;
