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
        setShowFilters(!isFilter);
    };

    return (
        <section className="container dashboard">
            <div className="dashboard__header">
                <div className="dashboard__title">
                    <h1>Invoices - 5</h1>
                </div>
                <div className="dashboard__actions">
                    <div
                        className="dashboard__filter"
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        Filter
                        <Filter />
                    </div>
                    <Button
                        type={"primary"}
                        text="New Invoice"
                        icon={Plus}
                        primary={true}
                        onClick={() => console.log("olá")}
                    />
                </div>
            </div>
            <div className="dashboard__content">
                <Invoice />
                <Invoice />
                <Invoice />
                <Invoice />
                <Invoice />
                <Invoice />
            </div>

            <aside>
                <Filters showFilters={showFilters} setFilters={setFilters} />
            </aside>
        </section>
    );
};

export default Dashboard;
