import { useEffect, useState } from "react";
import { TipForm } from "./TipForm";
import { ShowTips } from "./ShowTips";
import logo from "./assets/logo.svg";

function App() {
  const [billNumber, setBillNumber] = useState(0);
  const [selectedBill, setSelectedBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (billNumber > 0 && selectedBill > 0 && people > 0) {
      setTipAmount(((billNumber * (selectedBill / 100)) / people).toFixed(2));

      console.log(billNumber, tipAmount);
      setTotalAmount((billNumber * people + tipAmount / people).toFixed(2));
    }
  }, [billNumber, selectedBill, people, tipAmount, totalAmount]);

  const handleBillChange = (event) => {
    setBillNumber(event.target.value);
  };
  const handlePeopleChange = (event) => {
    setPeople(event.target.value);
  };

  const handleTipChange = (event) => {
    setSelectedBill(event.target.value);
  };
  return (
    <>
      <div className="logo">
        <img src={logo} alt="splitter logo" />
      </div>
      <div className="principal">
        <TipForm
          handleBillChange={handleBillChange}
          handleTipChange={handleTipChange}
          handlePeopleChange={handlePeopleChange}
        />
        <ShowTips tipPerson={tipAmount} tipTotal={totalAmount} />
      </div>
    </>
  );
}

export default App;
