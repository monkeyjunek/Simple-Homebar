import { writeFile } from "node:fs/promises";

const letters = "abcdefghijklmnopqrstuvwxyz".split("");
const popularNames = new Set([
  "Margarita",
  "Mojito",
  "A1",
  "Espresso Martini",
  "Sidecar",
  "Daiquiri",
  "Dark and Stormy",
  "Negroni"
]);

const filterOptions = {
  ingredient: [
    "Vodka",
    "Gin",
    "Tequila",
    "Rum",
    "Whiskey",
    "Brandy",
    "Triple Sec",
    "Vermouth",
    "Campari",
    "Kahlua",
    "Baileys",
    "Amaretto",
    "Lime Juice",
    "Lemon Juice",
    "Mint",
    "Simple Syrup",
    "Soda Water",
    "Orange Juice",
    "Cranberry Juice",
    "Coffee"
  ],
  flavor: [
    "Sweet",
    "Creamy",
    "Fruity",
    "Sour",
    "Citrusy",
    "Smoky",
    "Bold",
    "Herbal",
    "Floral",
    "Light",
    "Spicy",
    "Refreshing",
    "Tropical",
    "Delicate",
    "Bitter",
    "Salty"
  ],
  mood: [
    "Celebratory",
    "Relaxed",
    "Adventurous",
    "Cozy",
    "Romantic",
    "Social",
    "Energized",
    "Sophisticated",
    "Beachy",
    "Low-key",
    "Festive",
    "Brunch",
    "Late Night",
    "After Work"
  ],
  season: [
    "Spring",
    "Summer",
    "Fall",
    "Winter",
    "Holiday",
    "Rainy Day",
    "Poolside",
    "Game Day",
    "Dinner Party",
    "New Year's"
  ]
};

const inventoryOptions = [
  ...new Set([
    ...filterOptions.ingredient,
    "White Rum",
    "Dark Rum",
    "Light Rum",
    "Bourbon",
    "Scotch",
    "Dry Vermouth",
    "Sweet Vermouth",
    "Grenadine",
    "Bitters",
    "Tonic Water",
    "Ginger Beer",
    "Pineapple Juice",
    "Grapefruit Juice",
    "Sugar",
    "Honey",
    "Egg White",
    "Cream"
  ])
].sort((a, b) => a.localeCompare(b));

function normalizeIngredient(name) {
  const value = name.trim();
  const lower = value.toLowerCase();
  if (lower === "light rum") return "White Rum";
  if (lower === "dark rum") return "Dark Rum";
  if (lower === "lemon") return "Lemon";
  if (lower === "lime") return "Lime";
  if (lower === "lemon juice") return "Lemon Juice";
  if (lower === "lime juice") return "Lime Juice";
  if (lower === "orange juice") return "Orange Juice";
  if (lower === "cranberry juice") return "Cranberry Juice";
  if (lower === "sugar syrup") return "Simple Syrup";
  if (lower === "carbonated water") return "Soda Water";
  if (lower === "whisky") return "Whiskey";
  return value;
}

function ingredientDetails(drink) {
  const details = [];
  for (let index = 1; index <= 15; index += 1) {
    const name = drink[`strIngredient${index}`];
    if (!name || !name.trim()) continue;
    details.push({
      name: normalizeIngredient(name),
      measure: (drink[`strMeasure${index}`] || "").trim()
    });
  }
  return details;
}

function includesAny(values, terms) {
  const text = values.join(" ").toLowerCase();
  return terms.some((term) => text.includes(term));
}

function classifyFlavors(drink, ingredients) {
  const values = [drink.strDrink, drink.strCategory, drink.strGlass, ...ingredients.map((item) => item.name)];
  const tags = new Set();
  if (includesAny(values, ["sugar", "syrup", "honey", "grenadine", "sweet", "cola", "liqueur"])) tags.add("Sweet");
  if (includesAny(values, ["cream", "milk", "baileys", "egg", "coffee", "chocolate"])) tags.add("Creamy");
  if (includesAny(values, ["orange", "cranberry", "pineapple", "banana", "strawberry", "apple", "peach", "melon", "berry"])) tags.add("Fruity");
  if (includesAny(values, ["lemon", "lime", "sour"])) tags.add("Sour");
  if (includesAny(values, ["lemon", "lime", "orange", "grapefruit", "citrus"])) tags.add("Citrusy");
  if (includesAny(values, ["scotch", "mezcal", "smoky"])) tags.add("Smoky");
  if (includesAny(values, ["whiskey", "whisky", "bourbon", "brandy", "rum", "vodka", "gin", "tequila"])) tags.add("Bold");
  if (includesAny(values, ["mint", "basil", "vermouth", "bitters", "gin"])) tags.add("Herbal");
  if (includesAny(values, ["rose", "elderflower", "violet", "champagne"])) tags.add("Floral");
  if (includesAny(values, ["soda", "tonic", "champagne", "spritz", "highball"])) tags.add("Light");
  if (includesAny(values, ["tabasco", "pepper", "ginger", "spicy"])) tags.add("Spicy");
  if (includesAny(values, ["soda", "tonic", "ginger", "lemon", "lime", "mint", "highball"])) tags.add("Refreshing");
  if (includesAny(values, ["pineapple", "coconut", "rum", "passion", "tropical"])) tags.add("Tropical");
  if (includesAny(values, ["champagne", "wine", "spritz", "fizz"])) tags.add("Delicate");
  if (includesAny(values, ["campari", "bitters", "aperol", "vermouth"])) tags.add("Bitter");
  if (includesAny(values, ["salt", "margarita", "bloody mary"])) tags.add("Salty");
  return tags.size ? [...tags] : ["Bold"];
}

function classifyMoods(drink, ingredients) {
  const values = [drink.strDrink, drink.strCategory, drink.strGlass, ...ingredients.map((item) => item.name)];
  const tags = new Set();
  if (includesAny(values, ["champagne", "spritz", "punch", "party"])) tags.add("Celebratory");
  if (includesAny(values, ["highball", "fizz", "collins", "cooler", "soda"])) tags.add("Relaxed");
  if (includesAny(values, ["zombie", "shot", "strong", "flaming", "151"])) tags.add("Adventurous");
  if (includesAny(values, ["coffee", "cream", "milk", "chocolate", "hot"])) tags.add("Cozy");
  if (includesAny(values, ["rose", "champagne", "cosmopolitan", "martini"])) tags.add("Romantic");
  if (includesAny(values, ["punch", "margarita", "mojito", "daiquiri", "sangria"])) tags.add("Social");
  if (includesAny(values, ["coffee", "espresso", "cola", "energy"])) tags.add("Energized");
  if (includesAny(values, ["martini", "negroni", "old fashioned", "manhattan", "sidecar"])) tags.add("Sophisticated");
  if (includesAny(values, ["rum", "coconut", "pineapple", "mai tai", "daiquiri", "margarita"])) tags.add("Beachy");
  if (includesAny(values, ["beer", "highball", "simple", "soda"])) tags.add("Low-key");
  if (includesAny(values, ["champagne", "punch", "holiday", "sangria"])) tags.add("Festive");
  if (includesAny(values, ["bloody mary", "mimosa", "coffee", "orange juice"])) tags.add("Brunch");
  if (includesAny(values, ["martini", "shot", "coffee", "black russian", "white russian"])) tags.add("Late Night");
  if (includesAny(values, ["whiskey", "old fashioned", "manhattan", "negroni", "martini"])) tags.add("After Work");
  return tags.size ? [...tags] : ["Social"];
}

function classifySeasons(drink, ingredients) {
  const values = [drink.strDrink, drink.strCategory, drink.strGlass, ...ingredients.map((item) => item.name)];
  const tags = new Set();
  if (includesAny(values, ["floral", "rose", "elderflower", "gin", "spritz"])) tags.add("Spring");
  if (includesAny(values, ["mojito", "margarita", "daiquiri", "rum", "pineapple", "coconut", "soda", "fizz"])) tags.add("Summer");
  if (includesAny(values, ["whiskey", "brandy", "apple", "cinnamon", "vermouth", "campari"])) tags.add("Fall");
  if (includesAny(values, ["cream", "coffee", "chocolate", "hot", "scotch", "milk"])) tags.add("Winter");
  if (includesAny(values, ["champagne", "cranberry", "punch", "eggnog"])) tags.add("Holiday");
  if (includesAny(values, ["coffee", "cream", "whiskey", "hot", "brandy"])) tags.add("Rainy Day");
  if (includesAny(values, ["rum", "coconut", "pineapple", "margarita", "mojito", "daiquiri"])) tags.add("Poolside");
  if (includesAny(values, ["beer", "shot", "punch", "highball"])) tags.add("Game Day");
  if (includesAny(values, ["martini", "manhattan", "negroni", "sidecar", "champagne"])) tags.add("Dinner Party");
  if (includesAny(values, ["champagne", "sparkling", "fizz"])) tags.add("New Year's");
  return tags.size ? [...tags] : ["Dinner Party"];
}

function toCocktail(drink) {
  const details = ingredientDetails(drink);
  return {
    id: `drink-${drink.idDrink}`,
    sourceId: drink.idDrink,
    name: drink.strDrink,
    category: drink.strCategory || "Cocktail",
    alcoholic: drink.strAlcoholic || "",
    glass: drink.strGlass || "",
    instructions: drink.strInstructions || "",
    ingredients: details.map((item) => item.name),
    ingredientDetails: details,
    flavors: classifyFlavors(drink, details),
    moods: classifyMoods(drink, details),
    seasons: classifySeasons(drink, details),
    image: drink.strDrinkThumb || "",
    popular: popularNames.has(drink.strDrink)
  };
}

const byId = new Map();
for (const letter of letters) {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
  if (!response.ok) throw new Error(`Failed to fetch ${letter}: ${response.status}`);
  const data = await response.json();
  for (const drink of data.drinks || []) {
    byId.set(drink.idDrink, drink);
  }
}

const cocktails = [...byId.values()]
  .map(toCocktail)
  .sort((a, b) => Number(b.popular) - Number(a.popular) || a.name.localeCompare(b.name));

const source = `// Generated from TheCocktailDB public API. Rebuild with: node scripts/build-cocktail-db.mjs\nexport const filterOptions = ${JSON.stringify(filterOptions, null, 2)};\n\nexport const inventoryOptions = ${JSON.stringify(inventoryOptions, null, 2)};\n\nexport const cocktails = ${JSON.stringify(cocktails, null, 2)};\n`;

await writeFile(new URL("../src/cocktails.js", import.meta.url), source);
console.log(`Wrote ${cocktails.length} cocktails`);
