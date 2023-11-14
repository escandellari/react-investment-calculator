import InvestmentResult from "./components/InvestmentResult";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Header from "./components/Header";
import UserInput from "./components/UserInput";

const INVESTMENT_DATA = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(INVESTMENT_DATA);

  function handleChangeValue(inputIdentifier, value) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +value,
      };
    });
  }

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeValue={handleChangeValue} />
      {!inputIsValid && (
        <p className="center">Duration can't be smaller than 1 year</p>
      )}
      {inputIsValid && <InvestmentResult results={userInput} />}
    </>
  );
}

export default App;
