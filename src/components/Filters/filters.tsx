import React from "react";
import { Close, Plus } from "../../assets/svg";
import Button from "../Button/button";
import PillButton from "../Button/pillbutton";
import DatePicker from "../Datepicker/datepicker";
import Input from "../Input/input";
import "./_filter.scss";

const Filters = () => {
    return (
        <div className="filter background--white">
            <div className="filter__header">
                <div className="filter__title">Filters</div>
                <div className="filter__close">
                    <Close />
                </div>
            </div>
            <div className="filter__content">
                <div className="filter__order">
                    <div className="filter__label">Order by:</div>
                    <Input placeholder="Select a field to order by" />
                </div>
                <div className="filter__order">
                    <div className="filter__label">Invoice state:</div>
                    <div className="filter__state">
                        <PillButton icon={Plus} />
                        <PillButton icon={Plus} />
                        <PillButton icon={Plus} />
                    </div>
                </div>
                <div className="filter__order">
                    <div className="filter__label">Invoice date:</div>
                    <div className="filter__state">
                        <Input placeholder="Select a date" />
                    </div>
                    <div className="filter__datepicker">
                        <DatePicker />
                    </div>
                </div>
                <div className="filter__order">
                    <div className="filter__label">Client:</div>
                    <div className="filter__state">
                        <Input placeholder="Type a client name" />
                    </div>
                </div>
                <Button
                    onClick={() => console.log("olá")}
                    primary={true}
                    text={"Search"}
                />
            </div>
        </div>
    );
};

export default Filters;
