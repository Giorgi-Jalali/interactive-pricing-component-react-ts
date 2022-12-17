import styled from "styled-components";
import { useContext } from "react";

import { MyContext } from "./Main";

import slider from "../images/icon-slider.svg";

/////////////

type Action = {
  type: string;
};

interface Context {
  state: number;
  dispatch: React.Dispatch<Action>;
  year: boolean;
  setYear: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function RangeContainer() {
  const context = useContext(MyContext) as Context;

  const pageviewsArr = ["10K", "50K", "100K", "500K", "1M"];
  const monthPriceArr = [8, 12, 16, 24, 36];

  let monthPriceArrIndex = context.state - 1;

  let pageviewNum = pageviewsArr[monthPriceArrIndex];
  let monthPrice = monthPriceArr[monthPriceArrIndex];
  let YearPrice = monthPrice * 12 - monthPrice * 12 * 0.25;

  return (
    <RangeDiv>
      <Pageview>{pageviewNum} PAGEVIEWS</Pageview>
      <Input
        className="line"
        type="range"
        value={context.state}
        min={1}
        max={5}
        onChange={(e) => context.dispatch({ type: e.target.value })}
      />
      <PriceDiv>
        <Price>
          ${context.year ? YearPrice : monthPrice}
          .00
        </Price>
        <MonthYear>{context.year ? "/year" : "/month"}</MonthYear>
      </PriceDiv>
    </RangeDiv>
  );
}

const RangeDiv = styled.div`
  display: grid;
  grid-template-areas:
    "pageview"
    "range"
    "price";
  row-gap: 30px;
  padding: 34px 24px;
  @media (min-width: 550px) {
    grid-template-areas:
      "pageview price"
      "range range";
    padding: 40px 46px;
    width: 100%;
  }
`;

const Pageview = styled.div`
  font-weight: 800;
  letter-spacing: 1.71429px;
  text-align: center;
  grid-area: pageview;
  margin: auto;
`;

const Input = styled.input`
  grid-area: range;
  -webkit-appearance: none;
  appearance: none;
  background-color: #a4f3eb;
  width: 279px;
  height: 8px;
  border-radius: 5px;
  margin: auto;
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background-color: #10d8c4;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    outline: none;
    background-image: url(${slider});
    background-repeat: no-repeat;
    background-position: center;
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    background-color: #10d8c4;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: url(${slider});
    background-repeat: no-repeat;
    background-position: center;
    outline: none;
  }
  @media (min-width: 550px) {
    width: 400px;
  }
`;

const PriceDiv = styled.div`
  grid-area: price;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const Price = styled.div`
  font-weight: 800;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: -0.8px;
  color: #293356;
`;

const MonthYear = styled.div`
  font-size: 14px;
  line-height: 19px;
  margin-left: 8px;
`;
