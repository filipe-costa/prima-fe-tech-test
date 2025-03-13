import { ChangeEventHandler } from "react";
import styles from "./search-field.module.css";

type SearchBarProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const SearchField = ({ value, onChange }: SearchBarProps) => {
  return (
    <input
      type="text"
      aria-label="search"
      className={styles.field}
      placeholder={"Search for a recipe..."}
      value={value}
      onChange={onChange}
    />
  );
};
