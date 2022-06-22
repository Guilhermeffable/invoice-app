import React from "react";
import "./_invoice.scss";
import Status from "../Status";

const Invoice = () => {
    return (
        <div className="invoice flex flex--space-between background--neutral-03">
            <div className="invoice__info flex flex--center flex--column flex--start-Y">
                <p>#Inv1</p>
                <p>Due tomorrow</p>
            </div>
            <div className="invoice__info">
                <p>Alex Grim</p>
                <p>Graphic Design</p>
            </div>
            <div className="invoice__info">
                <p className="invoice__price">556.00€</p>
            </div>
            <div className="invoice__info">
                <Status type={0} />
            </div>
        </div>
    );
};

export default Invoice;
