import styled from "styled-components";

/**
 *  This is the styled component for the Card component.
 *  jsx is on the top of the file followed by the styled component.
 */

function Card({ cardDetails }) {
  const { name, first12Numbers, last4Numbers, cvv, expiryDate } = cardDetails;
  return (
    <Wrapper>
      <Name>{name}</Name>
      <CardNumber>{`${first12Numbers} ${last4Numbers}`}</CardNumber>

      <ExpiryAndCvvContainer>
        <ExpiryContainer>
          <ExpiryAndCvvText>VALID THRU</ExpiryAndCvvText>
          <ExpiryAndCvvValue>{expiryDate}</ExpiryAndCvvValue>
        </ExpiryContainer>

        <ExpiryContainer>
          <ExpiryAndCvvText>CVV</ExpiryAndCvvText>
          <ExpiryAndCvvValue>{cvv}</ExpiryAndCvvValue>
        </ExpiryContainer>
      </ExpiryAndCvvContainer>
    </Wrapper>
  );
}

export default Card;

const Wrapper = styled.div`
  width: 327px;
  height: 203px;
  left: 40px;
  top: 40px;
  padding: 28px 24px;

  background: linear-gradient(259.37deg, #162288 2.76%, #3a49b6 68.13%);
  border-radius: 10px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Name = styled.h1`
  font-size: 16px;
  line-height: 12px;
  color: #ffffff;
  text-shadow: 0.954545px 0.954545px 0px rgba(0, 0, 0, 0.25);
  font-style: normal;
  font-weight: normal;
`;

const CardNumber = styled.h1`
  font-size: 20px;
  line-height: 18px;
  color: #ffffff;
  text-shadow: 0.954545px 0.954545px 0px rgba(0, 0, 0, 0.25);

  font-style: normal;
  font-weight: normal;
`;

const ExpiryAndCvvContainer = styled.div`
  display: flex;
`;
const ExpiryContainer = styled.div`
  width: 100px;
`;

const ExpiryAndCvvText = styled.h1`
  font-size: 10px;
  line-height: 10px;
  color: #ffffff;
  text-shadow: 0.954545px 0.954545px 0px rgba(0, 0, 0, 0.25);

  font-style: normal;
  font-weight: normal;
  margin-bottom: 0px;
`;

const ExpiryAndCvvValue = styled.h1`
  font-size: 14px;
  line-height: 12px;
  color: #ffffff;
  text-shadow: 0.954545px 0.954545px 0px rgba(0, 0, 0, 0.25);

  font-style: normal;
  font-weight: bold;
  margin-top: 2px;
`;
