import { RecipeListType } from "./types";

const recipes: RecipeListType = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    imageUrl:
      "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    ingredients: [
      "200g spaghetti",
      "100g pancetta",
      "2 large eggs",
      "50g Parmesan cheese",
      "Black pepper",
      "Salt",
      "1 clove garlic (optional)",
    ],
    instructions: [
      "Boil the spaghetti in salted water until al dente.",
      "Fry the pancetta until crispy in a pan with a little oil.",
      "Whisk eggs with grated Parmesan and black pepper.",
      "Drain pasta and mix it with the pancetta, then add egg mixture off the heat.",
      "Stir quickly to create a creamy sauce, serve immediately.",
    ],
    preparationTime: 20,
  },
  {
    id: 2,
    name: "Chicken Curry",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661780307431-c21fd96e4129?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A flavorful chicken curry cooked with aromatic spices and coconut milk.",
    ingredients: [
      "500g chicken breast",
      "1 onion",
      "2 cloves garlic",
      "1 tbsp curry powder",
      "1 tsp turmeric",
      "400ml coconut milk",
      "1 tomato",
      "Salt and pepper",
      "1 tbsp oil",
    ],
    instructions: [
      "Heat oil in a pan and sauté chopped onions and garlic.",
      "Add chicken pieces and cook until browned.",
      "Stir in curry powder, turmeric, and diced tomato.",
      "Pour in coconut milk and let simmer for 20 minutes.",
      "Season with salt and pepper, serve with rice.",
    ],
    preparationTime: 30,
  },
  {
    id: 3,
    name: "Avocado Toast",
    imageUrl:
      "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A simple and nutritious breakfast with mashed avocado on toasted bread.",
    ingredients: [
      "1 ripe avocado",
      "2 slices sourdough bread",
      "1/2 lemon",
      "Salt",
      "Black pepper",
      "Chili flakes (optional)",
    ],
    instructions: [
      "Toast the sourdough bread until golden brown.",
      "Mash the avocado with lemon juice, salt, and pepper.",
      "Spread the avocado mash onto the toast.",
      "Sprinkle with chili flakes if desired.",
      "Serve immediately.",
    ],
    preparationTime: 10,
  },
  {
    id: 4,
    name: "Chocolate Chip Cookies",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1673967816735-fcbeec26553a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Soft and chewy chocolate chip cookies, perfect for a sweet treat.",
    ingredients: [
      "200g all-purpose flour",
      "100g butter",
      "150g sugar",
      "1 egg",
      "1 tsp vanilla extract",
      "1/2 tsp baking soda",
      "100g chocolate chips",
      "Pinch of salt",
    ],
    instructions: [
      "Preheat oven to 180°C (350°F).",
      "Cream butter and sugar together, then mix in egg and vanilla.",
      "Sift in flour, baking soda, and salt, then fold in chocolate chips.",
      "Scoop dough onto a baking sheet and bake for 12-15 minutes.",
      "Let cool before serving.",
    ],
    preparationTime: 25,
  },
  {
    id: 5,
    name: "Caprese Salad",
    imageUrl:
      "https://images.unsplash.com/photo-1595587870672-c79b47875c6a?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A refreshing Italian salad with fresh tomatoes, mozzarella, and basil.",
    ingredients: [
      "2 large tomatoes",
      "200g fresh mozzarella",
      "Fresh basil leaves",
      "2 tbsp olive oil",
      "1 tbsp balsamic glaze",
      "Salt and pepper",
    ],
    instructions: [
      "Slice the tomatoes and mozzarella into equal pieces.",
      "Arrange on a plate, alternating layers with basil leaves.",
      "Drizzle with olive oil and balsamic glaze.",
      "Season with salt and pepper to taste.",
      "Serve immediately.",
    ],
    preparationTime: 10,
  },
];

export default recipes;
