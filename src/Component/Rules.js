import React, { useState } from "react";

const Rules = () => {
  const [word, setWord] = useState("Anushka");
  const handelChange = () => {
    if (word === "Anushka") {
      setWord("Jaya");
    } else {
      setWord("Anushka");
    }
  };
  return (
    <div>
      <p>Change the Name:{word}</p>
      <button onClick={handelChange}>Click Me</button>
    </div>
  );
};

export default Rules;
