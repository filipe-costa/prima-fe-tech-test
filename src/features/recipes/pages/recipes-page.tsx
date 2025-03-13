import { ChangeEvent, useMemo, useState } from "react";
import { Container } from "../../../components/container/container";
import { NotFound } from "../../../components/not-found/not-found";
import { RecipesGrid } from "../components/recipes-grid/recipes-grid";
import { SearchField } from "../components/search-field/search-field";
import { useRecipe } from "../hooks/context/use-recipe";
import styles from "./recipes-page.module.css";

const recipeExists = (terms: string[], text: string) => {
  return terms.filter((value) => text.includes(value)).length > 0;
};

const recipeWithKeywordsExists = (terms: string[], keywords: string[]) => {
  return (
    keywords.filter((keyword) =>
      recipeExists(terms, keyword.toLocaleLowerCase())
    ).length > 0
  );
};

export const RecipesPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { recipes, toggleFavourite } = useRecipe();

  const filteredRecipes = useMemo(() => {
    const terms = searchTerm
      .split(" ")
      .map((term) => term.toLocaleLowerCase())
      .filter(Boolean);

    if (terms.length === 0 || searchTerm.length < 3) {
      return recipes;
    }

    return recipes.filter(
      (recipe) =>
        recipeExists(terms, recipe.name.toLocaleLowerCase()) ||
        recipeExists(terms, recipe.description.toLocaleLowerCase()) ||
        recipeWithKeywordsExists(terms, recipe.ingredients)
    );
  }, [recipes, searchTerm]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container>
      <main className={styles.content}>
        <h1 className={styles.title}>Recipe Finder</h1>
        <section className={styles.section}>
          <SearchField value={searchTerm} onChange={handleSearch} />
          {filteredRecipes.length > 0 ? (
            <RecipesGrid
              recipes={filteredRecipes}
              toggleFavourite={toggleFavourite}
            />
          ) : (
            <NotFound message="No recipes found." />
          )}
        </section>
      </main>
    </Container>
  );
};
