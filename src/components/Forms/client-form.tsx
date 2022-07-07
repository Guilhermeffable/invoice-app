import React from "react";
import Button from "../Button";
import Input from "../Input";

const ClientForm = ({ onFormChange }: { onFormChange: Function }) => {
  return (
    <div className="card info flex flex--column flex__gap--1">
      <h2 className="font__weight--300">Generic Information</h2>
      <form>
        <fieldset className="flex flex--column flex__gap--2">
          <div className="info__container flex flex--column flex__gap--1">
            <label className="font__weight--400" htmlFor="invoiceDescription">
              Name
            </label>
            <Input id="invoiceDescription" placeholder="" />
          </div>
          <div className="info__container flex  flex--column flex__gap--1">
            <label className="font__weight--400" htmlFor="invoiceState">
              Email
            </label>
            <Input id="invoiceState" placeholder="" />
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

export default ClientForm;
