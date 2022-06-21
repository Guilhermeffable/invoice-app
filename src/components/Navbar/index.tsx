import React from "react";
import { Theme } from "../../assets/svg";
import "./_navbar.scss";

const Navbar = () => {
    return (
        <nav className="navbar flex flex--end-X">
            <Theme className="icon icon__fill--none" />
        </nav>
    );
};

export default Navbar;
