import React from "react";
import divider from "../assets/pattern-divider-desktop.svg";
import dividerM from "../assets/pattern-divider-mobile.svg";
import dice from "../assets/icon-dice.svg";
function Advice({ advice, click }) {
  return (
    <div className="container-advice">
      <div className="content">
        <p className="advice-number">ADVICE #{advice.id}</p>

        <p className="advice">
          "{advice.advice}"
        </p>

          <picture>
            <source media={"(min-width: 768px)"} srcSet={divider} />
            <img src={dividerM} alt="divider" />
          </picture>

        <button onClick={click}>
          <img src={dice} alt="dice" />
        </button>
      </div>
    </div>
  );
}

export default Advice;
