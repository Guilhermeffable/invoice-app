import React from "react";
import "./_toaster.scss";

const Toaster = () => {
  return (
    <div className="toaster flex flex--column toaster--success">
      <div>
        <h2>Well done!</h2>
        <p>The invoice was created</p>
      </div>
    </div>
  );
};

export default Toaster;
