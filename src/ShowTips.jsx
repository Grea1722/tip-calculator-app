import React from "react";

export const ShowTips = ({ tipPerson, tipTotal }) => {
  return (
    <div className="tips-container">
      <section className="tips">
        <section className="text">
          <h2>Tip Amount</h2>
          <p>/ person</p>
        </section>

        {tipPerson > 0 ? <h3>${tipPerson}</h3> : <h3>$0.00</h3>}
      </section>
      <section className="tips">
        <section className="text">
          <h2>Total</h2>
          <p>/ person</p>
        </section>
        {tipTotal > 0 ? <h3>${tipTotal}</h3> : <h3>$0.00</h3>}
      </section>

      <button>Reset</button>
    </div>
  );
};
