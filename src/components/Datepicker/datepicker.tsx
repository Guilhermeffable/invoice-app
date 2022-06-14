import React, { useState, useEffect } from "react";
import { Chevron } from "../../assets/svg";
import Button from "../Button/button";
import {
    getWeeks,
    getDaysInMonth,
    months,
    weekdays,
    intervalRecursive,
} from "./utilities";
import "./_datepicker.scss";

const DatePicker = () => {
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
            let test = activeIndexes.sort((a, b) => a - b);
            setIntervalIndexes(intervalRecursive(test[0], test[1]));
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

        setActiveIndexes([]);
        setIntervalIndexes([]);
    };

    const getPrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentYear(currentYear - 1);
            setCurrentMonth(11);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
        setActiveIndexes([]);
        setIntervalIndexes([]);
    };

    const selectDay = (index: number) => {
        setActiveIndexes([...activeIndexes, index]);

        console.log(activeIndexes);
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

    return (
        <div className="datepicker">
            <div className="datepicker__year">
                <div onClick={getPrevMonth}>
                    <Chevron style={{ transform: "rotate(90deg)" }} />
                </div>
                {`${months[currentMonth]} ${currentYear}`}
                <div onClick={getNextMonth}>
                    <Chevron style={{ transform: "rotate(-90deg)" }} />
                </div>
            </div>
            <div className="datepicker__weekdays">
                {weekdays.map((x, index) => (
                    <div key={index}>{x}</div>
                ))}
            </div>
            <div className="datepicker__weeks">
                {weeks.map((x, index) => (
                    <div
                        key={index}
                        onClick={() => selectDay(index)}
                        className={`${
                            intervalIndexes.includes(index)
                                ? "background--primary-02"
                                : ""
                        } datepicker__day`}
                    >
                        <div
                            className={`${
                                activeIndexes.includes(index)
                                    ? "background--active datepicker__day--active"
                                    : ""
                            }`}
                        >
                            {x}
                        </div>
                    </div>
                ))}
            </div>
            <div className="datepicker__footer">
                <Button text="Clear Dates" primary={false} />
                <Button text="Select Dates" primary={true} />
            </div>
        </div>
    );
};

export default DatePicker;
