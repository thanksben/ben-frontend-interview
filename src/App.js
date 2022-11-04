import styled from "styled-components";
import Card from "./components/card/Card";

function App() {

  /**
   * This is the data that will be passed to the Card component.
   * In real life, this data will be fetched from the backend.
   */
  const cardDetails = {
    name: "BRUCE WAYNE",
    first12Numbers: "1234 1234 1234",
    last4Numbers: "1234",
    cvv: "123",
    expiryDate: "09/12",
  };

  return (
    <CardContainer>
      <Card cardDetails={cardDetails} />
      <SwitchContainer>
        <label class="switch">
          <input type="checkbox" checked aria-label="toggle" />
        </label>
      </SwitchContainer>
    </CardContainer>
  );
}

export default App;

const CardContainer = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
  grid-gap: 24px;
  align-items: flex-end;
  text-align: center;
`;

const SwitchContainer = styled.div``;
