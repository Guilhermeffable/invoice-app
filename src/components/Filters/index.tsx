import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Calendar, Chevron, Close, Plus } from "../../assets/svg";
import Button from "../Button/index";
import DatePicker from "../Datepicker";
import Input from "../Input";
import "./_filter.scss";
import { useEffect } from "react";
import { FilterValues, initialFilterValues } from "../../utils/utils";
import { FilterProps } from "./utils";
import Select from "../Select";

const Filters = ({ showFilters, setFilters, filterInvoices }: FilterProps) => {
  const [showDatepicker, setShowDatepicker] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [showF, setShowF] = useState<boolean>(showFilters);
  const [filterValues, setFilterValues] =
    useState<FilterValues>(initialFilterValues);

  useEffect(() => {
    setShowF(showFilters);
  }, [showFilters]);

  const show = () => {
    setShowDatepicker(!showDatepicker);
  };

  const selectDate = (dates: Date[]) => {
    let dateFrom: string = "";
    let dateTo: string = "";
    if (dates.length > 1) {
      dateFrom =
        dates[0].getUTCFullYear() +
        "-" +
        ("0" + (dates[0].getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + dates[0].getDate()).slice(-2);
      dateTo =
        dates[1].getUTCFullYear() +
        "-" +
        ("0" + (dates[1].getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + dates[1].getDate()).slice(-2);
    } else {
      dateFrom = dates[0].toISOString().slice(0, 10);
    }

    setFilterValues({
      ...filterValues,
      dateBeginning: dateFrom,
      dateEnd: dateTo,
    });

    setSelectedDate(dates.map((date) => date.toDateString()).join(" to "));
  };

  const setState = (state: string) => {
    setFilterValues({ ...filterValues, order: state });
  };

  const clearDates = () => {
    setSelectedDate("");
    setFilterValues({
      ...filterValues,
      dateBeginning: "",
      dateEnd: "",
    });
  };

  const setShowFil = () => {
    setShowF((prevState) => !prevState);
    setShowDatepicker(false);
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox" && checked) {
      setFilterValues({
        ...filterValues,
        [name]: value,
      });
    } else {
      setFilterValues({
        ...filterValues,
        [name]: "",
      });
    }
  };

  const setClientName = (name: string) => {
    if (name !== "") {
      setFilterValues({
        ...filterValues,
        clientName: name,
      });
    }
  };

  return (
    <Fragment>
      <div className={`${opacityClass} filter__cover`}>{""}</div>

      <form
        className={`${transformClass} background--filters  filter flex flex--start-Y flex--column background--white`}
        onSubmit={(event) => event.preventDefault()}
      >
        <fieldset>
          <div className="filter__header flex flex--space-between">
            <h3 className="filter__title">Filters</h3>
            <div
              className="filter__close background--white box-shadow__icon flex flex--center border__radius--circle"
              onClick={setShowFil}
            >
              <Plus className="icon transform__rotate--clockwise-45 icon__stroke--default background--white " />
            </div>
          </div>
          <div className="filter__content flex flex--center flex--column">
            <div className="flex flex--column">
              <label className="filter__label" htmlFor="order">
                Order by:
              </label>
              <Select
                defaultValue="InvoiceId - ASC"
                options={["InvoiceId - ASC", "InvoiceId - DESC"]}
                onSelect={(value: string) => setState(value)}
              />
            </div>
            <div className="flex flex--column">
              <label className="filter__label">Invoice state:</label>
              <div className="filter__state flex">
                <ul className="flex">
                  <li>
                    <Button
                      buttonStyle="pill"
                      text="Paid"
                      value="paid"
                      onChange={handleChange}
                      name="paidPill"
                      type="button"
                    />
                  </li>
                  <li>
                    <Button
                      buttonStyle="pill"
                      text="Pending"
                      value="pending"
                      onChange={handleChange}
                      name="pendingPill"
                      type="button"
                    />
                  </li>
                  <li>
                    <Button
                      buttonStyle="pill"
                      text="Canceled"
                      value="canceled"
                      onChange={handleChange}
                      name="canceledPill"
                      type="button"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="filter__date flex flex--column">
              <label className="filter__label" htmlFor="invoiceDate">
                Invoice date:
              </label>
              <div onClick={() => show()}>
                <Input
                  id="invoiceDate"
                  placeholder={
                    selectedDate === "" ? "Select date" : selectedDate
                  }
                  icon={Calendar}
                />
              </div>
              <div
                className={`filter__datepicker ${
                  !showDatepicker ? "display--none" : ""
                }`}
              >
                <DatePicker
                  saveDates={selectDate}
                  clearDates={clearDates}
                  multipleSelection={true}
                />
              </div>
            </div>

            <div className="flex flex--column">
              <label className="filter__label" htmlFor="clientName">
                Client:
              </label>
              <Input
                id="clientName"
                placeholder="Type a client name"
                onChange={setClientName}
              />
            </div>
            <div className="filter__submit flex flex--column flex--center">
              <Button
                buttonStyle="primary"
                type="button"
                onClick={() => filterInvoices(filterValues)}
                text={"Search"}
                name="search"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </Fragment>
  );
};

Filters.propTypes = {
  showFilters: PropTypes.bool.isRequired,
  setFilters: PropTypes.func.isRequired,
};

export default Filters;
