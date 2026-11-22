function scaleRecipe(ingredients, scale) {
  return ingredients.map((item) => {
    const quantity = Number(item.match(/\d+(\.\d+)?/)[0]);
    const text = item.replace(/\d+(\.\d+)?/, "");
    const scaledQuantity = quantity * scale;
    return scaledQuantity + text;
  });
}

console.log(scaleRecipe(["4 T flour", "1.5 T sugar"], 2));
