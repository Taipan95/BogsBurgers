export enum INGREDIENT_TYPES {
	salad = "salad",
	cheese = "cheese",
	meat = "meat",
	bacon = "bacon"
}
export type IngredientTypes = keyof typeof INGREDIENT_TYPES;

export enum INGREDIENT_PRICES {
	"salad" = 0.5,
	"cheese" = 0.4,
	"meat" = 1.5,
	"bacon" = 0.6
}
export type IngredientPrices = keyof typeof INGREDIENT_PRICES;
