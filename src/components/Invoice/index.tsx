import React from "react";
import "./_invoice.scss";
import Status from "../Status";

const Invoice = () => {
    return (
        <div className="invoice flex flex--space-between background--neutral-03">
            <div className="invoice__info flex flex--center flex--column flex--start-Y">
                <div>#Inv1</div>
                <div>Due tomorrow</div>
            </div>
            <div className="invoice__info">
                <div>Alex Grim</div>
                <div>Graphic Design</div>
            </div>
            <div className="invoice__info">
                <div className="invoice__price">556.00€</div>
            </div>
            <div className="invoice__info">
                <Status type={0} />
            </div>
        </div>
    );
};

export default Invoice;
