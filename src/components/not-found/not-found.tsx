import styles from "./not-found.module.css";

type NotFoundProps = {
  message: string;
};

export const NotFound = ({ message }: NotFoundProps) => {
  return (
    <div className={styles.notFound}>
      <p> {message} </p>
    </div>
  );
};
