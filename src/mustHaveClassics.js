export const mustHaveClassics = [
  {
    id: "classic-boulevardier",
    sourceId: "classic-boulevardier",
    name: "Boulevardier",
    category: "Classic Cocktail",
    alcoholic: "Alcoholic",
    glass: "Rocks glass",
    instructions: "Stir bourbon, Campari, and sweet vermouth with ice. Strain over fresh ice and garnish with an orange twist.",
    ingredients: ["Bourbon", "Campari", "Sweet Vermouth"],
    ingredientDetails: [
      { name: "Bourbon", measure: "1 1/2 oz" },
      { name: "Campari", measure: "1 oz" },
      { name: "Sweet Vermouth", measure: "1 oz" }
    ],
    flavors: ["Bitter", "Sweet", "Bold"],
    moods: ["Sophisticated", "After Work"],
    seasons: ["Fall", "Winter", "Dinner Party"],
    popular: false
  },
  {
    id: "classic-vieux-carre",
    sourceId: "classic-vieux-carre",
    name: "Vieux Carre",
    aliases: ["Vieux Carré"],
    category: "Classic Cocktail",
    alcoholic: "Alcoholic",
    glass: "Rocks glass",
    instructions: "Stir rye, cognac, sweet vermouth, Benedictine, and bitters with ice. Strain over ice and garnish with a lemon twist.",
    ingredients: ["Rye Whiskey", "Cognac", "Sweet Vermouth", "Benedictine", "Angostura Bitters", "Peychaud's Bitters"],
    ingredientDetails: [
      { name: "Rye Whiskey", measure: "3/4 oz" },
      { name: "Cognac", measure: "3/4 oz" },
      { name: "Sweet Vermouth", measure: "3/4 oz" },
      { name: "Benedictine", measure: "1 tsp" },
      { name: "Angostura Bitters", measure: "2 dashes" },
      { name: "Peychaud's Bitters", measure: "2 dashes" }
    ],
    flavors: ["Bold", "Herbal", "Sweet"],
    moods: ["Sophisticated", "Late Night"],
    seasons: ["Fall", "Winter"],
    popular: false
  },
  {
    id: "classic-last-word",
    sourceId: "classic-last-word",
    name: "Last Word",
    category: "Classic Cocktail",
    alcoholic: "Alcoholic",
    glass: "Coupe glass",
    instructions: "Shake gin, green Chartreuse, maraschino liqueur, and lime juice with ice. Strain into a chilled coupe.",
    ingredients: ["Gin", "Green Chartreuse", "Maraschino Liqueur", "Lime Juice"],
    ingredientDetails: [
      { name: "Gin", measure: "3/4 oz" },
      { name: "Green Chartreuse", measure: "3/4 oz" },
      { name: "Maraschino Liqueur", measure: "3/4 oz" },
      { name: "Lime Juice", measure: "3/4 oz" }
    ],
    flavors: ["Herbal", "Sour", "Citrusy"],
    moods: ["Adventurous", "Sophisticated"],
    seasons: ["Spring", "Summer"],
    popular: false
  },
  {
    id: "classic-paper-plane",
    sourceId: "classic-paper-plane",
    name: "Paper Plane",
    category: "Modern Classic",
    alcoholic: "Alcoholic",
    glass: "Coupe glass",
    instructions: "Shake bourbon, Aperol, Amaro Nonino, and lemon juice with ice. Strain into a chilled coupe.",
    ingredients: ["Bourbon", "Aperol", "Amaro Nonino", "Lemon Juice"],
    ingredientDetails: [
      { name: "Bourbon", measure: "3/4 oz" },
      { name: "Aperol", measure: "3/4 oz" },
      { name: "Amaro Nonino", measure: "3/4 oz" },
      { name: "Lemon Juice", measure: "3/4 oz" }
    ],
    flavors: ["Bitter", "Sour", "Refreshing"],
    moods: ["Social", "Adventurous"],
    seasons: ["Spring", "Fall"],
    popular: false
  },
  {
    id: "classic-corpse-reviver-no-2",
    sourceId: "classic-corpse-reviver-no-2",
    name: "Corpse Reviver No. 2",
    aliases: ["Corpse Reviver 2", "Corpse Reviver No 2"],
    category: "Classic Cocktail",
    alcoholic: "Alcoholic",
    glass: "Coupe glass",
    instructions: "Rinse a chilled coupe with absinthe. Shake gin, Cointreau, Lillet Blanc, and lemon juice with ice, then strain into the glass.",
    ingredients: ["Gin", "Cointreau", "Lillet Blanc", "Lemon Juice", "Absinthe"],
    ingredientDetails: [
      { name: "Gin", measure: "3/4 oz" },
      { name: "Cointreau", measure: "3/4 oz" },
      { name: "Lillet Blanc", measure: "3/4 oz" },
      { name: "Lemon Juice", measure: "3/4 oz" },
      { name: "Absinthe", measure: "Rinse" }
    ],
    flavors: ["Citrusy", "Herbal", "Refreshing"],
    moods: ["Brunch", "Sophisticated"],
    seasons: ["Spring", "Summer"],
    popular: false
  },
  {
    id: "classic-aperol-spritz",
    sourceId: "classic-aperol-spritz",
    name: "Aperol Spritz",
    category: "Spritz",
    alcoholic: "Alcoholic",
    glass: "Wine glass",
    instructions: "Build Aperol and prosecco over ice in a wine glass. Top with soda water and garnish with an orange slice.",
    ingredients: ["Aperol", "Prosecco", "Soda Water", "Orange"],
    ingredientDetails: [
      { name: "Aperol", measure: "2 oz" },
      { name: "Prosecco", measure: "3 oz" },
      { name: "Soda Water", measure: "1 oz" },
      { name: "Orange", measure: "Garnish" }
    ],
    flavors: ["Bitter", "Light", "Refreshing"],
    moods: ["Social", "Relaxed"],
    seasons: ["Summer", "Poolside"],
    popular: false
  },
  {
    id: "classic-singapore-sling",
    sourceId: "classic-singapore-sling",
    name: "Singapore Sling",
    category: "Tiki / Tropical",
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions: "Shake all ingredients except soda with ice. Strain into an ice-filled highball, top with soda water, and garnish with pineapple and cherry.",
    ingredients: ["Gin", "Cherry Heering", "Cointreau", "Benedictine", "Pineapple Juice", "Lime Juice", "Grenadine", "Angostura Bitters", "Soda Water"],
    ingredientDetails: [
      { name: "Gin", measure: "1 1/2 oz" },
      { name: "Cherry Heering", measure: "1/2 oz" },
      { name: "Cointreau", measure: "1/4 oz" },
      { name: "Benedictine", measure: "1/4 oz" },
      { name: "Pineapple Juice", measure: "4 oz" },
      { name: "Lime Juice", measure: "1/2 oz" },
      { name: "Grenadine", measure: "1/3 oz" },
      { name: "Angostura Bitters", measure: "1 dash" },
      { name: "Soda Water", measure: "Top" }
    ],
    flavors: ["Fruity", "Tropical", "Refreshing"],
    moods: ["Adventurous", "Social"],
    seasons: ["Summer", "Poolside"],
    popular: false
  },
  {
    id: "classic-hurricane",
    sourceId: "classic-hurricane",
    name: "Hurricane",
    category: "Tiki / Tropical",
    alcoholic: "Alcoholic",
    glass: "Hurricane glass",
    instructions: "Shake rums, passion fruit syrup, lemon juice, and grenadine with ice. Strain into a hurricane glass over fresh ice.",
    ingredients: ["Light Rum", "Dark Rum", "Passion Fruit Syrup", "Lemon Juice", "Grenadine"],
    ingredientDetails: [
      { name: "Light Rum", measure: "2 oz" },
      { name: "Dark Rum", measure: "2 oz" },
      { name: "Passion Fruit Syrup", measure: "1 oz" },
      { name: "Lemon Juice", measure: "1 oz" },
      { name: "Grenadine", measure: "1/2 oz" }
    ],
    flavors: ["Fruity", "Tropical", "Sweet"],
    moods: ["Festive", "Beachy"],
    seasons: ["Summer", "Poolside"],
    popular: false
  },
  {
    id: "classic-painkiller",
    sourceId: "classic-painkiller",
    name: "Painkiller",
    category: "Tiki / Tropical",
    alcoholic: "Alcoholic",
    glass: "Tiki mug",
    instructions: "Shake rum, pineapple juice, orange juice, and cream of coconut with ice. Pour into a glass over crushed ice and garnish with nutmeg.",
    ingredients: ["Dark Rum", "Pineapple Juice", "Orange Juice", "Cream of Coconut", "Nutmeg"],
    ingredientDetails: [
      { name: "Dark Rum", measure: "2 oz" },
      { name: "Pineapple Juice", measure: "4 oz" },
      { name: "Orange Juice", measure: "1 oz" },
      { name: "Cream of Coconut", measure: "1 oz" },
      { name: "Nutmeg", measure: "Garnish" }
    ],
    flavors: ["Creamy", "Tropical", "Sweet"],
    moods: ["Beachy", "Relaxed"],
    seasons: ["Summer", "Poolside"],
    popular: false
  },
  {
    id: "classic-blue-hawaiian",
    sourceId: "classic-blue-hawaiian",
    name: "Blue Hawaiian",
    category: "Tiki / Tropical",
    alcoholic: "Alcoholic",
    glass: "Hurricane glass",
    instructions: "Shake rum, blue curacao, pineapple juice, cream of coconut, and lemon juice with ice. Strain over crushed ice.",
    ingredients: ["Light Rum", "Blue Curacao", "Pineapple Juice", "Cream of Coconut", "Lemon Juice"],
    ingredientDetails: [
      { name: "Light Rum", measure: "1 1/2 oz" },
      { name: "Blue Curacao", measure: "3/4 oz" },
      { name: "Pineapple Juice", measure: "2 oz" },
      { name: "Cream of Coconut", measure: "3/4 oz" },
      { name: "Lemon Juice", measure: "1/2 oz" }
    ],
    flavors: ["Tropical", "Creamy", "Sweet"],
    moods: ["Beachy", "Festive"],
    seasons: ["Summer", "Poolside"],
    popular: false
  },
  {
    id: "classic-brandy-alexander",
    sourceId: "classic-brandy-alexander",
    name: "Brandy Alexander",
    category: "Classic Cocktail",
    alcoholic: "Alcoholic",
    glass: "Coupe glass",
    instructions: "Shake brandy, creme de cacao, and cream with ice. Strain into a chilled coupe and garnish with grated nutmeg.",
    ingredients: ["Brandy", "Creme de Cacao", "Cream", "Nutmeg"],
    ingredientDetails: [
      { name: "Brandy", measure: "1 oz" },
      { name: "Creme de Cacao", measure: "1 oz" },
      { name: "Cream", measure: "1 oz" },
      { name: "Nutmeg", measure: "Garnish" }
    ],
    flavors: ["Creamy", "Sweet"],
    moods: ["Cozy", "Romantic"],
    seasons: ["Winter", "Holiday"],
    popular: false
  },
  {
    id: "classic-sex-on-the-beach",
    sourceId: "classic-sex-on-the-beach",
    name: "Sex on the Beach",
    category: "Highball",
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions: "Build vodka, peach schnapps, orange juice, and cranberry juice over ice. Stir gently.",
    ingredients: ["Vodka", "Peach Schnapps", "Orange Juice", "Cranberry Juice"],
    ingredientDetails: [
      { name: "Vodka", measure: "1 1/2 oz" },
      { name: "Peach Schnapps", measure: "1/2 oz" },
      { name: "Orange Juice", measure: "2 oz" },
      { name: "Cranberry Juice", measure: "2 oz" }
    ],
    flavors: ["Fruity", "Sweet", "Refreshing"],
    moods: ["Social", "Beachy"],
    seasons: ["Summer", "Poolside"],
    popular: false
  },
  {
    id: "classic-bay-breeze",
    sourceId: "classic-bay-breeze",
    name: "Bay Breeze",
    aliases: ["Hawaiian Sea Breeze"],
    category: "Highball",
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions: "Build vodka, cranberry juice, and pineapple juice over ice. Stir gently.",
    ingredients: ["Vodka", "Cranberry Juice", "Pineapple Juice"],
    ingredientDetails: [
      { name: "Vodka", measure: "1 1/2 oz" },
      { name: "Cranberry Juice", measure: "3 oz" },
      { name: "Pineapple Juice", measure: "1 1/2 oz" }
    ],
    flavors: ["Fruity", "Refreshing"],
    moods: ["Relaxed", "Beachy"],
    seasons: ["Summer", "Poolside"],
    popular: false
  },
  {
    id: "classic-rob-roy",
    sourceId: "classic-rob-roy",
    name: "Rob Roy",
    category: "Classic Cocktail",
    alcoholic: "Alcoholic",
    glass: "Coupe glass",
    instructions: "Stir scotch, sweet vermouth, and bitters with ice. Strain into a chilled coupe and garnish with a cherry.",
    ingredients: ["Scotch", "Sweet Vermouth", "Angostura Bitters"],
    ingredientDetails: [
      { name: "Scotch", measure: "2 oz" },
      { name: "Sweet Vermouth", measure: "3/4 oz" },
      { name: "Angostura Bitters", measure: "2 dashes" }
    ],
    flavors: ["Bold", "Sweet", "Herbal"],
    moods: ["Sophisticated", "After Work"],
    seasons: ["Fall", "Winter"],
    popular: false
  },
  {
    id: "classic-bloody-mary",
    sourceId: "classic-bloody-mary",
    name: "Bloody Mary",
    category: "Brunch Cocktail",
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions: "Roll vodka, tomato juice, lemon juice, Worcestershire, hot sauce, salt, and pepper with ice. Strain or pour into an ice-filled glass and garnish.",
    ingredients: ["Vodka", "Tomato Juice", "Lemon Juice", "Worcestershire Sauce", "Hot Sauce", "Celery Salt", "Black Pepper"],
    ingredientDetails: [
      { name: "Vodka", measure: "1 1/2 oz" },
      { name: "Tomato Juice", measure: "3 oz" },
      { name: "Lemon Juice", measure: "1/2 oz" },
      { name: "Worcestershire Sauce", measure: "2 dashes" },
      { name: "Hot Sauce", measure: "2 dashes" },
      { name: "Celery Salt", measure: "Pinch" },
      { name: "Black Pepper", measure: "Pinch" }
    ],
    flavors: ["Spicy", "Salty", "Bold"],
    moods: ["Brunch", "Social"],
    seasons: ["Spring", "Game Day"],
    popular: false
  },
  {
    id: "classic-gibson",
    sourceId: "classic-gibson",
    name: "Gibson",
    category: "Classic Cocktail",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions: "Stir gin and dry vermouth with ice. Strain into a chilled cocktail glass and garnish with a cocktail onion.",
    ingredients: ["Gin", "Dry Vermouth", "Cocktail Onion"],
    ingredientDetails: [
      { name: "Gin", measure: "2 1/2 oz" },
      { name: "Dry Vermouth", measure: "1/2 oz" },
      { name: "Cocktail Onion", measure: "Garnish" }
    ],
    flavors: ["Bold", "Herbal", "Salty"],
    moods: ["Sophisticated", "After Work"],
    seasons: ["Dinner Party"],
    popular: false
  },
  {
    id: "classic-bees-knees",
    sourceId: "classic-bees-knees",
    name: "Bee's Knees",
    aliases: ["Bees Knees"],
    category: "Classic Cocktail",
    alcoholic: "Alcoholic",
    glass: "Coupe glass",
    instructions: "Shake gin, lemon juice, and honey syrup with ice. Strain into a chilled coupe.",
    ingredients: ["Gin", "Lemon Juice", "Honey Syrup"],
    ingredientDetails: [
      { name: "Gin", measure: "2 oz" },
      { name: "Lemon Juice", measure: "3/4 oz" },
      { name: "Honey Syrup", measure: "3/4 oz" }
    ],
    flavors: ["Floral", "Citrusy", "Sweet"],
    moods: ["Romantic", "Brunch"],
    seasons: ["Spring", "Summer"],
    popular: false
  },
  {
    id: "classic-gold-rush",
    sourceId: "classic-gold-rush",
    name: "Gold Rush",
    category: "Modern Classic",
    alcoholic: "Alcoholic",
    glass: "Rocks glass",
    instructions: "Shake bourbon, lemon juice, and honey syrup with ice. Strain over fresh ice.",
    ingredients: ["Bourbon", "Lemon Juice", "Honey Syrup"],
    ingredientDetails: [
      { name: "Bourbon", measure: "2 oz" },
      { name: "Lemon Juice", measure: "3/4 oz" },
      { name: "Honey Syrup", measure: "3/4 oz" }
    ],
    flavors: ["Sour", "Sweet", "Bold"],
    moods: ["After Work", "Cozy"],
    seasons: ["Fall", "Winter"],
    popular: false
  },
  {
    id: "classic-southside",
    sourceId: "classic-southside",
    name: "Southside",
    category: "Classic Cocktail",
    alcoholic: "Alcoholic",
    glass: "Coupe glass",
    instructions: "Shake gin, lime juice, simple syrup, and mint with ice. Double strain into a chilled coupe.",
    ingredients: ["Gin", "Lime Juice", "Simple Syrup", "Mint"],
    ingredientDetails: [
      { name: "Gin", measure: "2 oz" },
      { name: "Lime Juice", measure: "1 oz" },
      { name: "Simple Syrup", measure: "3/4 oz" },
      { name: "Mint", measure: "6 leaves" }
    ],
    flavors: ["Herbal", "Citrusy", "Refreshing"],
    moods: ["Social", "Energized"],
    seasons: ["Spring", "Summer"],
    popular: false
  },
  {
    id: "classic-hemingway-daiquiri",
    sourceId: "classic-hemingway-daiquiri",
    name: "Hemingway Daiquiri",
    aliases: ["Papa Doble"],
    category: "Classic Cocktail",
    alcoholic: "Alcoholic",
    glass: "Coupe glass",
    instructions: "Shake white rum, maraschino liqueur, grapefruit juice, and lime juice with ice. Strain into a chilled coupe.",
    ingredients: ["White Rum", "Maraschino Liqueur", "Grapefruit Juice", "Lime Juice"],
    ingredientDetails: [
      { name: "White Rum", measure: "2 oz" },
      { name: "Maraschino Liqueur", measure: "1/2 oz" },
      { name: "Grapefruit Juice", measure: "3/4 oz" },
      { name: "Lime Juice", measure: "1/2 oz" }
    ],
    flavors: ["Citrusy", "Sour", "Refreshing"],
    moods: ["Adventurous", "Beachy"],
    seasons: ["Summer"],
    popular: false
  },
  {
    id: "classic-el-presidente",
    sourceId: "classic-el-presidente",
    name: "El Presidente",
    category: "Classic Cocktail",
    alcoholic: "Alcoholic",
    glass: "Coupe glass",
    instructions: "Stir white rum, dry vermouth, orange curacao, and grenadine with ice. Strain into a chilled coupe.",
    ingredients: ["White Rum", "Dry Vermouth", "Orange Curacao", "Grenadine"],
    ingredientDetails: [
      { name: "White Rum", measure: "1 1/2 oz" },
      { name: "Dry Vermouth", measure: "3/4 oz" },
      { name: "Orange Curacao", measure: "1/4 oz" },
      { name: "Grenadine", measure: "1 tsp" }
    ],
    flavors: ["Citrusy", "Sweet", "Delicate"],
    moods: ["Sophisticated", "Social"],
    seasons: ["Spring", "Summer"],
    popular: false
  },
  {
    id: "classic-jungle-bird",
    sourceId: "classic-jungle-bird",
    name: "Jungle Bird",
    category: "Tiki / Tropical",
    alcoholic: "Alcoholic",
    glass: "Rocks glass",
    instructions: "Shake dark rum, Campari, pineapple juice, lime juice, and simple syrup with ice. Strain over fresh ice.",
    ingredients: ["Dark Rum", "Campari", "Pineapple Juice", "Lime Juice", "Simple Syrup"],
    ingredientDetails: [
      { name: "Dark Rum", measure: "1 1/2 oz" },
      { name: "Campari", measure: "3/4 oz" },
      { name: "Pineapple Juice", measure: "1 1/2 oz" },
      { name: "Lime Juice", measure: "1/2 oz" },
      { name: "Simple Syrup", measure: "1/2 oz" }
    ],
    flavors: ["Tropical", "Bitter", "Refreshing"],
    moods: ["Adventurous", "Beachy"],
    seasons: ["Summer", "Poolside"],
    popular: false
  },
  {
    id: "classic-naked-and-famous",
    sourceId: "classic-naked-and-famous",
    name: "Naked and Famous",
    category: "Modern Classic",
    alcoholic: "Alcoholic",
    glass: "Coupe glass",
    instructions: "Shake mezcal, Aperol, yellow Chartreuse, and lime juice with ice. Strain into a chilled coupe.",
    ingredients: ["Mezcal", "Aperol", "Yellow Chartreuse", "Lime Juice"],
    ingredientDetails: [
      { name: "Mezcal", measure: "3/4 oz" },
      { name: "Aperol", measure: "3/4 oz" },
      { name: "Yellow Chartreuse", measure: "3/4 oz" },
      { name: "Lime Juice", measure: "3/4 oz" }
    ],
    flavors: ["Smoky", "Bitter", "Citrusy"],
    moods: ["Adventurous", "Late Night"],
    seasons: ["Fall", "Dinner Party"],
    popular: false
  },
  {
    id: "classic-amaretto-sour",
    sourceId: "classic-amaretto-sour",
    name: "Amaretto Sour",
    category: "Sour",
    alcoholic: "Alcoholic",
    glass: "Rocks glass",
    instructions: "Shake amaretto, bourbon, lemon juice, simple syrup, and egg white without ice, then shake with ice. Strain over fresh ice.",
    ingredients: ["Amaretto", "Bourbon", "Lemon Juice", "Simple Syrup", "Egg White"],
    ingredientDetails: [
      { name: "Amaretto", measure: "1 1/2 oz" },
      { name: "Bourbon", measure: "3/4 oz" },
      { name: "Lemon Juice", measure: "1 oz" },
      { name: "Simple Syrup", measure: "1/4 oz" },
      { name: "Egg White", measure: "1/2 oz" }
    ],
    flavors: ["Sweet", "Sour", "Creamy"],
    moods: ["Cozy", "Social"],
    seasons: ["Fall", "Winter"],
    popular: false
  },
  {
    id: "classic-tommys-margarita",
    sourceId: "classic-tommys-margarita",
    name: "Tommy's Margarita",
    aliases: ["Tommys Margarita"],
    category: "Modern Classic",
    alcoholic: "Alcoholic",
    glass: "Rocks glass",
    instructions: "Shake tequila, lime juice, and agave syrup with ice. Strain over fresh ice and garnish with lime.",
    ingredients: ["Tequila", "Lime Juice", "Agave Syrup"],
    ingredientDetails: [
      { name: "Tequila", measure: "2 oz" },
      { name: "Lime Juice", measure: "1 oz" },
      { name: "Agave Syrup", measure: "1/2 oz" }
    ],
    flavors: ["Citrusy", "Sour", "Refreshing"],
    moods: ["Social", "Energized"],
    seasons: ["Summer", "Poolside"],
    popular: false
  },
  {
    id: "classic-ranch-water",
    sourceId: "classic-ranch-water",
    name: "Ranch Water",
    category: "Highball",
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions: "Build tequila and lime juice over ice. Top with sparkling mineral water and stir gently.",
    ingredients: ["Tequila", "Lime Juice", "Sparkling Mineral Water"],
    ingredientDetails: [
      { name: "Tequila", measure: "2 oz" },
      { name: "Lime Juice", measure: "1 oz" },
      { name: "Sparkling Mineral Water", measure: "Top" }
    ],
    flavors: ["Light", "Citrusy", "Refreshing"],
    moods: ["Relaxed", "Low-key"],
    seasons: ["Summer", "Poolside"],
    popular: false
  },
  {
    id: "classic-garibaldi",
    sourceId: "classic-garibaldi",
    name: "Garibaldi",
    category: "Highball",
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions: "Build Campari and orange juice over ice. Stir gently and garnish with an orange wedge.",
    ingredients: ["Campari", "Orange Juice"],
    ingredientDetails: [
      { name: "Campari", measure: "1 1/2 oz" },
      { name: "Orange Juice", measure: "4 oz" }
    ],
    flavors: ["Bitter", "Citrusy", "Refreshing"],
    moods: ["Brunch", "Relaxed"],
    seasons: ["Spring", "Summer"],
    popular: false
  },
  {
    id: "classic-bamboo",
    sourceId: "classic-bamboo",
    name: "Bamboo",
    category: "Low ABV",
    alcoholic: "Alcoholic",
    glass: "Coupe glass",
    instructions: "Stir dry sherry, dry vermouth, and bitters with ice. Strain into a chilled coupe and garnish with a lemon twist.",
    ingredients: ["Dry Sherry", "Dry Vermouth", "Orange Bitters", "Angostura Bitters"],
    ingredientDetails: [
      { name: "Dry Sherry", measure: "1 1/2 oz" },
      { name: "Dry Vermouth", measure: "1 1/2 oz" },
      { name: "Orange Bitters", measure: "1 dash" },
      { name: "Angostura Bitters", measure: "1 dash" }
    ],
    flavors: ["Dry", "Herbal", "Delicate"],
    moods: ["Sophisticated", "Low-key"],
    seasons: ["Spring", "Dinner Party"],
    popular: false
  },
  {
    id: "classic-tuxedo",
    sourceId: "classic-tuxedo",
    name: "Tuxedo",
    category: "Classic Cocktail",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions: "Stir gin, dry vermouth, maraschino liqueur, absinthe, and bitters with ice. Strain into a chilled glass and garnish with lemon.",
    ingredients: ["Gin", "Dry Vermouth", "Maraschino Liqueur", "Absinthe", "Orange Bitters"],
    ingredientDetails: [
      { name: "Gin", measure: "1 1/2 oz" },
      { name: "Dry Vermouth", measure: "1 1/2 oz" },
      { name: "Maraschino Liqueur", measure: "1/4 oz" },
      { name: "Absinthe", measure: "1/4 tsp" },
      { name: "Orange Bitters", measure: "2 dashes" }
    ],
    flavors: ["Herbal", "Bold", "Delicate"],
    moods: ["Sophisticated", "Dinner Party"],
    seasons: ["Spring", "Fall"],
    popular: false
  },
  {
    id: "classic-martinez",
    sourceId: "classic-martinez",
    name: "Martinez",
    category: "Classic Cocktail",
    alcoholic: "Alcoholic",
    glass: "Coupe glass",
    instructions: "Stir gin, sweet vermouth, maraschino liqueur, and bitters with ice. Strain into a chilled coupe and garnish with lemon.",
    ingredients: ["Gin", "Sweet Vermouth", "Maraschino Liqueur", "Orange Bitters"],
    ingredientDetails: [
      { name: "Gin", measure: "1 1/2 oz" },
      { name: "Sweet Vermouth", measure: "1 1/2 oz" },
      { name: "Maraschino Liqueur", measure: "1/4 oz" },
      { name: "Orange Bitters", measure: "2 dashes" }
    ],
    flavors: ["Sweet", "Herbal", "Bold"],
    moods: ["Sophisticated", "After Work"],
    seasons: ["Fall", "Dinner Party"],
    popular: false
  },
  {
    id: "classic-caipiroska",
    sourceId: "classic-caipiroska",
    name: "Caipiroska",
    category: "Classic Cocktail",
    alcoholic: "Alcoholic",
    glass: "Rocks glass",
    instructions: "Muddle lime and sugar in a rocks glass. Add vodka and crushed ice, then stir.",
    ingredients: ["Vodka", "Lime", "Sugar"],
    ingredientDetails: [
      { name: "Vodka", measure: "2 oz" },
      { name: "Lime", measure: "1/2 lime" },
      { name: "Sugar", measure: "2 tsp" }
    ],
    flavors: ["Citrusy", "Refreshing", "Sweet"],
    moods: ["Relaxed", "Social"],
    seasons: ["Summer", "Poolside"],
    popular: false
  }
];
