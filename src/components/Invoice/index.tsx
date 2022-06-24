import React from "react";
import "./_invoice.scss";
import Status from "../Status";
import PropTypes from "prop-types";

interface InvoiceProps {
    ID: string;
    date: string;
    client: Client;
    description: string;
    price: number;
    state: string;
    isDesktop: boolean;
}

interface Client {
    clientAddress: string;
    name: string;
    email: string;
}

const Invoice = ({
    ID,
    date,
    client,
    description,
    price,
    state,
    isDesktop,
}: InvoiceProps) => {
    return (
        <div className="invoice flex flex--space-between background--neutral-03">
            <div className="invoice__info flex flex--center flex--column flex--start-Y">
                <h3>#{ID}</h3>
                <p>Due {new Date(date).toDateString()}</p>
            </div>
            <div className="invoice__info invoice__customer  flex flex--center flex--column flex--start-Y">
                <h3>{client.name}</h3>
                {isDesktop ? <p>{description}</p> : ""}
            </div>
            <div className="invoice__info">
                <p className="invoice__price">{price}.00€</p>
            </div>
            <div className="invoice__info">
                <Status type={state} />
            </div>
        </div>
    );
};

Invoice.propTypes = {
    ID: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    client: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    isDesktop: PropTypes.bool.isRequired,
};

export default Invoice;
