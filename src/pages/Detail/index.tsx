import React from "react";
import { Chevron, Edit, Plus } from "../../assets/svg";
import "./_detail.scss";
import Breadcrumb from "../../components/Breadcrumb/index";
import Status from "../../components/Status";
import Button from "../../components/Button";

const InvoiceDetail = () => {
    return (
        <section className="container detail flex flex--column flex__gap--1">
            <header className="flex flex--column flex__gap--2">
                <Breadcrumb />
                <h2>View Invoice Details</h2>
            </header>
            <section className="card background--neutral-03 flex flex--space-between">
                <div className="detail__state flex flex--start-X flex--column ">
                    <p>State</p>
                    <Status type="paid" />
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
                        <p className="font__weight--600">#INV_04</p>
                        <Button
                            type="button"
                            name="seeMore"
                            text={"Edit"}
                            buttonStyle={"primary"}
                            icon={Edit}
                        />
                    </div>
                    <p>Web Development</p>
                </div>
                <div className="detail__section flex">
                    <div className="detail__info">
                        <p className="font__weight--600">Invoice Date</p>
                        <p>28 November 2021</p>
                    </div>
                    <div className="detail__info">
                        <p className="font__weight--600">Payment due</p>
                        <p>28 December 2021</p>
                    </div>
                </div>
                <div className="detail__section flex flex--column">
                    <p className="font__weight--600">Billing Address</p>
                    <div className="detail__info">
                        <p>40 Ilchester Road</p>
                        <p>NP6 9EF</p>
                        <p>United Kingdom</p>
                    </div>
                </div>
                <div className="detail__section flex flex--column">
                    <div className=" flex flex--space-between">
                        <p className="font__weight--600">Client's info</p>
                        <Button
                            type="button"
                            name="seeMore"
                            text={"Edit"}
                            buttonStyle={"primary"}
                            icon={Edit}
                        />
                    </div>
                    <div className="flex flex--column flex__gap--1">
                        <div className="detail__info">
                            <p className="font__weight--400">Stewart Foley</p>
                            <p>stewartfoley@mail.com</p>
                        </div>
                        <div className="detail__info">
                            <p>40 Ilchester Road</p>
                            <p>NP6 9EF</p>
                            <p>United Kingdom</p>
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
                        buttonStyle={"primary"}
                        icon={Edit}
                    />
                </header>
                <article className="flex flex--space-between">
                    <div className="detail__service flex flex--column">
                        <p className="font__weight--600">Website Development</p>
                        <p>1 x 3,680.00€</p>
                    </div>

                    <div className="detail__price">
                        <p className="font__weight--600">3,680.00€</p>
                    </div>
                </article>
                <footer className="flex flex--space-between background__main--primary text--white">
                    <p className="font__weight--600">Grand Total</p>
                    <p className="font__weight--600">4,680.00€</p>
                </footer>
            </section>
        </section>
    );
};

export default InvoiceDetail;
