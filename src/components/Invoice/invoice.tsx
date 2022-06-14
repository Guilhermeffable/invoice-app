import React from "react";
import "./_invoice.scss";

const Invoice = () => {
    return (
        <div className="invoice">
            <div className="invoice__info">
                <div>#Inv1</div>
                <div>Due tomorrow</div>
            </div>
            <div className="invoice__info">
                <div>Alex Grim</div>
                <div>Graphic Design</div>
            </div>
            <div className="invoice__info">
                <div>556.00€</div>
            </div>
            <div className="invoice__info">
                <div>Paid</div>
            </div>
        </div>
    );
};

export default Invoice;
