import React, { Fragment, useCallback, useEffect, useState } from "react";
import "../../scss/tools/_container.scss";
import "./_dashboard.scss";
import { Chevron, Filter } from "../../assets/svg";
import Invoice from "../../components/Invoice";
import Button from "../../components/Button/index";
import Filters from "../../components/Filters";
import { Plus } from "../../assets/svg";
import { getInvoices } from "../../services/invoices";
import {
  FilterValues,
  initialFilterValues,
  InvoiceInterface,
  InvoiceSearch,
} from "../../utils/utils";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [invoices, setInvoices] = useState<[]>([]);
  const [lastIndex, setLastIndex] = useState<number>(0);
  const [lastNum, setLastNum] = useState<number>(5);
  const [filterValues, setFilterValues] =
    useState<FilterValues>(initialFilterValues);

  let states = [
    filterValues.paidPill,
    filterValues.canceledPill,
    filterValues.pendingPill,
  ]
    .filter((x) => x !== "")
    .join(",");

  const invoiceSearch: InvoiceSearch = {
    lastIndex: lastIndex,
    lastNum: lastNum,
    states: states,
    dateBeggining: filterValues.dateBeginning,
    dateEnd: filterValues.dateEnd,
    clientName: filterValues.clientName,
    order: filterValues.order,
  };

  useEffect(() => {
    getInvoices(invoiceSearch).then((result: []) =>
      setInvoices((prevState) => [...prevState, ...result])
    );
  }, [lastIndex]);

  const navigate = useNavigate();

  const handleOnClick = (invoice) => {
    navigate("/invoice", { state: invoice, replace: true });
  };

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
      .filter((x) => x !== "")
      .join(",");

    invoiceSearch.lastIndex = 0;
    invoiceSearch.lastNum = 5;

    getInvoices(invoiceSearch).then((result: []) => setInvoices(result));
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
            onClick={() => navigate("/create", { replace: true })}
          />
        </div>
      </header>
      {invoices.length > 0 ? (
        <article className="dashboard__content flex flex--column">
          <ul className="flex flex--column">
            {invoices.map((invoice: InvoiceInterface, index) => {
              return (
                <li onClick={() => handleOnClick(invoice)} key={index}>
                  <Invoice
                    key={index}
                    ID={invoice.invoiceId!}
                    date={invoice.invoicePaymentDate!}
                    client={invoice.client!}
                    description={invoice.invoiceDescription!}
                    price={invoice.items!.reduce((accum, item) => {
                      return accum + parseInt(item.price);
                    }, 0)}
                    state={invoice.invoiceState!}
                  />
                </li>
              );
            })}
          </ul>
        </article>
      ) : (
        ""
      )}

      <aside className={`${!showFilters ? "display--none" : ""} `}>
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
          buttonStyle={"inline"}
          icon={Chevron}
        />
      </footer>
    </section>
  );
};

export default Dashboard;
