import { ReactNode } from "react";
import styles from "./card-body.module.css";

export const CardBody = ({ children }: { children: ReactNode }) => {
  return <div className={styles.cardBody}>{children}</div>;
};
