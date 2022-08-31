import React from "react";
import "../../../assets/styles/components/molecules/_invoice.scss";
import Status from "../../atoms/Status";
import PropTypes from "prop-types";
import { Client } from "../../../utils/utils";
import { InvoiceProps } from "./utils";

const Invoice = ({
  ID,
  date,
  client,
  description,
  price,
  state,
}: InvoiceProps) => {
  return (
    <div className="invoice card flex flex--space-between background--neutral-03">
      <div className="invoice__info flex flex--center flex--column flex--start-Y">
        <h3>#{ID}</h3>
        <p>Due {new Date(date).toDateString()}</p>
      </div>
      <div className="invoice__info invoice__customer  flex flex--center flex--column flex--start-Y">
        <h3>{client.name}</h3>
        <p className="display--hide-sm">{description}</p>
      </div>
      <div className="invoice__info">
        <p className="invoice__price">
          {(Math.round(price * 100) / 100).toFixed(2)} €
        </p>
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
};

export default Invoice;
