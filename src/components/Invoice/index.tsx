import React from "react";
import "./_invoice.scss";
import Status from "../Status";
import PropTypes from "prop-types";

const Invoice = ({ isDesktop }: { isDesktop: boolean }) => {
    return (
        <div className="invoice flex flex--space-between background--neutral-03">
            <div className="invoice__info flex flex--center flex--column flex--start-Y">
                <h3>#Inv1</h3>
                <p>Due tomorrow</p>
            </div>
            <div className="invoice__info invoice__customer  flex flex--center flex--column flex--start-Y">
                <h3>Alex Grim</h3>
                {isDesktop ? <p>Graphic Design</p> : ""}
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

Invoice.propTypes = {
    isDesktop: PropTypes.bool.isRequired,
};

export default Invoice;
