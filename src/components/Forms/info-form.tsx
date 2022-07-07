import React, { Fragment } from "react";
import { Calendar, Chevron } from "../../assets/svg";
import { FORM_TYPE } from "../../utils/utils";
import Button from "../Button";
import Input from "../Input";
import "./_info.scss";

const InfoForm = ({
  type,
  onFormChange,
}: {
  type: FORM_TYPE;
  onFormChange: Function;
}) => {
  let className1 = "";

  switch (type) {
    case FORM_TYPE.INVOICE_DETAILS:
      className1 = "";
      break;

    case FORM_TYPE.CLIENT_DETAILS:
      className1 = "display--none";
      break;
  }

  return (
    <div className="card info flex flex--column flex__gap--1">
      <h2 className="font__weight--300">Generic Information</h2>
      <form>
        <fieldset className="flex flex--column flex__gap--2">
          <div className="info__container flex flex--column flex__gap--1">
            <label className="font__weight--400" htmlFor="invoiceDescription">
              Invoice description
            </label>
            <Input id="invoiceDescription" placeholder="" />
          </div>
          <div className="info__container flex  flex--column flex__gap--1">
            <label className="font__weight--400" htmlFor="invoiceState">
              Invoice state
            </label>
            <Input id="invoiceState" placeholder="" icon={Chevron} />
          </div>
          <div
            className={`${className1} info__container flex  flex--column flex__gap--1 `}
          >
            <label className="font__weight--400" htmlFor="invoiceDate">
              Invoice date
            </label>
            <Input id="invoiceDate" placeholder="" icon={Calendar} />
          </div>
          <div className="info__container flex  flex--column flex__gap--1">
            <label className="font__weight--400" htmlFor="invoicePaymentDate">
              Payment Due Date
            </label>
            <Input id="invoicePaymentDate" placeholder="" icon={Calendar} />
          </div>
        </fieldset>
      </form>
      <h2 className="font__weight--300">Billing Address Information</h2>
      <form>
        <fieldset className="flex flex--column flex__gap--2">
          <div className="info__container flex  flex--column flex__gap--1">
            <label className="font__weight--400" htmlFor="invoiceStreet">
              Street
            </label>
            <Input id="invoiceStreet" placeholder="" />
          </div>
          <div className="info__container flex flex__gap--1">
            <div className="flex flex--column flex__gap--1">
              <label className="font__weight--400" htmlFor="invoiceCity">
                City
              </label>
              <Input id="invoiceCity" placeholder="" />
            </div>
            <div className="flex flex--column flex__gap--1">
              <label className="font__weight--400" htmlFor="invoiceZipCode">
                Zip code
              </label>
              <Input id="invoiceZipCode" placeholder="" />
            </div>
          </div>
          <div className="info__container flex flex--column flex__gap--1">
            <label className="font__weight--400" htmlFor="invoiceCountry">
              Country
            </label>
            <Input id="invoiceCountry" placeholder="" />
          </div>
        </fieldset>
      </form>
      <Button
        type="button"
        name="createButton"
        text="Continue"
        buttonStyle="primary"
        onClick={() => onFormChange()}
      />
    </div>
  );
};

export default InfoForm;
