class Recipe {
    constructor(title, servings, ingredients) {
        this.title = title;
        this.servings = servings;
        this.ingredients = ingredients;
        this.showRecipe = function() {
            console.log(this.title);
            console.log(`Serves: ${this.servings}`);
            console.log('Ingredients:')
            for (let i = 0; i < ingredients.length; i++) {
                console.log(`- ${this.ingredients[i]}`)
            }
            console.log('');
        }
    }
}

const guac = new Recipe(
    'Guacamole',
    4,
    ['3 Avocados', '1 Lime', '1 TSP Salt', '1/2 Cup Onion', '3 TBSP Cilantro', '2 Diced Tomatoes', '1 Pinch Ground Pepper']
)
guac.showRecipe()

const poke = new Recipe(
    'Poke',
    2,
    ['1 Avocado', '160g Fresh Tuna', '4 TBSP Light Soy Sauce', '2 TBSP Mirin', '1/2 TBSP Sesame Oil', '1/4 inch of Tubed Wasabi', '1/4 inch of Tubed Garlic', '1/2 TBSP White Sesame' ]
)
poke.showRecipe()
