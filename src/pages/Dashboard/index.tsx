import React, { useState } from "react";
import "../../scss/tools/_container.scss";
import "./_dashboard.scss";
import { Filter } from "../../assets/svg";
import Invoice from "../../components/Invoice";
import Button from "../../components/Button/index";
import Filters from "../../components/Filters";
import { Plus } from "../../assets/svg";

const Dashboard = () => {
    const [showFilters, setShowFilters] = useState<boolean>(false);

    const setFilters = (isFilter: boolean) => {
        setTimeout(() => setShowFilters(!isFilter), 300);
    };

    return (
        <section className="container dashboard">
            <header className="dashboard__header flex flex--center flex--space-between">
                <div className="dashboard__title">
                    <h1>Invoices - 5</h1>
                </div>
                <div className="dashboard__actions flex flex--center">
                    <div
                        className="dashboard__filter flex flex--center"
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        Filter
                        <Filter />
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
            <article className="dashboard__content flex flex--column">
                <ul className="flex flex--column">
                    <li>
                        <Invoice />
                    </li>
                    <li>
                        <Invoice />
                    </li>
                    <li>
                        <Invoice />
                    </li>
                    <li>
                        <Invoice />
                    </li>
                    <li>
                        <Invoice />
                    </li>
                </ul>
            </article>

            <aside
                className={`${
                    !showFilters ? "display--none" : "display--block"
                }`}
            >
                <Filters showFilters={showFilters} setFilters={setFilters} />
            </aside>
        </section>
    );
};

export default Dashboard;
