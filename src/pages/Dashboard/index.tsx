import React from "react";
import "../../scss/tools/_container.scss";
import "./_dashboard.scss";
import { Filters } from "../../assets/svg";
import Invoice from "../../components/Invoice/invoice";

const Dashboard = () => {
    return (
        <section className="container dashboard">
            <div className="dashboard__header">
                <div className="dashboard__title">
                    <h1>Invoices - 5</h1>
                </div>
                <div className="dashboard__actions">
                    Filter
                    <Filters />
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
        </section>
    );
};

export default Dashboard;
