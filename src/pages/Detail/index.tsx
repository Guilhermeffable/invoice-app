import React, { Fragment, useEffect, useState } from "react";
import { Chevron, Edit, Plus } from "../../assets/svg";
import "./_detail.scss";
import Breadcrumb from "../../components/atoms/Breadcrumb/index";
import Status from "../../components/atoms/Status";
import Button from "../../components/atoms/Button";
import { useLocation } from "react-router-dom";
import { BreadcrumbLink, InvoiceInterface } from "../../utils";
import Input from "../../components/molecules/Input";
import { deleteInvoice, putInvoice } from "../../services/invoices";

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
      <section className="card background--neutral-03 flex flex--space-between">
        <div className="detail__state flex flex--start-X flex--column ">
          <p>State</p>
          <Status type={invoice.invoiceState!} />
        </div>
        <Button
          type="button"
          buttonStyle={"primary"}
          label="Mark as paid"
          icon={Plus}
        />
      </section>
      <section className="card flex flex--column flex__gap--2">
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
          {!editDescription ? (
            <p>{invoiceDescription}</p>
          ) : (
            <Fragment>
              <label htmlFor="invoiceDescription">Invoice Description:</label>
              <Input
                id="invoiceDescription"
                placeholder={invoiceDescription}
                onChange={(value: string) => setInvoiceDescription(value)}
              />
            </Fragment>
          )}
        </header>
        <article className="detail__main-content flex flex--column flex__gap--2">
          <div className="detail__section flex">
            <div className="detail__info">
              <p className="font__weight--600">Invoice Date</p>
              <p>{new Date(invoice.invoiceDate!).toDateString()}</p>
            </div>
            <div className="detail__info">
              <p className="font__weight--600">Payment due</p>
              <p>{new Date(invoice.invoicePaymentDate!).toDateString()}</p>
            </div>
          </div>
          <div className="detail__section flex flex--column">
            <p className="font__weight--600">Billing Address</p>
            <div className="detail__info">
              <p>{invoice.billingAddress!.street}</p>
              <p>{invoice.billingAddress!.zipCode}</p>
              <p>{invoice.billingAddress!.country}</p>
            </div>
          </div>
          <div className="detail__section flex flex--column">
            <p className="font__weight--600">Client's info</p>

            {!editClientInfo ? (
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
            ) : (
              <form>
                <fieldset className="flex flex--column flex__gap--1">
                  <label htmlFor="clientName">Client's name:</label>
                  <Input
                    id="clientName"
                    placeholder={clientName}
                    onChange={(value: string) => setClientName(value)}
                  />

                  <label htmlFor="clientEmail">Client's email:</label>
                  <Input
                    id="clientEmail"
                    placeholder={clientEmail}
                    onChange={(value: string) => setClientEmail(value)}
                  />

                  <label htmlFor="clientStreet">Client's street:</label>
                  <Input
                    id="clientStreet"
                    placeholder={clientStreet}
                    onChange={(value: string) => setClientStreet(value)}
                  />

                  <label htmlFor="clientZipCode">Client's zip code:</label>
                  <Input
                    id="clientZipCode"
                    placeholder={clientZipCode}
                    onChange={(value: string) => setClientZipCode(value)}
                  />

                  <label htmlFor="clientCountry">Client's country:</label>
                  <Input
                    id="clientCountry"
                    placeholder={clientCountry}
                    onChange={(value: string) => setClientCountry(value)}
                  />
                </fieldset>
              </form>
            )}
          </div>
          <div className="display--hide-sm flex flex--end-X">
            <Button
              type="button"
              label={!editClientInfo ? "Edit" : "Save"}
              buttonStyle={"inline"}
              icon={!editClientInfo ? Edit : Plus}
              onClick={saveClientInfo}
            />
          </div>
        </article>
      </section>
      <section className="card">
        <header className="flex flex--end-X">
          <Button
            type="button"
            label={!editInvoiceItems ? "Edit" : "Save"}
            buttonStyle={"inline"}
            icon={!editInvoiceItems ? Edit : Plus}
            onClick={() => setEditInvoiceItems(!editInvoiceItems)}
          />
        </header>
        <article className="detail__container flex flex--column flex__gap--1">
          <div className="detail__item-titles display--hide-mobile flex flex--space-between">
            <p className="font__weight--600">Item Name</p>

            <div>
              <p className="font__weight--600">Quantity</p>
            </div>
            <div>
              <p className="font__weight--600">Price</p>
            </div>
            <div>
              <p className="font__weight--600">Total</p>
            </div>
          </div>
          {invoice.items!.map((item, index) => {
            return !editInvoiceItems ? (
              <div key={index} className="flex flex--space-between ">
                <div className="detail__service flex flex--column">
                  <p className="font__weight--600">{item.name}</p>
                  <p className="display--hide-lg">{`${item.quantity} x ${(
                    Math.round(parseInt(item.price) * 100) / 100
                  ).toFixed(2)}€`}</p>
                  <div className="display--hide-sm">
                    <p>{item.quantity}</p>
                  </div>
                  <div className="display--hide-sm">
                    <p>
                      {(Math.round(parseInt(item.price) * 100) / 100).toFixed(
                        2
                      )}
                      €
                    </p>
                  </div>
                  <div className="display--hide-sm">
                    <p className="font__weight--600">
                      {(
                        Math.round(
                          parseInt(item.price) * parseInt(item.quantity) * 100
                        ) / 100
                      ).toFixed(2)}
                      €
                    </p>
                  </div>
                </div>

                <div className="detail__price display--hide-lg">
                  <p className="font__weight--600">
                    {(
                      Math.round(
                        parseInt(item.price) * parseInt(item.quantity) * 100
                      ) / 100
                    ).toFixed(2)}
                    €
                  </p>
                </div>
              </div>
            ) : (
              <form>
                <fieldset className="flex flex--column flex__gap--1">
                  <div>
                    <label htmlFor="itemName">Name:</label>
                    <Input
                      id="itemName"
                      placeholder={item.name}
                      onChange={(value: string) => saveItemsName(index, value)}
                    />
                  </div>
                  <div className="flex flex__gap--1">
                    <div>
                      <label htmlFor="itemPrice">Price:</label>
                      <Input
                        id="itemPrice"
                        placeholder={item.price}
                        onChange={(value: string) =>
                          saveItemsPrice(index, value)
                        }
                      />
                    </div>
                    <div>
                      <label htmlFor="itemQuantity">Quantity:</label>
                      <Input
                        id="itemQuantity"
                        placeholder={item.quantity}
                        onChange={(value: string) =>
                          saveItemsQuantity(index, value)
                        }
                      />
                    </div>
                  </div>
                </fieldset>
              </form>
            );
          })}
        </article>
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
      </section>
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
