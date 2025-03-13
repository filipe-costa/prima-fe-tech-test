import { Container } from "../../../components/container/container";
import { NotFound } from "../../../components/not-found/not-found";
import { RecipesGrid } from "../components/recipes-grid/recipes-grid";
import { useRecipe } from "../hooks/context/use-recipe";
import styles from "./recipes-page.module.css";

export const FavouriteRecipesPage = () => {
  const { favourites, toggleFavourite } = useRecipe();

  return (
    <Container>
      <main className={styles.content}>
        <h1 className={styles.title}>Recipe Finder</h1>
        <section className={styles.section}>
          {favourites.length > 0 ? (
            <RecipesGrid
              recipes={favourites}
              toggleFavourite={toggleFavourite}
            />
          ) : (
            <NotFound message="You haven't favourited any recipes yet." />
          )}
        </section>
      </main>
    </Container>
  );
};
