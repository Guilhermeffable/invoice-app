import React, { useState } from "react";
import PropTypes from "prop-types";
import { Close } from "../../assets/svg";
import Button from "../Button/button";
import PillButton from "../Button/pillbutton";
import DatePicker from "../Datepicker/datepicker";
import Input from "../Input/input";
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

    debugger;

    let test = "";
    if (showF) {
        test = "display--block";
    } else if (!showF) {
        test = "display--none";
    }

    return (
        <div className={`${test}  filter background--white`}>
            <div className="filter__header">
                <div className="filter__title">Filters</div>
                <div className="filter__close" onClick={setShowFil}>
                    <Close className="background--white " />
                </div>
            </div>
            <div className="filter__content">
                <div>
                    <div className="filter__label">Order by:</div>
                    <Input placeholder="Select a field to order by" />
                </div>
                <div>
                    <div className="filter__label">Invoice state:</div>
                    <div className="filter__state">
                        <PillButton text="Paid" primary={false} />
                        <PillButton text="Canceled" primary={false} />
                        <PillButton text="Pending" primary={false} />
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
                <div>
                    <div className="filter__label">Client:</div>
                    <div>
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

Filters.propTypes = {
    showFilters: PropTypes.bool.isRequired,
    setFilters: PropTypes.func.isRequired,
};

export default Filters;
