import React from "react";
import { Chevron, Edit, Plus } from "../../assets/svg";
import "./_detail.scss";
import Breadcrumb from "../../components/Breadcrumb/index";
import Status from "../../components/Status";
import Button from "../../components/Button";
import { useLocation } from "react-router-dom";
import { InvoiceInterface } from "../../utils/utils";

const InvoiceDetail = () => {
    const { state } = useLocation();

    const invoice = state as InvoiceInterface;

    return (
        <section className="container detail flex flex--column flex__gap--1">
            <header className="flex flex--column flex__gap--2">
                <Breadcrumb />
                <h2>View Invoice Details</h2>
            </header>
            <section className="card background--neutral-03 flex flex--space-between">
                <div className="detail__state flex flex--start-X flex--column ">
                    <p>State</p>
                    <Status type={invoice.invoiceState} />
                </div>
                <Button
                    name="markPaid"
                    type="button"
                    buttonStyle={"primary"}
                    text="Mark as paid"
                    icon={Plus}
                />
            </section>
            <section className="card flex flex--column flex__gap--2">
                <div className="detail__section flex flex--column">
                    <div className=" flex flex--space-between">
                        <p className="font__weight--600">{invoice.invoiceId}</p>
                        <Button
                            type="button"
                            name="seeMore"
                            text={"Edit"}
                            buttonStyle={"inline"}
                            icon={Edit}
                        />
                    </div>
                    <p>{invoice.invoiceDescription}</p>
                </div>
                <div className="detail__section flex">
                    <div className="detail__info">
                        <p className="font__weight--600">Invoice Date</p>
                        <p>{new Date(invoice.invoiceDate).toDateString()}</p>
                    </div>
                    <div className="detail__info">
                        <p className="font__weight--600">Payment due</p>
                        <p>
                            {new Date(
                                invoice.invoicePaymentDate
                            ).toDateString()}
                        </p>
                    </div>
                </div>
                <div className="detail__section flex flex--column">
                    <p className="font__weight--600">Billing Address</p>
                    <div className="detail__info">
                        <p>{invoice.billingAddress.street}</p>
                        <p>{invoice.billingAddress.zipCode}</p>
                        <p>{invoice.billingAddress.country}</p>
                    </div>
                </div>
                <div className="detail__section flex flex--column">
                    <div className=" flex flex--space-between">
                        <p className="font__weight--600">Client's info</p>
                        <Button
                            type="button"
                            name="seeMore"
                            text={"Edit"}
                            buttonStyle={"inline"}
                            icon={Edit}
                        />
                    </div>
                    <div className="flex flex--column flex__gap--1">
                        <div className="detail__info">
                            <p className="font__weight--400">
                                {invoice.client.name}
                            </p>
                            <p>{invoice.client.email}</p>
                        </div>
                        <div className="detail__info">
                            <p>{invoice.client.clientAddress.street}</p>
                            <p>{invoice.client.clientAddress.zipCode}</p>
                            <p>{invoice.client.clientAddress.country}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="card">
                <header className="flex flex--end-X">
                    <Button
                        type="button"
                        name="seeMore"
                        text={"Edit"}
                        buttonStyle={"inline"}
                        icon={Edit}
                    />
                </header>
                {invoice.items.map((item) => {
                    return (
                        <div className="flex flex--space-between">
                            <div className="detail__service flex flex--column">
                                <p className="font__weight--600">{item.name}</p>
                                <p>{`${item.quantity} x ${(
                                    Math.round(parseInt(item.price) * 100) / 100
                                ).toFixed(2)}€`}</p>
                            </div>

                            <div className="detail__price">
                                <p className="font__weight--600">
                                    {(
                                        Math.round(parseInt(item.price) * 100) /
                                        100
                                    ).toFixed(2)}
                                    €
                                </p>
                            </div>
                        </div>
                    );
                })}

                <footer className="flex flex--space-between background__main--primary text--white">
                    <p className="font__weight--600">Grand Total</p>
                    <p className="font__weight--600">
                        {(
                            Math.round(
                                invoice.items.reduce((accum, item) => {
                                    return accum + parseInt(item.price);
                                }, 0) * 100
                            ) / 100
                        ).toFixed(2)}
                        €
                    </p>
                </footer>
            </section>
        </section>
    );
};

export default InvoiceDetail;
