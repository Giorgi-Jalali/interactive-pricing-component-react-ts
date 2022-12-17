import styled from "styled-components";
import { useState, createContext, useReducer } from "react";

import Header from "./Header";
import RangeContainer from "./RangeContainer";
import BillingContainer from "./BillingContainer";
import Footer from "./Footer";

import background from "../images/bg-pattern.svg";

type Action = {
  type: string;
};

type Context = {
  state: number;
  dispatch: React.Dispatch<Action>;
  year: boolean;
  setYear: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MyContext = createContext<Context | null>(null);

const initialState = 3;

const reducer = (state: number, action: Action) => {
  switch (action.type) {
    case "1":
      return (state = 1);
    case "2":
      return (state = 2);
    case "3":
      return (state = 3);
    case "4":
      return (state = 4);
    case "5":
      return (state = 5);
    default:
      throw new Error();
  }
};

export default function Main() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [year, setYear] = useState(false);

  return (
    <MyContext.Provider value={{ state, dispatch, year, setYear }}>
      <MainContainer>
        <Header />

        <PricingForm>
          <RangeContainer />

          <BillingContainer />

          <Line />
          <Footer />
        </PricingForm>
      </MainContainer>
    </MyContext.Provider>
  );
}

const MainContainer = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: auto 400px;
  width: 375px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 550px) {
    width: 100vw;
    background-size: auto 80%;
  }
  @media (min-width: 1500px) {
    width: 80vw;
    background-size: auto 80%;
  }
`;

const PricingForm = styled.div`
  background-color: white;
  box-shadow: 0px 20px 30px -5px rgba(127, 137, 185, 0.152073);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  @media (min-width: 550px) {
    width: 540px;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #ecf0fb;
  margin-bottom: 24px;
`;
