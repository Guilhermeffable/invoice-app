import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Chevron } from "../../assets/svg";
import Button from "../Button/index";
import {
    getWeeks,
    getDaysInMonth,
    months,
    weekdays,
    intervalRecursive,
    getDaysIndexes,
} from "./utilities";
import "./_datepicker.scss";

const DatePicker = ({
    saveDates,
    clearDates,
}: {
    saveDates: Function;
    clearDates: Function;
}) => {
    const [currentMonth, setCurrentMonth] = useState<number>(
        new Date().getMonth()
    );
    const [currentYear, setCurrentYear] = useState<number>(
        new Date().getFullYear()
    );
    const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
    const [intervalIndexes, setIntervalIndexes] = useState<number[]>([]);

    useEffect(() => {
        if (activeIndexes.length === 2) {
            if (activeIndexes[0] !== activeIndexes[1]) {
                const sortedIndexes = activeIndexes.sort((a, b) => a - b);
                setIntervalIndexes(
                    intervalRecursive(sortedIndexes[0], sortedIndexes[1])
                );
            } else {
                setActiveIndexes([]);
            }
        }

        if (activeIndexes.length > 2) {
            setActiveIndexes([]);
            setIntervalIndexes([]);
        }
    }, [activeIndexes]);

    const januaryIndex = 0;
    const decemberIndex = 11;

    const getNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentYear(currentYear + 1);
            setCurrentMonth(0);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const getPrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentYear(currentYear - 1);
            setCurrentMonth(11);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const selectDay = (index: number): void => {
        setActiveIndexes([...activeIndexes, index]);
    };

    const clearIndexes = () => {
        setActiveIndexes([]);
        setIntervalIndexes([]);
    };

    const clear = () => {
        clearIndexes();
        clearDates();
    };

    const prevMonthDates = getDaysInMonth(
        currentMonth === januaryIndex ? decemberIndex : currentMonth - 1,
        currentMonth === januaryIndex ? currentYear - 1 : currentYear
    );

    const currentMonthDates = getDaysInMonth(currentMonth, currentYear);

    const nextMonthDates = getDaysInMonth(
        currentMonth === decemberIndex ? januaryIndex : currentMonth + 1,
        currentMonth === decemberIndex ? currentYear + 1 : currentYear
    );

    const weeks = getWeeks(prevMonthDates, currentMonthDates, nextMonthDates);

    const selectDates = () => {
        let dateArr: Date[] = [];

        const firstIndex = activeIndexes[0] - currentMonthDates[0].getDay();
        let firstDate = currentMonthDates[firstIndex];

        if (activeIndexes.length > 1) {
            let lastDate =
                currentMonthDates[
                    activeIndexes[1] - currentMonthDates[0].getDay()
                ];

            dateArr = [firstDate, lastDate];
        } else {
            dateArr = [firstDate];
        }

        saveDates(dateArr);
    };

    return (
        <div className="datepicker background--tertiary box-shadow">
            <div className="datepicker__year flex flex--space-between">
                <button
                    className="background--tertiary"
                    type="button"
                    onClick={getPrevMonth}
                >
                    <Chevron className="icon__fill--background-primary transform__rotate--clockwise-90" />
                </button>
                {`${months[currentMonth]} ${currentYear}`}
                <button
                    className="background--tertiary"
                    type="button"
                    onClick={getNextMonth}
                >
                    <Chevron className="icon__fill--background-primary  transform__rotate--anticlockwise-90" />
                </button>
            </div>
            <ul className="datepicker__weekdays flex flex--space-between">
                {weekdays.map((weekday, index) => (
                    <li key={index}>
                        <p>{weekday}</p>
                    </li>
                ))}
            </ul>

            <ul className="datepicker__weeks flex flex--space-between flex--wrap">
                {weeks.map((day, index) => (
                    <li
                        key={index}
                        onClick={() => selectDay(index)}
                        className={`${
                            intervalIndexes.includes(index)
                                ? "datepicker__day--selected"
                                : ""
                        } ${
                            activeIndexes[0] === index &&
                            activeIndexes.length > 1
                                ? "datepicker__day--first"
                                : activeIndexes[1] === index
                                ? "datepicker__day--second"
                                : ""
                        } datepicker__day flex flex--center`}
                    >
                        <p
                            className={`${
                                activeIndexes.includes(index)
                                    ? "background__main--primary datepicker__day--active flex flex--center text--white"
                                    : ""
                            }`}
                        >
                            {day}
                        </p>
                    </li>
                ))}
            </ul>

            <div className="datepicker__footer flex flex--center">
                <Button
                    type="button"
                    buttonStyle={"secondary"}
                    text="Clear Dates"
                    onClick={clear}
                    name="clearDates"
                />
                <Button
                    type="button"
                    buttonStyle={"primary"}
                    text="Select Dates"
                    onClick={selectDates}
                    name="selectDates"
                />
            </div>
        </div>
    );
};

DatePicker.propTypes = {
    saveDates: PropTypes.func.isRequired,
    clearDates: PropTypes.func.isRequired,
};

export default DatePicker;
