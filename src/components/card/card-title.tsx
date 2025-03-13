import styles from "./card-title.module.css";

export const CardTitle = ({ title }: { title: string }) => {
  return <p className={styles.cardTitle}>{title}</p>;
};
