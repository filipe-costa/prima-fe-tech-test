import { MouseEventHandler, useMemo, useState } from "react";
import styles from "./favourite-icon.module.css";

type FavouriteIconProps = {
  isLiked?: boolean;
  onClick: MouseEventHandler<SVGSVGElement>;
};

export const FavouriteIcon = ({
  isLiked = false,
  onClick,
}: FavouriteIconProps) => {
  const [isFavourite, setIsFavourite] = useState(isLiked);

  const className = useMemo(
    () => [styles.heartIcon, isFavourite ? styles.favourite : ""].join(" "),
    [isFavourite]
  );

  const handleClick: MouseEventHandler<SVGSVGElement> = (event) => {
    setIsFavourite((v) => !v);
    onClick(event);
  };

  return (
    <svg
      className={className}
      role="button"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={handleClick}
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
};
