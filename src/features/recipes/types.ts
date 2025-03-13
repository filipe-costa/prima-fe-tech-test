export type RecipeListType = RecipeType[];

export type RecipeType = {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  preparationTime: number;
  isLiked?: boolean;
};
