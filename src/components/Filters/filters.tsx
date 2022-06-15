import React from "react";
import { Close } from "../../assets/svg";
import "./_filters.scss";

const Filters = () => {
    return (
        <div className="filter background--primary-03">
            <div className="filter__header">
                <div className="filter__title">Filters</div>
                <div className="filter__close">
                    <Close />
                </div>
            </div>
        </div>
    );
};

export default Filters;
