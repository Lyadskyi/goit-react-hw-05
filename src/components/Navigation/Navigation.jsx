import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <nav>
      <NavLink className={getNavLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={getNavLinkClass} to="/about">
        About
      </NavLink>
    </nav>
  );
}
