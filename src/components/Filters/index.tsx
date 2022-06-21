import React, { useState } from "react";
import PropTypes from "prop-types";
import { Calendar, Chevron, Close } from "../../assets/svg";
import Button from "../Button/index";
import DatePicker from "../Datepicker";
import Input from "../Input";
import "./_filter.scss";
import { useEffect } from "react";

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
        setSelectedDate(dates.map((x) => x.toDateString()).join(" - "));
    };

    const clearDates = () => {
        setSelectedDate("");
    };

    const setShowFil = () => {
        setShowF((prevState) => !prevState);
        setFilters(showF);
    };

    let transformClass = "";
    if (showF) {
        transformClass = "filter--show";
    } else if (!showF) {
        transformClass = "";
    }

    return (
        <div
            className={`${transformClass}  filter flex flex--start-Y flex--column background--white`}
        >
            <div className="filter__header flex flex--space-between">
                <div className="filter__title">Filters</div>
                <div className="filter__close" onClick={setShowFil}>
                    <Close className="icon background--white " />
                </div>
            </div>
            <div className="filter__content flex flex--center flex--column">
                <div className="flex flex--column">
                    <div className="filter__label">Order by:</div>
                    <Input
                        placeholder="Select a field to order by"
                        icon={Chevron}
                    />
                </div>
                <div className="flex flex--column">
                    <div className="filter__label">Invoice state:</div>
                    <div className="filter__state flex">
                        <ul className="flex">
                            <li>
                                <Button type="pill" text="Paid" />
                            </li>
                            <li>
                                <Button type="pill" text="Pending" />
                            </li>
                            <li>
                                <Button type="pill" text="Canceled" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="filter__date">
                    <div className="filter__label">Invoice date:</div>
                    <div>
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
                </div>
                <div className="flex flex--column">
                    <div className="filter__label">Client:</div>
                    <div>
                        <Input placeholder="Type a client name" />
                    </div>
                </div>
                <Button
                    type="primary"
                    onClick={() => console.log("olá")}
                    text={"Search"}
                />
            </div>
        </div>
    );
};

Filters.propTypes = {
    showFilters: PropTypes.bool.isRequired,
    setFilters: PropTypes.func.isRequired,
};

export default Filters;
