import React, { ChangeEvent, Fragment, useEffect, useState } from "react";
import { Chevron, Edit, Plus } from "../../assets/svg";
import "./_detail.scss";
import Breadcrumb from "../../components/atoms/Breadcrumb/index";
import Status from "../../components/atoms/Status";
import Button from "../../components/atoms/Button";
import { useLocation } from "react-router-dom";
import { BreadcrumbLink, InvoiceInterface } from "../../utils";
import Input from "../../components/atoms/Input";
import { deleteInvoice, putInvoice } from "../../services/invoices";
import Grid from "../../components/molecules/Grid";
import GridCol from "../../components/atoms/GridCol";

const InvoiceDetail = () => {
  const { state } = useLocation();

  const [editDescription, setEditDescription] = useState<boolean>(false);
  const [editClientInfo, setEditClientInfo] = useState<boolean>(false);
  const [editInvoiceItems, setEditInvoiceItems] = useState<boolean>(false);
  const [invoice, setInvoice] = useState<InvoiceInterface>(
    state as InvoiceInterface
  );
  const [invoiceDescription, setInvoiceDescription] = useState<string>(
    invoice.invoiceDescription!
  );
  const [clientName, setClientName] = useState<string>(invoice.client!.name);
  const [clientEmail, setClientEmail] = useState<string>(invoice.client!.email);
  const [clientStreet, setClientStreet] = useState<string>(
    invoice.client!.clientAddress.street
  );
  const [clientZipCode, setClientZipCode] = useState<string>(
    invoice.client!.clientAddress.zipCode
  );
  const [clientCountry, setClientCountry] = useState<string>(
    invoice.client!.clientAddress.country
  );

  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbLink[]>([
    { title: "Invoice Details", url: "" },
  ]);

  useEffect(() => {
    putInvoice(invoice);
  }, [
    invoice.invoiceDescription,
    invoice.client!.name,
    invoice.client!.email,
    invoice.client!.clientAddress.street,
    invoice.client!.clientAddress.zipCode,
    invoice.client!.clientAddress.country,
  ]);

  const saveDescription = () => {
    setEditDescription(!editDescription);

    invoice.invoiceDescription = invoiceDescription;

    setInvoice(invoice);
  };

  const saveClientInfo = () => {
    setEditClientInfo(!editClientInfo);

    invoice.client!.name = clientName;
    invoice.client!.email = clientEmail;
    invoice.client!.clientAddress.street = clientStreet;
    invoice.client!.clientAddress.zipCode = clientZipCode;
    invoice.client!.clientAddress.country = clientCountry;

    setInvoice(invoice);
  };

  const saveItemsName = (index: number, value: string) => {
    invoice.items![index].name = value;
  };

  const saveItemsQuantity = (index: number, value: string) => {
    invoice.items![index].quantity = value;
  };

  const saveItemsPrice = (index: number, value: string) => {
    invoice.items![index].price = value;
  };

  return (
    <div className="container detail flex flex--column flex__gap--1">
      <header className="flex flex--column flex__gap--2">
        <Breadcrumb urls={breadcrumbItems} />
        <h2>View Invoice Details</h2>
      </header>
      <article className="card background--neutral-03 flex flex--space-between">
        <div className="detail__state flex flex--start-X  ">
          <p className="margin-right-s">State</p>
          <Status type={invoice.invoiceState!} />
        </div>
        <Button
          type="button"
          buttonStyle={"primary"}
          label="Mark as paid"
          icon={Plus}
        />
      </article>
      <article className="card flex flex--column flex__gap--2">
        <header className="flex flex--column">
          <div className=" flex flex--space-between">
            <p className="font__weight--600">{invoice.invoiceId}</p>
            <Button
              type="button"
              label={!editDescription ? "Edit" : "Save"}
              buttonStyle={"inline"}
              icon={!editDescription ? Edit : Plus}
              onClick={saveDescription}
            />
          </div>
          <p>{invoiceDescription}</p>
        </header>
        <Grid extraClasses="detail__main-content flex flex--column ">
          <GridCol extraClasses=" flex" desktop={3}>
            <div className="detail__info">
              <p className="font__weight--600 margin-bottom-xxs">
                Invoice Date
              </p>
              <p>{new Date(invoice.invoiceDate!).toDateString()}</p>
            </div>
            <div className="detail__info">
              <p className="font__weight--600 margin-bottom-xxs">Payment due</p>
              <p>{new Date(invoice.invoicePaymentDate!).toDateString()}</p>
            </div>
          </GridCol>
          <GridCol extraClasses="flex flex--column" desktop={4}>
            <p className="font__weight--600 margin-bottom-s">Billing Address</p>
            <div className="detail__info">
              <p>{invoice.billingAddress!.street}</p>
              <p>{invoice.billingAddress!.zipCode}</p>
              <p>{invoice.billingAddress!.country}</p>
            </div>
          </GridCol>
          <GridCol extraClasses=" flex flex--column" desktop={4}>
            <p className="font__weight--600 margin-bottom-s">Client's info</p>
            <div className="flex flex--column flex__gap--1">
              <div className="detail__info">
                <p className="font__weight--400">{clientName}</p>
                <p>{clientEmail}</p>
              </div>
              <div className="detail__info">
                <p>{clientStreet}</p>
                <p>{clientZipCode}</p>
                <p>{clientCountry}</p>
              </div>
            </div>
          </GridCol>
          <GridCol
            extraClasses="display--hide-sm flex flex--start-Y flex--end-X"
            desktop={1}
          >
            <Button
              type="button"
              label={"Edit"}
              buttonStyle={"inline"}
              icon={Edit}
              onClick={saveClientInfo}
            />
          </GridCol>
        </Grid>
      </article>
      <article className="card">
        <header className="flex flex--end-X">
          <Button
            type="button"
            label={"Edit"}
            buttonStyle={"inline"}
            icon={Edit}
            onClick={saveClientInfo}
          />
        </header>
        <section className="detail__container flex flex--column flex__gap--1">
          <Grid extraClasses="detail__item-titles display--hide-mobile">
            <GridCol desktop={6} tablet={3}>
              <p className="font__weight--600">Item Name</p>
            </GridCol>
            <GridCol desktop={2} tablet={3}>
              <p className="font__weight--600">Quantity</p>
            </GridCol>
            <GridCol desktop={2} tablet={3}>
              <p className="font__weight--600">Price</p>
            </GridCol>
            <GridCol desktop={2} tablet={3} extraClasses="flex flex--end-X">
              <p className="font__weight--600">Total</p>
            </GridCol>
          </Grid>
          <ul>
            {invoice.items!.map((item, index) => {
              return (
                <li key={index}>
                  <Grid extraClasses="margin-bottom-s">
                    <GridCol desktop={6} mobile={6} tablet={3}>
                      <p className="font__weight--600">{item.name}</p>
                      <p className="display--hide-lg">{`${item.quantity} x ${(
                        Math.round(parseInt(item.price) * 100) / 100
                      ).toFixed(2)}€`}</p>
                    </GridCol>
                    <GridCol
                      desktop={2}
                      tablet={3}
                      extraClasses="display--hide-sm"
                    >
                      <p>{item.quantity}</p>
                    </GridCol>
                    <GridCol
                      desktop={2}
                      tablet={3}
                      extraClasses="display--hide-sm"
                    >
                      <p>
                        {(Math.round(parseInt(item.price) * 100) / 100).toFixed(
                          2
                        )}
                        €
                      </p>
                    </GridCol>
                    <GridCol
                      desktop={2}
                      tablet={3}
                      extraClasses="display--hide-sm flex flex--end-X"
                    >
                      <p className="font__weight--600">
                        {(
                          Math.round(
                            parseInt(item.price) * parseInt(item.quantity) * 100
                          ) / 100
                        ).toFixed(2)}
                        €
                      </p>
                    </GridCol>
                    <GridCol
                      tablet={3}
                      mobile={6}
                      extraClasses="detail__price  display--hide-lg flex flex--align-center flex--end-X "
                    >
                      <p className="font__weight--600 ">
                        {(
                          Math.round(
                            parseInt(item.price) * parseInt(item.quantity) * 100
                          ) / 100
                        ).toFixed(2)}
                        €
                      </p>
                    </GridCol>
                  </Grid>
                </li>
              );
            })}
          </ul>
        </section>
        <footer className="flex flex--space-between background__main--primary text--white">
          <p className="font__weight--600">Grand Total</p>
          <p className="font__weight--600">
            {(
              Math.round(
                invoice.items!.reduce((accum, item) => {
                  return accum + parseInt(item.price) * parseInt(item.quantity);
                }, 0) * 100
              ) / 100
            ).toFixed(2)}
            €
          </p>
        </footer>
      </article>
      <div className="detail__button flex flex--center font__weight--600">
        <Button
          buttonStyle="primary"
          type="button"
          label="Delete"
          onClick={() => deleteInvoice(invoice.invoiceId!)}
        />
      </div>
    </div>
  );
};

export default InvoiceDetail;
