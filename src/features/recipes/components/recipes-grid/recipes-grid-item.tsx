import { Link } from "react-router";
import { Card } from "../../../../components/card/card";
import { CardBody } from "../../../../components/card/card-body";
import { CardImage } from "../../../../components/card/card-image";
import { CardText } from "../../../../components/card/card-text";
import { CardTitle } from "../../../../components/card/card-title";
import { RecipeType } from "../../types";
import styles from "./recipes-grid-item.module.css";
import { FavouriteIcon } from "./svg/favourite-icon";

type RecipeItemProps = {
  recipe: RecipeType;
  toggleFavourite: (recipe: RecipeType) => void;
};

export const RecipeGridItem = ({
  recipe,
  toggleFavourite,
}: RecipeItemProps) => {
  return (
    <li className={styles.gridItem}>
      <Link to={`/${recipe.id}`}>
        <Card>
          <div className={styles.icon}>
            <FavouriteIcon
              onClick={(event) => {
                event.preventDefault();
                toggleFavourite(recipe);
              }}
              isLiked={recipe.isLiked}
            />
          </div>
          <CardImage alt={recipe.name} url={recipe.imageUrl} />
          <CardBody>
            <CardTitle title={recipe.name} />
            <CardText text={recipe.description} />
          </CardBody>
        </Card>
      </Link>
    </li>
  );
};
