import React, { Fragment, useEffect, useState } from "react";
import { Calendar, Chevron } from "../../../assets/svg";
import { FORM_TYPE, InvoiceInterface } from "../../../utils";
import Button from "../../atoms/Button";
import DatePicker from "../../molecules/Datepicker";
import Input from "../../molecules/Input";
import Select from "../../molecules/Select";
import "../../../assets/styles/components/organisms/_info.scss";

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

  const [showDatepickerDate, setShowDatepickerDate] = useState<boolean>(false);
  const [showDatepickerDueDate, setShowDatepickerDueDate] =
    useState<boolean>(false);

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
    setShowDatepickerDate(false);
    invoice.invoiceDate = value;
  };

  const saveInvoiceDueDate = (value: string) => {
    setInvoiceDueDate(value);
    setShowDatepickerDueDate(false);
    invoice.invoicePaymentDate = value;
  };

  const changePage = () => {
    saveInfo(invoice);
    onFormChange();
  };

  return (
    <div className="card info flex flex--column flex__gap--1">
      <h2 className="font__weight--300">Generic Information</h2>
      <form>
        <fieldset className="flex flex--column flex__gap--2">
          <div className="info__container flex flex--column flex__gap--1">
            <label className="font__weight--400" htmlFor="invoiceDescription">
              Invoice description
            </label>
            <Input
              id="invoiceDescription"
              placeholder=""
              onChange={(value: string) => setDescription(value)}
            />
          </div>
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
            <div className="info__container flex  flex--column flex__gap--1 ">
              <label className="font__weight--400" htmlFor="invoiceDate">
                Invoice date
              </label>
              <div className="info__datepicker position--relative">
                <div onClick={() => setShowDatepickerDate(!showDatepickerDate)}>
                  <Input
                    id="invoiceDate"
                    icon={Calendar}
                    placeholder={invoiceDate}
                  />
                </div>
                <div
                  className={`position--absolute ${
                    !showDatepickerDate ? "display--none" : ""
                  }`}
                >
                  <DatePicker
                    saveDates={(dateArr: Date[]) =>
                      saveInvoiceDate(dateArr[0].toDateString())
                    }
                    clearDates={setInvoiceDate}
                    multipleSelection={false}
                  />
                </div>
              </div>
            </div>
            <div className="info__container flex  flex--column flex__gap--1">
              <label className="font__weight--400" htmlFor="invoicePaymentDate">
                Payment Due Date
              </label>
              <div className="info__datepicker position--relative">
                <div
                  onClick={() =>
                    setShowDatepickerDueDate(!showDatepickerDueDate)
                  }
                >
                  <Input
                    id="invoicePaymentDate"
                    placeholder={invoiceDueDate}
                    icon={Calendar}
                  />
                </div>
                <div
                  className={`position--absolute  ${
                    !showDatepickerDueDate ? "display--none" : ""
                  }`}
                >
                  <DatePicker
                    saveDates={(dateArr: Date[]) =>
                      saveInvoiceDueDate(dateArr[0].toDateString())
                    }
                    clearDates={() => console.log()}
                    multipleSelection={false}
                  />
                </div>
              </div>
            </div>
          </section>
        </fieldset>
      </form>
      <h2 className="font__weight--300">Billing Address Information</h2>
      <form>
        <fieldset className="flex flex--column flex__gap--2">
          <div className="info__container flex  flex--column flex__gap--1">
            <label className="font__weight--400" htmlFor="invoiceStreet">
              Street
            </label>
            <Input
              id="invoiceStreet"
              placeholder=""
              onChange={(value: string) => setStreet(value)}
            />
          </div>
          <section className="info__form-section  flex flex__gap--1">
            <div className="info__container flex flex__gap--1">
              <div className="flex flex--column flex__gap--1">
                <label className="font__weight--400" htmlFor="invoiceCity">
                  City
                </label>
                <Input
                  id="invoiceCity"
                  placeholder=""
                  onChange={(value: string) => setCity(value)}
                />
              </div>
              <div className="flex flex--column flex__gap--1">
                <label className="font__weight--400" htmlFor="invoiceZipCode">
                  Zip code
                </label>
                <Input
                  id="invoiceZipCode"
                  placeholder=""
                  onChange={(value: string) => setZipCode(value)}
                />
              </div>
            </div>
            <div className="info__container flex flex--column flex__gap--1">
              <label className="font__weight--400" htmlFor="invoiceCountry">
                Country
              </label>
              <Input
                id="invoiceCountry"
                placeholder=""
                onChange={(value: string) => setCountry(value)}
              />
            </div>
          </section>
        </fieldset>
      </form>
      <Button
        type="button"
        label="Continue"
        buttonStyle="primary"
        onClick={() => changePage()}
      />
    </div>
  );
};

export default InfoForm;
