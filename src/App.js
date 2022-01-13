import styled from "styled-components";

import "./App.css";

const Wrapper = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
  grid-gap: 24px;
  align-items: flex-end;
`;

const CardContainer = styled.div`
  width: 327px;
  height: 203px;
  left: 40px;
  top: 40px;

  background: linear-gradient(259.37deg, #162288 2.76%, #3a49b6 68.13%);
  border-radius: 10px;
`;

const SwitchContainer = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #3A49B6;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #3A49B6;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

function App() {
  return (
    <div className="App">
      <Wrapper>
        <CardContainer />

        <SwitchContainer>
          <label class="switch">
            <input type="checkbox" checked />
            <span class="slider round"></span>
          </label>
        </SwitchContainer>
      </Wrapper>
    </div>
  );
}

export default App;
