function scaleRecipe(ingredients, scale) {                  // Declares a function that takes ingredient strings and a scale factor.
  return ingredients.map((item) => {                        // Returns map's new array; callback runs once per item and keeps input order.
    const quantity = Number(item.match(/\d+(\.\d+)?/)[0]);  // Regex finds the quantity; match()[0] gets it and Number converts it.
    const text = item.replace(/\d+(\.\d+)?/, "");           // Removes the quantity text, leaving the unit and ingredient unchanged.
    const scaledQuantity = quantity * scale;                // Multiplies the original quantity by the requested scale factor.
    return scaledQuantity + text;                           // Converts the number to text without padded zeros, then appends the unchanged text.
  });                                                       // Closes the callback and finishes the map call.
}                                                           // Closes the function definition.

console.log(scaleRecipe(["4 T flour", "1.5 T sugar"], 2));  // Example output: ["8 T flour", "3 T sugar"] is logged to the console.
