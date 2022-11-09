import React from "react";
import "../../../assets/styles/components/molecules/_invoice.scss";
import Status from "../../atoms/Status";
import PropTypes from "prop-types";

import { InvoiceProps } from "./utils";
import Grid from "../Grid";
import GridCol from "../../atoms/GridCol";

const Invoice = ({
  ID,
  date,
  client,
  description,
  price,
  state,
}: InvoiceProps) => {
  return (
    <Grid extraClasses="invoice card padding-y-xl padding-x-l flex flex--space-between background--neutral-03">
      <GridCol
        desktop={4}
        extraClasses="flex flex--center flex--column flex--start-Y margin-right-s"
      >
        <h3 className="margin-bottom-s">#{ID}</h3>
        <p>Due {new Date(date).toDateString()}</p>
      </GridCol>
      <GridCol
        desktop={4}
        extraClasses="flex flex--center flex--column flex--start-Y margin-right-s"
      >
        <h3 className="margin-bottom-xs">{client.name}</h3>
        <p className="display--hide-sm">{description}</p>
      </GridCol>
      <GridCol extraClasses="flex flex--start-X margin-right-s" desktop={4}>
        <p className="invoice__price">
          {(Math.round(price * 100) / 100).toFixed(2)} €
        </p>
      </GridCol>
      <GridCol desktop={1}>
        <Status type={state} />
      </GridCol>
    </Grid>
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
