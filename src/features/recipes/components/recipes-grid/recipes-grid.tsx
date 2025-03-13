import { RecipeListType, RecipeType } from "../../types";
import { RecipeGridItem } from "./recipes-grid-item";
import styles from "./recipes-grid.module.css";

type RecipeGridProps = {
  recipes: RecipeListType;
  toggleFavourite: (recipe: RecipeType) => void;
};

export const RecipesGrid = ({ recipes, toggleFavourite }: RecipeGridProps) => {
  return (
    <ul className={styles.gridContainer}>
      {recipes.map((recipe) => (
        <RecipeGridItem
          key={recipe.id}
          recipe={recipe}
          toggleFavourite={toggleFavourite}
        />
      ))}
    </ul>
  );
};
