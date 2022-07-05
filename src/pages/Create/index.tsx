import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import "./_create.scss";
import GeneralInfo from "../../components/Forms/general-info";

const CreateInvoice = () => {
  return (
    <div className="container create flex flex--column flex__gap--2">
      <header className="flex flex--column flex__gap--2">
        <Breadcrumb title="Create Invoice" />
        <h2>Create new invoice</h2>
        <nav>
          <ul className="create__nav flex flex--space-between">
            <li className="active">Invoice details</li>
            <li className="disabled">Client details</li>
            <li className="disabled">Invoice items</li>
          </ul>
        </nav>
      </header>
      <section>
        <GeneralInfo />
      </section>
    </div>
  );
};

export default CreateInvoice;
