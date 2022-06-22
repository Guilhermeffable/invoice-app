import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Calendar, Chevron, Close, Plus } from "../../assets/svg";
import Button from "../Button/index";
import DatePicker from "../Datepicker";
import Input from "../Input";
import "./_filter.scss";
import { useEffect } from "react";
import { isReturnStatement } from "typescript";

const Filters = ({
    showFilters,
    setFilters,
}: {
    showFilters: boolean;
    setFilters: Function;
}) => {
    const [showDatepicker, setShowDatepicker] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [showF, setShowF] = useState<boolean>(showFilters);

    useEffect(() => {
        setShowF(showFilters);
    }, [showFilters]);

    const show = () => {
        setShowDatepicker(!showDatepicker);
    };

    const selectDate = (dates: Date[]) => {
        setSelectedDate(dates.map((date) => date.toDateString()).join(" to "));
    };

    const clearDates = () => {
        setSelectedDate("");
    };

    const setShowFil = () => {
        setShowF((prevState) => !prevState);
        setFilters(showF);
    };

    let transformClass = "";
    let opacityClass = "";
    if (showF) {
        transformClass = "filter--show";
        opacityClass = "filter__cover--show";
    } else if (!showF) {
        transformClass = "filter--hide";
    }

    return (
        <Fragment>
            <div className={`${opacityClass} filter__cover`}>{""}</div>

            <form
                className={`${transformClass} background--filters  filter flex flex--start-Y flex--column background--white`}
            >
                <div className="filter__header flex flex--space-between">
                    <div className="filter__title">Filters</div>
                    <div
                        className="filter__close background--white box-shadow__icon flex flex--center border__radius--circle"
                        onClick={setShowFil}
                    >
                        <Plus className="icon icon__rotate--45 icon__stroke--default background--white " />
                    </div>
                </div>
                <div className="filter__content flex flex--center flex--column">
                    <div className="flex flex--column">
                        <label className="filter__label">Order by:</label>
                        <Input
                            placeholder="Select a field to order by"
                            icon={Chevron}
                        />
                    </div>
                    <div className="flex flex--column">
                        <label className="filter__label">Invoice state:</label>
                        <div className="filter__state flex">
                            <ul className="flex">
                                <li>
                                    <Button buttonStyle="pill" text="Paid" />
                                </li>
                                <li>
                                    <Button buttonStyle="pill" text="Pending" />
                                </li>
                                <li>
                                    <Button
                                        buttonStyle="pill"
                                        text="Canceled"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="filter__date flex flex--column">
                        <label className="filter__label">Invoice date:</label>
                        <div onClick={() => show()}>
                            <Input
                                placeholder={
                                    selectedDate === ""
                                        ? "Select date"
                                        : selectedDate
                                }
                                icon={Calendar}
                            />
                        </div>
                        <div
                            className={`filter__datepicker ${
                                showDatepicker
                                    ? "display--block"
                                    : "display--none"
                            }`}
                        >
                            <DatePicker
                                saveDates={selectDate}
                                clearDates={clearDates}
                            />
                        </div>
                    </div>

                    <div className="flex flex--column">
                        <label className="filter__label">Client:</label>
                        <Input placeholder="Type a client name" />
                    </div>
                    <Button
                        buttonStyle="primary"
                        type="button"
                        onClick={() => console.log("olá")}
                        text={"Search"}
                    />
                </div>
            </form>
        </Fragment>
    );
};

Filters.propTypes = {
    showFilters: PropTypes.bool.isRequired,
    setFilters: PropTypes.func.isRequired,
};

export default Filters;
