let recipe = {
    'title': 'Recipe for Guacamole',
    'servings': 4,
    'ingredients': ['-3 Avacados', '-1 Lime', '-1 Teaspoon of Salt', '-1/2 Cup of Onion', '-3 Tablespoons Cilantro', '-2 Diced Tomatoes', '-1 Teaspoon Garlic', '-1 Pinch of Ground Pepper']
};

console.log(recipe.title);
console.log('Serves: ' + recipe.servings);
console.log('Ingredients:');
for (let i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}