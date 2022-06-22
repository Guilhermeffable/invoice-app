import React, { useState } from "react";
import { Theme } from "../../assets/svg";
import "./_navbar.scss";

const Navbar = () => {
    const [isLightTheme, setLightTheme] = useState<boolean>(true);

    const changeTheme = () => {
        setLightTheme(!isLightTheme);

        const htmlElement = document.documentElement;

        const theme = isLightTheme ? "light" : "dark";

        htmlElement.setAttribute("data-theme", theme);
    };

    return (
        <nav className="navbar flex flex--end-X">
            <Theme onClick={changeTheme} className="icon icon__fill--none" />
        </nav>
    );
};

export default Navbar;
