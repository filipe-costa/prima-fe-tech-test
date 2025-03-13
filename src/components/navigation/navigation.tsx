import { NavLink } from "react-router";
import styles from "./navigation.module.css";

// These paths, together with the routes could potentially be centralised via a configuration file
const urls = [
  {
    to: "/",
    name: "Recipes",
  },
  {
    to: "/favourites",
    name: "Favourites",
  },
];

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navLinks}>
        {urls.map((url) => (
          <li>
            <NavLink
              to={url.to}
              className={({ isActive }) => (isActive ? styles.isActive : "")}
            >
              {url.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
