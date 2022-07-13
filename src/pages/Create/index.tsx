import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import "./_create.scss";
import InfoForm from "../../components/Forms/info-form";
import ClientForm from "../../components/Forms/client-form";
import ItemForm from "../../components/Forms/item-form";
import Button from "../../components/Button";
import {
  BreadcrumbLink,
  Client,
  FORM_TYPE,
  InvoiceInterface,
} from "../../utils/utils";
import { addInvoice } from "../../services/invoices";

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

  let invoiceDetailsClass = "active";
  let clientDetailsClass = "active";
  let itemDetailsClass = "active";

  switch (formType) {
    case FORM_TYPE.INVOICE_DETAILS:
      invoiceDetailsClass = "active";
      clientDetailsClass = "disabled";
      itemDetailsClass = "disabled";

      break;

    case FORM_TYPE.CLIENT_DETAILS:
      invoiceDetailsClass = "";
      clientDetailsClass = "active";
      itemDetailsClass = "disabled";

      break;

    case FORM_TYPE.ITEMS_DETAILS:
      invoiceDetailsClass = "";
      clientDetailsClass = "";
      itemDetailsClass = "active";

      break;
  }

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

  const saveInvoiceItems = (invoiceItems) => {
    newInvoice.items = invoiceItems;

    addInvoice(newInvoice);
  };

  let formElement;
  switch (formType) {
    case FORM_TYPE.INVOICE_DETAILS:
      formElement = (
        <InfoForm onFormChange={changeForm} saveInfo={saveGeneralInfo} />
      );
      break;

    case FORM_TYPE.CLIENT_DETAILS:
      formElement = (
        <ClientForm onFormChange={changeForm} saveInfo={saveClientInfo} />
      );
      break;

    case FORM_TYPE.ITEMS_DETAILS:
      formElement = (
        <ItemForm onFormChange={changeForm} saveInfo={saveInvoiceItems} />
      );
      break;
  }

  return (
    <section className="container create flex flex--column flex__gap--2">
      <header className="flex flex--column flex__gap--2">
        <Breadcrumb urls={breadcrumbItems} />
        <h2>Create new invoice</h2>
        <nav>
          <ul className="create__nav flex flex--space-between">
            <li className={invoiceDetailsClass}>Invoice details</li>
            <li className={clientDetailsClass}>Client details</li>
            <li className={itemDetailsClass}>Invoice items</li>
          </ul>
        </nav>
      </header>
      <section>{formElement}</section>
    </section>
  );
};

export default CreateInvoice;
