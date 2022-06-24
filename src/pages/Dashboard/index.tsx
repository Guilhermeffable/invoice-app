import React, { useEffect, useState } from "react";
import "../../scss/tools/_container.scss";
import "./_dashboard.scss";
import { Filter } from "../../assets/svg";
import Invoice from "../../components/Invoice";
import Button from "../../components/Button/index";
import Filters from "../../components/Filters";
import { Plus } from "../../assets/svg";

const Dashboard = () => {
    const [showFilters, setShowFilters] = useState<boolean>(false);
    const [isDesktop, setDesktop] = useState(window.innerWidth >= 600);

    const updateMedia = () => {
        setDesktop(window.innerWidth >= 600);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    const setFilters = (isFilter: boolean) => {
        setTimeout(() => setShowFilters(!isFilter), 300);
    };

    return (
        <section className="container dashboard">
            <header className="dashboard__header flex flex--column flex--start">
                <div className="dashboard__title">
                    <h1>Invoices - 5</h1>
                </div>
                <div className="dashboard__actions flex flex--space-between">
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
            <article className="dashboard__content flex flex--column">
                <ul className="flex flex--column">
                    <li>
                        <Invoice isDesktop={isDesktop} />
                    </li>
                    <li>
                        <Invoice isDesktop={isDesktop} />
                    </li>
                    <li>
                        <Invoice isDesktop={isDesktop} />
                    </li>
                    <li>
                        <Invoice isDesktop={isDesktop} />
                    </li>
                    <li>
                        <Invoice isDesktop={isDesktop} />
                    </li>
                </ul>
            </article>

            <aside
                className={`${
                    !showFilters ? "display--none" : "display--block"
                } `}
            >
                <Filters showFilters={showFilters} setFilters={setFilters} />
            </aside>
        </section>
    );
};

export default Dashboard;
