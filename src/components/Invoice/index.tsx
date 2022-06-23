import React from "react";
import "./_invoice.scss";
import Status from "../Status";

const Invoice = () => {
    return (
        <div className="invoice flex flex--space-between background--neutral-03">
            <div className="invoice__info flex flex--center flex--column flex--start-Y">
                <h3>#Inv1</h3>
                <p>Due tomorrow</p>
            </div>
            <div className="invoice__info flex flex--center flex--column flex--start-Y">
                <h3>Alex Grim</h3>
                <p>Graphic Design</p>
            </div>
            <div className="invoice__info">
                <p className="invoice__price">556.00€</p>
            </div>
            <div className="invoice__info">
                <Status type={2} />
            </div>
        </div>
    );
};

export default Invoice;
