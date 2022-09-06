import React, { Fragment, useEffect, useState } from "react";
import { Calendar, Chevron } from "../../../assets/svg";
import { FORM_TYPE, InvoiceInterface } from "../../../utils";
import Button from "../../atoms/Button";
import DatePicker from "../../molecules/Datepicker";
import Input from "../../atoms/Input";
import Select from "../../molecules/Select";
import "../../../assets/styles/components/organisms/_info.scss";
import InputField from "../../molecules/Form/InputField";
import Card from "../../molecules/Card";
import InputDatepicker from "../../molecules/Form/InputDatepicker";

const InfoForm = ({
  onFormChange,
  saveInfo,
}: {
  onFormChange: Function;
  saveInfo: Function;
}) => {
  const [state, setState] = useState<string>("paid");
  const [invoice, setInvoice] = useState<InvoiceInterface>({
    invoiceDescription: "",
    invoicePaymentDate: "",
    invoiceState: state,
    invoiceDate: "",
    billingAddress: { city: "", country: "", street: "", zipCode: "" },
  });

  const [invoiceDate, setInvoiceDate] = useState<string>("");
  const [invoiceDueDate, setInvoiceDueDate] = useState<string>("");

  const setDescription = (value: string) => {
    invoice.invoiceDescription = value;
  };

  const setStreet = (value: string) => {
    invoice.billingAddress!.street = value;
  };
  const setCity = (value: string) => {
    invoice.billingAddress!.city = value;
  };
  const setZipCode = (value: string) => {
    invoice.billingAddress!.zipCode = value;
  };
  const setCountry = (value: string) => {
    invoice.billingAddress!.country = value;
  };

  const saveInvoiceDate = (value: string) => {
    setInvoiceDate(value);
    invoice.invoiceDate = value;
  };

  const saveInvoiceDueDate = (value: string) => {
    setInvoiceDueDate(value);
    invoice.invoicePaymentDate = value;
  };

  const changePage = () => {
    saveInfo(invoice);
    onFormChange();
  };

  return (
    <Card extraClasses="info">
      <form>
        <fieldset className="flex flex--column flex__gap--2">
          <InputField
            label={"Invoice description"}
            id={"invoiceDescription"}
            onChange={setDescription}
            placeholder={""}
          />
          <section className="info__form-section flex flex__gap--1">
            <div className="info__container flex flex--column flex__gap--1">
              <label className="font__weight--400" htmlFor="invoiceState">
                Invoice state
              </label>
              <Select
                defaultValue="paid"
                options={["paid", "canceled", "pending"]}
                onSelect={(value: string) => setState(value)}
              />
            </div>
            <InputDatepicker
              label={"Invoice date"}
              id={"invoiceDate"}
              saveDates={saveInvoiceDate}
              placeholder={invoiceDate}
            />
            <InputDatepicker
              label={"Payment Due Date"}
              id={"invoicePaymentDate"}
              saveDates={saveInvoiceDueDate}
              placeholder={invoiceDueDate}
            />
          </section>
        </fieldset>
      </form>
      <h2 className="font__weight--300">Billing Address Information</h2>
      <form>
        <fieldset className="flex flex--column flex__gap--2">
          <InputField
            label={"Street"}
            id={"invoiceStreet"}
            onChange={setStreet}
            placeholder={""}
          />
          <section className="info__form-section  flex flex__gap--1">
            <InputField
              label={"City"}
              id={"invoiceCity"}
              onChange={setCity}
              placeholder={""}
            />
            <InputField
              label={"Zip code"}
              id={"invoiceZipCode"}
              onChange={setZipCode}
              placeholder={""}
            />
            <InputField
              label={"Country"}
              id={"invoiceCountry"}
              onChange={setCountry}
              placeholder={""}
            />
          </section>
        </fieldset>
      </form>
      <Button
        type="button"
        label="Continue"
        buttonStyle="primary"
        onClick={() => changePage()}
      />
    </Card>
  );
};

export default InfoForm;
