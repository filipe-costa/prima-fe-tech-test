type IngredientsProps = {
  ingredients: string[];
};

export const Ingredients = ({ ingredients }: IngredientsProps) => {
  return (
    <div>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, id) => (
          <li key={`ingredient-${id}`}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};
