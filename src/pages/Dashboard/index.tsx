import React, { Fragment, useEffect, useState } from "react";
import "../../scss/tools/_container.scss";
import "./_dashboard.scss";
import { Chevron, Filter } from "../../assets/svg";
import Invoice from "../../components/Invoice";
import Button from "../../components/Button/index";
import Filters from "../../components/Filters";
import { Plus } from "../../assets/svg";
import { getInvoices } from "../../services/invoices";
import { InvoiceInterface } from "../../utils/interfaces";
import Input from "../../components/Input";

const Dashboard = () => {
    const [showFilters, setShowFilters] = useState<boolean>(false);
    const [isDesktop, setDesktop] = useState(window.innerWidth >= 600);
    const [invoices, setInvoices] = useState<[]>([]);
    const [lastIndex, setLastIndex] = useState(0);
    const [lastNum, setLastNum] = useState(5);

    const updateMedia = () => {
        setDesktop(window.innerWidth >= 600);
    };

    useEffect(() => {
        getInvoices(lastIndex, lastNum).then((result: []) =>
            setInvoices((prevState) => [...prevState, ...result])
        );
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    }, [lastIndex]);

    const setFilters = (isFilter: boolean) => {
        setTimeout(() => setShowFilters(!isFilter), 300);
    };

    return (
        <section className="container dashboard">
            <header className="dashboard__header flex flex--column flex--start">
                <div className="dashboard__title">
                    <h1>Invoices - 5</h1>
                </div>
                <div
                    className={`dashboard__actions flex ${
                        !isDesktop ? "flex--space-between" : ""
                    }`}
                >
                    <div
                        className="dashboard__filter flex flex--center"
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        Filter
                        <Filter className="icon__fill--background-primary" />
                    </div>
                    <Button
                        type="button"
                        buttonStyle={"primary"}
                        text="New Invoice"
                        icon={Plus}
                        onClick={() => console.log("olá")}
                    />
                </div>
            </header>
            {invoices.length > 0 ? (
                <article className="dashboard__content flex flex--column">
                    <ul className="flex flex--column">
                        {invoices.map((invoice: InvoiceInterface, index) => {
                            return (
                                <li>
                                    <Invoice
                                        key={index}
                                        ID={invoice.invoiceId}
                                        date={invoice.invoiceDate}
                                        client={invoice.client}
                                        description={invoice.invoiceDescription}
                                        price={invoice.items.reduce(
                                            (accum, item) => {
                                                return (
                                                    accum + parseInt(item.price)
                                                );
                                            },
                                            0
                                        )}
                                        state={invoice.invoiceState}
                                        isDesktop={isDesktop}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </article>
            ) : (
                ""
            )}

            <aside
                className={`${
                    !showFilters ? "display--none" : "display--block"
                } `}
            >
                <Filters showFilters={showFilters} setFilters={setFilters} />
            </aside>
            <footer className="dashboard__footer flex flex--center">
                <Button
                    onClick={() => {
                        setLastIndex(lastIndex + 5);
                        setLastNum(lastNum);
                    }}
                    type="button"
                    text={"See more invoices"}
                    buttonStyle={"inline"}
                    icon={Chevron}
                />
            </footer>
        </section>
    );
};

export default Dashboard;
