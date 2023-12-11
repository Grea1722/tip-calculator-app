import React from "react";
import dollar from "./assets/icon-dollar.svg";
import persona from "./assets/icon-person.svg";

const tips = [
  { name: "five", value: 5 },
  { name: "ten", value: 10 },
  { name: "fiftenn", value: 15 },
  { name: "twenty-five", value: 25 },
  { name: "fifty", value: 50 },
];

export const TipForm = ({
  handleBillChange,
  handleTipChange,
  handlePeopleChange,
}) => {
  return (
    <div className="form">
      <form action="">
        <section className="label-group">
          <label htmlFor="numeroBill">Bill</label>
          <input
            className="billInput"
            type="number"
            name="numeroBill"
            id="numeroBill"
            onChange={handleBillChange}
          />
        </section>

        <section className="select-tip">
          {tips.map((tip, index) => (
            <div key={index}>
              <input
                type="radio"
                name="tip-percentage"
                id={tip.name}
                value={tip.value}
                required
                onClick={handleTipChange}
              />
              <label htmlFor={tip.name}>{tip.value}%</label>
            </div>
          ))}
          <div>
            <input
              type="tel"
              name="tip-percentage"
              id="custom"
              value={0}
              required
              onClick={handleTipChange}
            />
            <label htmlFor="custom">Custom</label>
          </div>
        </section>

        <section className="label-group">
          <label htmlFor="numeroPersonas">Number of people</label>
          <input
            className="peopleInput"
            type="number"
            name="numeroPersonas"
            id="numeroPersonas"
            onChange={handlePeopleChange}
          />
        </section>
      </form>
    </div>
  );
};
