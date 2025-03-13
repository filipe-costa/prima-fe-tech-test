import { useParams } from "react-router";
import { Container } from "../../../components/container/container";
import { NotFound } from "../../../components/not-found/not-found";
import { Ingredients } from "../components/ingredients/ingredients";
import { Instructions } from "../components/instructions/instructions";
import { useRecipe } from "../hooks/context/use-recipe";
import styles from "./recipe-page.module.css";

export const RecipePage = () => {
  const { recipes } = useRecipe();
  const params = useParams<"pageId">() as { pageId: string };
  const recipe = recipes.find((r) => r.id === parseInt(params.pageId));

  return (
    <Container>
      <main className={styles.content}>
        {recipe ? (
          <>
            <img
              loading="lazy"
              className={styles.img}
              src={recipe.imageUrl}
              alt={recipe.description}
            />
            <h1>{recipe.name}</h1>
            <p>{recipe.description}</p>
            <p>Preparation time: {recipe.preparationTime} minutes.</p>
            <Ingredients ingredients={recipe.ingredients} />
            <Instructions instructions={recipe.instructions} />
          </>
        ) : (
          <NotFound message="No recipe found." />
        )}
      </main>
    </Container>
  );
};
