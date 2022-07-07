import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import "./_create.scss";
import InfoForm from "../../components/Forms/info-form";
import ClientForm from "../../components/Forms/client-form";
import ItemForm from "../../components/Forms/item-form";
import Button from "../../components/Button";
import { FORM_TYPE } from "../../utils/utils";

const CreateInvoice = () => {
  const [formType, setFormType] = useState<FORM_TYPE>(
    FORM_TYPE.INVOICE_DETAILS
  );

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

  const formElement =
    formType === FORM_TYPE.INVOICE_DETAILS ? (
      <InfoForm type={formType} onFormChange={changeForm} />
    ) : formType === FORM_TYPE.CLIENT_DETAILS ? (
      <ClientForm onFormChange={changeForm} />
    ) : (
      <ItemForm onFormChange={changeForm} />
    );

  return (
    <div className="container create flex flex--column flex__gap--2">
      <header className="flex flex--column flex__gap--2">
        <Breadcrumb title="Create Invoice" />
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
    </div>
  );
};

export default CreateInvoice;
