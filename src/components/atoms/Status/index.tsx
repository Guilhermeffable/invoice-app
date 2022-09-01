import React from "react";
import PropTypes from "prop-types";
import "../../../assets/styles/components/atoms/_status.scss";

const Status = ({ type }: { type: string }) => {
  let backgroundClass = "";
  let textClass = "";
  let statusText = "";

  switch (type) {
    case "paid":
      backgroundClass = "background--success";
      textClass = "text--success";
      statusText = "Paid";
      break;

    case "pending":
      backgroundClass = "background--warning";
      textClass = "text--warning";
      statusText = "Pending";
      break;

    case "canceled":
      backgroundClass = "background--danger";
      textClass = "text--danger";
      statusText = "Canceled";
      break;
  }

  return (
    <div className={`status flex flex--center ${textClass}`}>
      <span className={`status__icon ${backgroundClass}`}></span>
      <p>{statusText}</p>
    </div>
  );
};

Status.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Status;
