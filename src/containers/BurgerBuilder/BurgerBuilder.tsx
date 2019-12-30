import React, { useState, useEffect } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";

import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import { INGREDIENT_PRICES, IngredientTypes } from "../../types/types";
interface IBurgerBuilder {
  props?: any;
}

const BurgerBuilder = ({ props }: IBurgerBuilder) => {
  const [ingredients, setIngredients] = useState<any>({
    salad: 0,
    meat: 0,
    cheese: 3,
    bacon: 0
  });
  const disabledInfo = {
    ...ingredients
  };
  useEffect(() => {
    for (const key in ingredients) {
      if (ingredients[key] === undefined) {
        // setIngredients((ingredients[key] = 0));
        setIngredients((ingredients[key] = 0));
      }
      console.log(key, ingredients[key]);

      disabledInfo[key] = ingredients[key] === 0;
      console.log(key, disabledInfo[key]);
    }
  }, [ingredients, disabledInfo]);

  const [totalPrice, setTotalPrice] = useState(3);

  const addIngredient = (type: IngredientTypes) => {
    let oldCount = ingredients[type];
    if (!oldCount) {
      oldCount = 0;
    }
    const updatedCount = oldCount + 1;
    disabledInfo[type] = updatedCount <= 0;
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = updatedCount;
    setIngredients(updatedIngredients);

    setTotalPrice(totalPrice + INGREDIENT_PRICES[type]);
  };
  const removeIngredient = (type: IngredientTypes) => {
    const oldCount = ingredients[type];

    if (!oldCount) {
      const updatedIngredients = { ...ingredients };
      updatedIngredients[type] = 0;
      setIngredients(updatedIngredients);
      return;
    }

    const updatedCount = oldCount - 1;
    disabledInfo[type] = updatedCount <= 0;

    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = updatedCount;
    setIngredients(updatedIngredients);

    setTotalPrice(totalPrice - INGREDIENT_PRICES[type]);
  };

  return (
    <Aux>
      <Burger ingredients={ingredients} />
      <div>Price: {totalPrice.toPrecision(3)} €</div>
      <BuildControls
        add={addIngredient}
        remove={removeIngredient}
        disabled={disabledInfo}
      />
    </Aux>
  );
};
export default BurgerBuilder;
