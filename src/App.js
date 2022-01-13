import styled from "styled-components";

import Card from "./Card";
import "./App.css";

const Wrapper = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
  grid-gap: 24px;
  align-items: flex-end;
`;

const SwitchContainer = styled.div``;

function App() {
  const cardDetails = {
    name: "BRUCE WAYNE",
    first12Nums: "1234 1234 1234",
    last4Nums: "1234",
    cvv: "123",
    expiryDate: "09/12",
  };
  return (
    <div className="App">
      <Wrapper>
        <Card cardDetails={cardDetails} />

        <SwitchContainer>
          <label class="switch">
            <input type="checkbox" checked />
          </label>
        </SwitchContainer>
      </Wrapper>
    </div>
  );
}

export default App;
