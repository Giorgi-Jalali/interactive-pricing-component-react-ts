import { createGlobalStyle } from "styled-components";
import Main from "./components/Main";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Main></Main>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Manrope', sans-serif;
}

body {
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #848EAD;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
`;
