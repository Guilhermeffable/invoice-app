import React from "react";
import { Plus } from "../../assets/svg";
import "./_button.scss";

const PillButton = () => {
    return (
        <div className="button__pill background--primary-01">
            <div className="button__icon">
                <Plus className="stroke--primary-01" />
            </div>
            <div className="button__text text--primary-03"> New Invoice</div>
        </div>
    );
};

export default PillButton;
