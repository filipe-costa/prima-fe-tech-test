import styles from "./card-image.module.css";

type CardImageProps = {
  url: string;
  alt: string;
};

export const CardImage = ({ url, alt }: CardImageProps) => {
  return (
    <img loading="lazy" src={url} alt={alt} className={styles.cardImage} />
  );
};
