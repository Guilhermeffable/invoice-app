import React from "react";
import "../../scss/tools/_container.scss";
import "./_dashboard.scss";
import { Filter } from "../../assets/svg";
import Invoice from "../../components/Invoice/invoice";
import PillButton from "../../components/Button/pillbutton";
import Filters from "../../components/Filters/filters";
import { Plus } from "../../assets/svg";

const Dashboard = () => {
    return (
        <section className="container dashboard">
            <div className="dashboard__header">
                <div className="dashboard__title">
                    <h1>Invoices - 5</h1>
                </div>
                <div className="dashboard__actions">
                    <div className="dashboard__filter">
                        Filter
                        <Filter />
                    </div>
                    <PillButton icon={Plus} />
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
                <Filters />
            </aside>
        </section>
    );
};

export default Dashboard;
