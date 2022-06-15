import React from "react";
import "./_invoice.scss";
import Status from "../Status/status";

const Invoice = () => {
    return (
        <div className="invoice background--neutral-03">
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
                <Status type={0} />
            </div>
        </div>
    );
};

export default Invoice;
