import React, { Fragment, useCallback, useEffect, useState } from "react";
import "../../scss/tools/_container.scss";
import "./_dashboard.scss";
import { Chevron, Filter } from "../../assets/svg";
import Invoice from "../../components/Invoice";
import Button from "../../components/Button/index";
import Filters from "../../components/Filters";
import { Plus } from "../../assets/svg";
import { getFilteredInvoices, getInvoices } from "../../services/invoices";
import {
    FilterValues,
    initialFilterValues,
    InvoiceInterface,
} from "../../utils/utils";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [showFilters, setShowFilters] = useState<boolean>(false);
    const [isDesktop, setDesktop] = useState(window.innerWidth >= 600);
    const [invoices, setInvoices] = useState<[]>([]);
    const [lastIndex, setLastIndex] = useState<number>(0);
    const [lastNum, setLastNum] = useState<number>(5);
    const [filterValues, setFilterValues] =
        useState<FilterValues>(initialFilterValues);
    const updateMedia = () => {
        setDesktop(window.innerWidth >= 600);
    };

    let states = [
        filterValues.paidPill,
        filterValues.canceledPill,
        filterValues.pendingPill,
    ]
        .filter((x) => x != "")
        .join(",");

    useEffect(() => {
        getInvoices(
            lastIndex,
            lastNum,
            states,
            filterValues.dateBeginning,
            filterValues.dateEnd,
            filterValues.clientName
        ).then((result: []) =>
            setInvoices((prevState) => [...prevState, ...result])
        );
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    }, [lastIndex]);

    const navigate = useNavigate();

    const handleOnClick = useCallback(
        () => navigate("/invoice", { replace: true }),
        [navigate]
    );

    const setFilters = (isFilter: boolean) => {
        setTimeout(() => setShowFilters(!isFilter), 300);
    };

    const seeMore = () => {
        setLastIndex(lastIndex + 5);
        setLastNum(lastNum);
    };

    const filterInvoices = (filterValues: FilterValues) => {
        setFilterValues(filterValues);

        let states = [
            filterValues.paidPill,
            filterValues.canceledPill,
            filterValues.pendingPill,
        ]
            .filter((x) => x != "")
            .join(",");

        getInvoices(
            0,
            5,
            states,
            filterValues.dateBeginning,
            filterValues.dateEnd,
            filterValues.clientName
        ).then((result: []) => setInvoices(result));
    };

    return (
        <section className="container dashboard">
            <header className="dashboard__header flex flex--column flex--start">
                <div className="dashboard__title">
                    <h1>{`Invoices - ${invoices.length}`}</h1>
                </div>
                <div className="dashboard__actions flex">
                    <div
                        className="dashboard__filter flex flex--center"
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        Filter
                        <Filter className="icon__fill--background-primary" />
                    </div>
                    <Button
                        name="newInvoice"
                        type="button"
                        buttonStyle={"primary"}
                        text="New Invoice"
                        icon={Plus}
                    />
                </div>
            </header>
            {invoices.length > 0 ? (
                <article className="dashboard__content flex flex--column">
                    <ul className="flex flex--column">
                        {invoices.map((invoice: InvoiceInterface, index) => {
                            return (
                                <li onClick={handleOnClick} key={index}>
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
                <Filters
                    showFilters={showFilters}
                    setFilters={setFilters}
                    filterInvoices={filterInvoices}
                />
            </aside>
            <footer className="dashboard__footer flex flex--center">
                <Button
                    onClick={seeMore}
                    type="button"
                    name="seeMore"
                    text={"See more invoices"}
                    buttonStyle={"primary"}
                    icon={Chevron}
                />
            </footer>
        </section>
    );
};

export default Dashboard;
