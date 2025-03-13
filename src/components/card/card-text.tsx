import styles from "./card-text.module.css";

export const CardText = ({ text }: { text: string }) => {
  return <p className={styles.cardText}>{text}</p>;
};
