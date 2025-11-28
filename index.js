const recipes = [
  {
    name: "Margherita Pizza",
    description: "Classic Italian pizza with fresh mozzarella, basil, and tomato sauce.",
    difficulty: "Intermediate",
    cuisine: "Italian",
  
    ingredients: [
      "300g pizza dough",
      "200g crushed tomatoes",
      "250g fresh mozzarella",
      "Fresh basil leaves",
      "2 tbsp olive oil",
      "2 cloves garlic, minced"
    ]
  },

  {
    name: "Chicken Alfredo Pasta",
    description: "Creamy Alfredo pasta tossed with grilled chicken and parmesan.",
    difficulty: "Easy",
    cuisine: "American / Italian",

    ingredients: [
      "200g fettuccine pasta",
      "1 cup heavy cream",
      "1 cup grated parmesan",
      "1 chicken breast, sliced",
      "2 tbsp butter",
      "Salt & pepper"
    ]
  },

  {
    name: "Beef Stir Fry",
    description: "Quick Asian-style stir fry with beef, vegetables, and soy sauce.",
    difficulty: "Easy",
    cuisine: "Asian",
  
    ingredients: [
      "300g beef strips",
      "1 bell pepper",
      "1 onion",
      "2 tbsp soy sauce",
      "1 tbsp oyster sauce",
      "1 tsp ginger",
      "1 tbsp sesame oil"
    ]
  },

  {
    name: "Tacos Al Pastor",
    description: "Mexican tacos with marinated pork, pineapple, and coriander.",
    difficulty: "Intermediate",
    cuisine: "Mexican",

    ingredients: [
      "250g pork slices",
      "Soft corn tortillas",
      "Pineapple chunks",
      "Coriander",
      "1 onion",
      "Al pastor seasoning"
    ]
  },

  {
    name: "Vegetable Curry",
    description: "A warm Indian-style curry packed with mixed vegetables.",
    difficulty: "Intermediate",
    cuisine: "Indian",

    ingredients: [
      "1 potato",
      "1 carrot",
      "1 cup cauliflower",
      "1 cup coconut milk",
      "Curry powder",
      "1 tomato",
      "Salt & pepper"
    ]
  }
];

function generateRecipe(){
  var n = Math.floor(Math.random() * recipes.length);

    document.getElementById("recipe-card").innerHTML=`  <div class="recipe-card">

        <span class="tag intermediate">Intermediate</span>
        <span class="tag italian">Italian</span>

        <h2>${recipes[n].name}</h2>
        <p class="subtitle">${recipes[n].description}</p>

        <div class="warning">
            ⚠ Extended Preparation Time — This recipe needs more than 45 minutes.
        </div>

        <!-- TABS -->
        <div class="tabs">
            <button class="active">Ingredients</button>
            <button>Instructions</button>
            <button>Nutrition</button>
            <button>Chef’s Tips</button>
        </div>

        <!-- INGREDIENTS LIST -->
        <ul class="ingredients">
           ${recipes[n].ingredients}
        </ul>
<button onclick="generateRecipe()">try a new recipe</button>
    </div>`
}