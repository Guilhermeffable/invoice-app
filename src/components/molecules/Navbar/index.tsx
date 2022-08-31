import React, { useEffect, useState } from "react";
import { DarkTheme, LightTheme } from "../../../assets/svg";
import "./_navbar.scss";

const Navbar = () => {
  const [isLightTheme, setLightTheme] = useState<boolean>(true);

  useEffect(() => {
    const htmlElement = document.documentElement;

    const theme = isLightTheme ? "light" : "dark";

    htmlElement.setAttribute("data-theme", theme);
  }, [isLightTheme]);

  const changeTheme = () => {
    setLightTheme(!isLightTheme);
  };

  let icon = (
    <button className="background--none" onClick={changeTheme}>
      <DarkTheme className="icon icon__fill--none" />
    </button>
  );

  if (!isLightTheme) {
    icon = (
      <button className="background--none" onClick={changeTheme}>
        <LightTheme className="icon icon__fill--none icon__fill--background-primary" />
      </button>
    );
  }
  return <nav className="navbar flex flex--end-X">{icon}</nav>;
};

export default Navbar;
