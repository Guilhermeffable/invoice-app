import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/atoms/Breadcrumb";
import Toaster from "../../components/atoms/Toaster";
import "./_create.scss";
import InfoForm from "../../components/organisms/Forms/info-form";
import ClientForm from "../../components/organisms/Forms/client-form";
import ItemForm from "../../components/organisms/Forms/item-form";
import Button from "../../components/atoms/Button";
import {
  BreadcrumbLink,
  Client,
  FORM_TYPE,
  InvoiceInterface,
  InvoiceItem,
} from "../../utils";
import { addInvoice } from "../../services/invoices";
import { InvoiceProps } from "../../components/molecules/Invoice/utils";

const CreateInvoice = () => {
  const [formType, setFormType] = useState<FORM_TYPE>(
    FORM_TYPE.INVOICE_DETAILS
  );
  const [newInvoice, setNewInvoice] = useState<InvoiceInterface>({
    invoiceDescription: "",
    invoicePaymentDate: "",
    invoiceState: "",
    invoiceDate: "",
    billingAddress: { city: "", country: "", street: "", zipCode: "" },
    client: {
      clientAddress: { city: "", country: "", street: "", zipCode: "" },
      email: "",
      name: "",
    },
    items: [],
  });

  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbLink[]>([
    { title: "Create Invoice", url: "" },
  ]);

  const [firstProgress, setFirstProgress] = useState<number>(0);
  const [secondProgress, setSecondProgress] = useState<number>(0);

  useEffect(() => {
    if (formType === FORM_TYPE.CLIENT_DETAILS) {
      setInterval(() => setFirstProgress((prevState) => prevState + 1), 20);
    } else if (formType === FORM_TYPE.ITEMS_DETAILS) {
      setInterval(() => setSecondProgress((prevState) => prevState + 1), 20);
    }
  }, [formType]);

  const changeForm = () => {
    if (formType === FORM_TYPE.INVOICE_DETAILS) {
      setFormType(FORM_TYPE.CLIENT_DETAILS);
    } else if (formType === FORM_TYPE.CLIENT_DETAILS) {
      setFormType(FORM_TYPE.ITEMS_DETAILS);
    }
  };

  const saveGeneralInfo = (invoice: InvoiceInterface) => {
    setNewInvoice(invoice);
    newInvoice.invoiceDescription = invoice.invoiceDescription;
    newInvoice.invoiceDate = invoice.invoiceDate;
    newInvoice.invoicePaymentDate = invoice.invoicePaymentDate;
    newInvoice.invoiceState = invoice.invoiceState;

    newInvoice.billingAddress = invoice.billingAddress;
  };

  const saveClientInfo = (newClient: Client) => {
    newInvoice.client = newClient;
  };

  const saveInvoiceItems = (invoiceItems: InvoiceItem[]) => {
    newInvoice.items = invoiceItems;

    addInvoice(newInvoice);
  };

  let formElement;

  let invoiceDetailsClass = "active";
  let invoiceDetailsSpanClass =
    "border__color--primary background__main--primary text--white";
  let clientDetailsClass = "active";
  let clientDetailsSpanClass =
    "border__color--primary background__main--primary text--white";
  let itemDetailsClass = "active";
  let itemDetailsSpanClass =
    "border__color--primary background__main--primary text--white";

  switch (formType) {
    case FORM_TYPE.INVOICE_DETAILS:
      formElement = (
        <InfoForm onFormChange={changeForm} saveInfo={saveGeneralInfo} />
      );

      invoiceDetailsClass = "active";
      clientDetailsClass = "disabled";
      clientDetailsSpanClass = "border__color--grey-60";
      itemDetailsClass = "disabled";
      itemDetailsSpanClass = "border__color--grey-60";

      break;

    case FORM_TYPE.CLIENT_DETAILS:
      formElement = (
        <ClientForm onFormChange={changeForm} saveInfo={saveClientInfo} />
      );

      invoiceDetailsClass = "";
      clientDetailsClass = "active";
      clientDetailsSpanClass =
        "border__color--primary background__main--primary text--white";
      itemDetailsClass = "disabled";
      itemDetailsSpanClass = "border__color--grey-60";

      break;

    case FORM_TYPE.ITEMS_DETAILS:
      formElement = (
        <ItemForm onFormChange={changeForm} saveInfo={saveInvoiceItems} />
      );

      invoiceDetailsClass = "";
      clientDetailsClass = "";
      itemDetailsClass = "active";
      itemDetailsSpanClass =
        "border__color--primary background__main--primary text--white";

      break;
  }

  return (
    <section className="container create flex flex--column flex__gap--2">
      <header className="flex flex--column flex__gap--2">
        <Breadcrumb urls={breadcrumbItems} />
        <Toaster />
        <h2>Create new invoice</h2>
        <nav className="display--hide-lg">
          <ul className="create__nav flex flex--space-between">
            <li className={invoiceDetailsClass}>Invoice details</li>
            <li className={clientDetailsClass}>Client details</li>
            <li className={itemDetailsClass}>Invoice items</li>
          </ul>
        </nav>
      </header>
      <section className="create__container flex flex__gap--1">
        <article className="create__progress display--hide-sm card flex flex--column ">
          <div className="flex flex--center-Y ">
            <span
              className={`create__step border__radius--circle flex flex--center ${invoiceDetailsClass} ${invoiceDetailsSpanClass}`}
            >
              <p>1</p>
            </span>
            <p className={`font__weight--700 ${invoiceDetailsClass}`}>
              Invoice Detail
            </p>
          </div>
          <div className="create__bar-container">
            <progress
              className="create__bar"
              value={firstProgress}
              max={100}
            ></progress>
          </div>
          <div className="flex flex--center-Y ">
            <span
              className={`create__step border__radius--circle flex flex--center ${clientDetailsClass} ${clientDetailsSpanClass}`}
            >
              <p>2</p>
            </span>
            <p className={`font__weight--700 ${clientDetailsClass}`}>
              Client Details
            </p>
          </div>
          <div className="create__bar-container">
            <progress
              className="create__bar"
              value={secondProgress}
              max={100}
            ></progress>
          </div>
          <div className="flex flex--center-Y ">
            <span
              className={`create__step border__radius--circle flex flex--center ${itemDetailsClass} ${itemDetailsSpanClass}`}
            >
              <p>3</p>
            </span>
            <p className={`font__weight--700 ${itemDetailsClass}`}>
              Invoice Items
            </p>
          </div>
        </article>
        <article className="create__form">{formElement}</article>
      </section>
    </section>
  );
};

export default CreateInvoice;
