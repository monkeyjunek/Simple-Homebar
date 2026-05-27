import { cocktails as baseCocktails, filterOptions, inventoryOptions } from "./cocktails.js";
import { mustHaveClassics } from "./mustHaveClassics.js";

const cocktails = mergeCocktailLibraries(baseCocktails, mustHaveClassics);
const pageSize = 20;

const categories = [
  { key: "ingredient", label: "Ingredient" },
  { key: "flavor", label: "Flavor" },
  { key: "mood", label: "Mood" },
  { key: "season", label: "Season" }
];

const myBarCategories = [
  { key: "all", label: "All" },
  { key: "spirits", label: "Spirits" },
  { key: "liqueurs", label: "Liqueurs" },
  { key: "mixers", label: "Mixers" },
  { key: "sweeteners", label: "Sweeteners" },
  { key: "pantry", label: "Pantry" },
  { key: "bitters", label: "Bitters" }
];

const easyModeCategories = [
  { key: "alcohol", label: "Alcohol" },
  { key: "everything", label: "Everything Else" }
];

const categoryLabels = {
  spirits: "Spirits",
  liqueurs: "Liqueurs & Fortified Wines",
  mixers: "Mixers",
  sweeteners: "Sweeteners",
  pantry: "Pantry & Fresh",
  bitters: "Bitters"
};

const quickAddIngredients = ["Lemon", "Lime", "Sugar", "Soda Water", "Vodka", "Tequila", "Gin", "White Rum"];

const generatedCocktailImages = {
  [ingredientKey("A1")]: "./assets/generated/cocktails/a1.png",
  [ingredientKey("AMF")]: "./assets/generated/cocktails/amf.png",
  [ingredientKey("Daiquiri")]: "./assets/generated/cocktails/daiquiri.png",
  [ingredientKey("Dark and Stormy")]: "./assets/generated/cocktails/dark-and-stormy.png",
  [ingredientKey("Espresso Martini")]: "./assets/generated/cocktails/espresso-martini.png",
  [ingredientKey("Margarita")]: "./assets/generated/cocktails/margarita.png",
  [ingredientKey("Mojito")]: "./assets/generated/cocktails/mojito.png",
  [ingredientKey("Negroni")]: "./assets/generated/cocktails/negroni.png",
  [ingredientKey("Sidecar")]: "./assets/generated/cocktails/sidecar.png",
  [ingredientKey("Black Russian")]: "./assets/generated/cocktails/black-russian.svg"
};

const generatedIngredientImages = new Set([
  "Vodka",
  "Gin",
  "Tequila",
  "White Rum",
  "Dark Rum",
  "Whiskey",
  "Bourbon",
  "Scotch",
  "Brandy",
  "Cognac",
  "Triple Sec",
  "Cointreau",
  "Campari",
  "Aperol",
  "Kahlua",
  "Baileys",
  "Amaretto",
  "Blue Curacao",
  "Vermouth",
  "Sweet Vermouth",
  "Lime Juice",
  "Lemon Juice",
  "Orange Juice",
  "Cranberry Juice",
  "Pineapple Juice",
  "Grapefruit Juice",
  "Soda Water",
  "Tonic Water",
  "Ginger Beer",
  "Ginger Ale",
  "Simple Syrup",
  "Grenadine",
  "Honey Syrup",
  "Agave Syrup",
  "Sugar",
  "Brown Sugar",
  "Maple Syrup",
  "Coconut Syrup",
  "Ginger Syrup",
  "Vanilla Syrup",
  "Lime",
  "Lemon",
  "Orange",
  "Mint",
  "Egg White",
  "Cream",
  "Coffee",
  "Bitters",
  "Angostura Bitters",
  "Orange Bitters"
].map(ingredientKey));

const myBarIngredients = buildIngredientLibrary(cocktails);
const storedUser = loadStoredUser();
const guestUser = {
  name: "Guest User",
  email: "Sign up to save your homebar"
};
const initialInventory = loadStoredInventory(storedUser || guestUser);
const initialSavedRecipes = loadStoredSavedRecipes(storedUser || guestUser);

const state = {
  view: storedUser ? "home" : "auth",
  authMode: "welcome",
  user: storedUser || guestUser,
  isGuest: !storedUser,
  activeCategory: null,
  myBarTab: "inventory",
  myBarMode: "dashboard",
  myBarCategory: "all",
  easyMode: false,
  ingredientSearch: "",
  pendingIngredients: new Set(),
  selected: {
    ingredient: new Set(),
    flavor: new Set(),
    mood: new Set(),
    season: new Set()
  },
  inventory: new Set(initialInventory),
  savedRecipes: new Set(initialSavedRecipes),
  search: "",
  showResults: false,
  cocktailPage: 1,
  ingredientPage: 1
};

const els = {
  authScreen: document.querySelector("#authScreen"),
  appHeader: document.querySelector("#appHeader"),
  primaryNav: document.querySelector("#primaryNav"),
  authWelcome: document.querySelector("#authWelcome"),
  signupPanel: document.querySelector("#signupPanel"),
  loginPanel: document.querySelector("#loginPanel"),
  showSignup: document.querySelector("#showSignup"),
  showLogin: document.querySelector("#showLogin"),
  continueGuest: document.querySelector("#continueGuest"),
  signupForm: document.querySelector("#signupForm"),
  signupName: document.querySelector("#signupName"),
  signupEmail: document.querySelector("#signupEmail"),
  signupPassword: document.querySelector("#signupPassword"),
  signupConfirm: document.querySelector("#signupConfirm"),
  signupMessage: document.querySelector("#signupMessage"),
  loginForm: document.querySelector("#loginForm"),
  loginEmail: document.querySelector("#loginEmail"),
  loginPassword: document.querySelector("#loginPassword"),
  loginMessage: document.querySelector("#loginMessage"),
  authModeButtons: document.querySelectorAll("[data-auth-mode]"),
  categoryRow: document.querySelector("#categoryRow"),
  filterPanel: document.querySelector("#filterPanel"),
  filterTitle: document.querySelector("#filterTitle"),
  filterSubtitle: document.querySelector("#filterSubtitle"),
  optionGrid: document.querySelector("#optionGrid"),
  cocktailGrid: document.querySelector("#cocktailGrid"),
  cocktailPagination: document.querySelector("#cocktailPagination"),
  recipeSearch: document.querySelector("#recipeSearch"),
  closeFilters: document.querySelector("#closeFilters"),
  applyFilters: document.querySelector("#applyFilters"),
  findRecipesButton: document.querySelector("#findRecipesButton"),
  resultsTitle: document.querySelector("#resultsTitle"),
  homeScreen: document.querySelector("#home-screen"),
  myBarScreen: document.querySelector("#myBarScreen"),
  profileScreen: document.querySelector("#profileScreen"),
  navHome: document.querySelector("#navHome"),
  navProfile: document.querySelector("#navProfile"),
  inventoryButton: document.querySelector("#inventoryButton"),
  navInventory: document.querySelector("#navInventory"),
  homeButtons: document.querySelectorAll("[data-open-home]"),
  profileButtons: document.querySelectorAll("[data-open-profile]"),
  inventoryPanel: document.querySelector("#inventoryPanel"),
  inventoryGrid: document.querySelector("#inventoryGrid"),
  closeInventory: document.querySelector("#closeInventory"),
  recipeSheet: document.querySelector("#recipeSheet"),
  closeRecipe: document.querySelector("#closeRecipe"),
  saveRecipe: document.querySelector("#saveRecipe"),
  recipeImage: document.querySelector("#recipeImage"),
  recipeName: document.querySelector("#recipeName"),
  recipeMeta: document.querySelector("#recipeMeta"),
  recipeIngredients: document.querySelector("#recipeIngredients"),
  recipeInstructions: document.querySelector("#recipeInstructions"),
  myBarSubtitle: document.querySelector("#myBarSubtitle"),
  myInventoryToggle: document.querySelector("#myInventoryToggle"),
  myRecipesToggle: document.querySelector("#myRecipesToggle"),
  myInventoryPanel: document.querySelector("#myInventoryPanel"),
  myRecipesPanel: document.querySelector("#myRecipesPanel"),
  inventoryTitle: document.querySelector("#inventoryTitle"),
  inventoryCopy: document.querySelector("#inventoryCopy"),
  quickAddPanel: document.querySelector("#quickAddPanel"),
  quickAddList: document.querySelector("#quickAddList"),
  ingredientSearch: document.querySelector("#ingredientSearch"),
  inventoryDashboard: document.querySelector("#inventoryDashboard"),
  seeRecipesButton: document.querySelector("#seeRecipesButton"),
  ingredientBrowser: document.querySelector("#ingredientBrowser"),
  ingredientCategoryRow: document.querySelector("#ingredientCategoryRow"),
  ingredientGrid: document.querySelector("#ingredientGrid"),
  ingredientPagination: document.querySelector("#ingredientPagination"),
  addSelectedIngredients: document.querySelector("#addSelectedIngredients"),
  estimatorRecipeSelect: document.querySelector("#estimatorRecipeSelect"),
  estimatorDrinkCount: document.querySelector("#estimatorDrinkCount"),
  estimatorDrinkName: document.querySelector("#estimatorDrinkName"),
  estimatorIngredients: document.querySelector("#estimatorIngredients"),
  myRecipesGrid: document.querySelector("#myRecipesGrid"),
  recommendedRecipesGrid: document.querySelector("#recommendedRecipesGrid"),
  profileName: document.querySelector("#profileName"),
  profileEmail: document.querySelector("#profileEmail"),
  profileIngredientCount: document.querySelector("#profileIngredientCount"),
  profileRecipeCount: document.querySelector("#profileRecipeCount"),
  profileSavedCount: document.querySelector("#profileSavedCount"),
  profileSavedTitleCount: document.querySelector("#profileSavedTitleCount"),
  profileSavedGrid: document.querySelector("#profileSavedGrid"),
  copyInventoryBackup: document.querySelector("#copyInventoryBackup"),
  restoreInventoryBackup: document.querySelector("#restoreInventoryBackup"),
  profileBackupMessage: document.querySelector("#profileBackupMessage"),
  backupPanel: document.querySelector("#backupPanel"),
  inventoryBackupText: document.querySelector("#inventoryBackupText"),
  selectInventoryBackup: document.querySelector("#selectInventoryBackup"),
  applyInventoryBackup: document.querySelector("#applyInventoryBackup"),
  undoBanner: document.querySelector("#undoBanner"),
  undoBannerText: document.querySelector("#undoBannerText"),
  undoRemoveIngredient: document.querySelector("#undoRemoveIngredient"),
  pageJumpButton: document.querySelector("#pageJumpButton"),
  easyModeToggle: document.querySelector("#easyModeToggle"),
  servingOptions: document.querySelector("#servingOptions"),
  unitOptions: document.querySelector("#unitOptions")
};

const recipeState = {
  cocktail: null,
  servings: 1,
  unit: "oz"
};

const estimatorState = {
  recipeId: null,
  ingredients: {}
};

const undoState = {
  ingredient: null,
  timer: null
};

function buildIngredientLibrary(recipes) {
  const byKey = new Map();
  recipes.flatMap((cocktail) => cocktail.ingredients).forEach((ingredient) => {
    const name = normalizeIngredientName(ingredient);
    const key = ingredientKey(name);
    if (!byKey.has(key)) {
      byKey.set(key, { name, category: classifyIngredient(name), image: ingredientImageUrl(name) });
    }
  });
  return [...byKey.values()].sort((a, b) => {
    const categoryOrder =
      fullMyBarCategories().findIndex((category) => category.key === a.category) -
      fullMyBarCategories().findIndex((category) => category.key === b.category);
    return categoryOrder || a.name.localeCompare(b.name);
  });
}

function fullMyBarCategories() {
  return myBarCategories.filter((category) => category.key !== "all");
}

function loadStoredUser() {
  try {
    const value = window.localStorage.getItem("simpleHomebarUser");
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

function saveStoredUser(user) {
  window.localStorage.setItem("simpleHomebarUser", JSON.stringify(user));
}

function inventoryStorageKey(user) {
  return `simpleHomebarInventory:${user.email || "guest"}`;
}

function loadStoredInventory(user) {
  try {
    const value = window.localStorage.getItem(inventoryStorageKey(user));
    return value ? JSON.parse(value) : [];
  } catch {
    return [];
  }
}

function saveStoredInventory() {
  window.localStorage.setItem(inventoryStorageKey(state.user), JSON.stringify([...state.inventory]));
}

function savedRecipesStorageKey(user) {
  return `simpleHomebarSavedRecipes:${user.email || "guest"}`;
}

function loadStoredSavedRecipes(user) {
  try {
    const value = window.localStorage.getItem(savedRecipesStorageKey(user));
    return value ? JSON.parse(value) : [];
  } catch {
    return [];
  }
}

function saveStoredSavedRecipes() {
  window.localStorage.setItem(savedRecipesStorageKey(state.user), JSON.stringify([...state.savedRecipes]));
}

function inventoryBackupPayload() {
  return JSON.stringify({
    version: 1,
    user: state.user.email,
    inventory: [...state.inventory]
  });
}

function copyInventoryBackup() {
  const backup = inventoryBackupPayload();
  els.backupPanel.classList.remove("hidden");
  els.inventoryBackupText.value = backup;
  els.inventoryBackupText.focus();
  els.inventoryBackupText.select();
  els.profileBackupMessage.textContent = "Backup text is shown below. Select it and copy it somewhere safe.";
}

function restoreInventoryBackup() {
  els.backupPanel.classList.remove("hidden");
  els.inventoryBackupText.value = "";
  els.inventoryBackupText.focus();
  els.profileBackupMessage.textContent = "Paste your backup text below, then tap Restore from text.";
}

function applyInventoryBackup() {
  const backup = els.inventoryBackupText.value.trim();
  if (!backup) return;

  try {
    const parsed = JSON.parse(backup);
    const ingredients = Array.isArray(parsed.inventory) ? parsed.inventory : [];
    state.inventory = new Set(ingredients);
    state.pendingIngredients = new Set(state.inventory);
    saveStoredInventory();
    render();
    els.profileBackupMessage.textContent = "Inventory restored.";
  } catch {
    els.profileBackupMessage.textContent = "That backup did not look valid.";
  }
}

function selectInventoryBackup() {
  els.inventoryBackupText.focus();
  els.inventoryBackupText.select();
  els.profileBackupMessage.textContent = "Text selected. Use Copy from the edit menu.";
}

function ingredientImageUrl(name) {
  if (generatedIngredientImages.has(ingredientKey(name))) {
    return `./assets/generated/ingredients/${assetSlug(name)}.svg`;
  }
  return `https://www.thecocktaildb.com/images/ingredients/${encodeURIComponent(name)}-Medium.png`;
}

function cocktailImage(cocktail) {
  return generatedCocktailImages[ingredientKey(cocktail.name)] || cocktail.image || cocktailImagePlaceholder(cocktail);
}

function cocktailImagePlaceholder(cocktail) {
  const hue = Math.abs([...cocktail.name].reduce((sum, char) => sum + char.charCodeAt(0), 0)) % 80;
  const color = hue < 20 ? "#c6973c" : hue < 40 ? "#d76f45" : hue < 60 ? "#7fc6c4" : "#f0d477";
  const label = cocktail.name.replace(/&/g, "and");
  return `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1402" height="1122" viewBox="0 0 1402 1122">
      <rect width="1402" height="1122" fill="#0e6095"/>
      <ellipse cx="701" cy="892" rx="270" ry="44" fill="#062b43" opacity=".24"/>
      <path d="M560 292h282l-45 500c-5 57-47 100-96 100s-91-43-96-100L560 292Z" fill="#eef9ff" opacity=".42"/>
      <path d="M595 434h212l-31 348c-3 40-35 70-75 70s-72-30-75-70L595 434Z" fill="${color}" opacity=".92"/>
      <ellipse cx="701" cy="293" rx="150" ry="31" fill="#f7fdff" opacity=".72"/>
      <ellipse cx="701" cy="296" rx="118" ry="18" fill="${color}" opacity=".78"/>
      <path d="M812 343c-7 126-15 260-29 408" fill="none" stroke="#fff" stroke-width="18" stroke-linecap="round" opacity=".26"/>
      <text x="701" y="1016" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="62" font-weight="700" fill="#f8f0df">${label}</text>
    </svg>
  `)}`;
}

function assetSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normalizeIngredientName(name) {
  const title = name
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/\bAnd\b/g, "and")
    .replace(/\bDe\b/g, "de")
    .replace(/\bOf\b/g, "of");
  return title
    .replace(/^Gin$/, "Gin")
    .replace(/^7-Up$/i, "7-Up")
    .replace(/^Club Soda$/i, "Soda Water")
    .replace(/^Carbonated Water$/i, "Soda Water")
    .replace(/^Sugar Syrup$/i, "Simple Syrup")
    .replace(/^Whisky$/i, "Whiskey")
    .replace(/^Baileys Irish Cream$/i, "Baileys")
    .replace(/^Irish Cream$/i, "Baileys")
    .replace(/^Blue Curacao$/i, "Blue Curacao")
    .replace(/^Creme De/i, "Creme de")
    .replace(/^Maraschino Liqueur$/i, "Maraschino Liqueur")
    .replace(/^Angostura Bitters$/i, "Angostura Bitters");
}

function ingredientKey(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function mergeCocktailLibraries(base, overlay) {
  const byName = new Map(base.map((cocktail) => [ingredientKey(cocktail.name), cocktail]));
  overlay.forEach((cocktail) => {
    const key = ingredientKey(cocktail.name);
    if (!byName.has(key)) byName.set(key, cocktail);
  });
  return [...byName.values()];
}

function normalizeSearchText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function matchesSearchTerm(value, term) {
  const normalized = normalizeSearchText(value);
  return normalized.includes(term);
}

function matchesCompactSearchTerm(value, term) {
  const normalized = normalizeSearchText(value);
  return normalized.replace(/\s+/g, "").includes(term.replace(/\s+/g, ""));
}

function cocktailMatchesSearch(cocktail, term) {
  const nameAndAliases = [cocktail.name, ...(cocktail.aliases || [])];
  return (
    nameAndAliases.some((value) => matchesSearchTerm(value, term) || matchesCompactSearchTerm(value, term)) ||
    searchableCocktailText(cocktail).some((value) => matchesSearchTerm(value, term))
  );
}

function searchableCocktailText(cocktail) {
  return [
    cocktail.category,
    cocktail.glass,
    cocktail.instructions,
    ...(cocktail.ingredients || [])
  ];
}

function classifyIngredient(name) {
  const lower = name.toLowerCase();
  if (lower.includes("bitter")) return "bitters";

  if (
    includesTerm(lower, [
      "syrup",
      "sugar",
      "honey",
      "grenadine",
      "agave",
      "maple",
      "sweet and sour",
      "corn syrup",
      "coconut syrup",
      "chocolate syrup"
    ])
  ) {
    return "sweeteners";
  }

  if (
    includesTerm(lower, [
      "liqueur",
      "schnapps",
      "curacao",
      "curaçao",
      "triple sec",
      "vermouth",
      "campari",
      "aperol",
      "kahlua",
      "baileys",
      "amaretto",
      "sambuca",
      "amaro",
      "chartreuse",
      "benedictine",
      "drambuie",
      "galliano",
      "frangelico",
      "advocaat",
      "anisette",
      "pernod",
      "ricard",
      "passoa",
      "midori",
      "pimm",
      "cointreau",
      "grand marnier",
      "cherry heering",
      "southern comfort",
      "jagermeister",
      "jägermeister",
      "yukon jack",
      "goldschlager",
      "tia maria",
      "st. germain",
      "wine",
      "champagne",
      "prosecco",
      "port",
      "sherry",
      "dubonnet",
      "lillet"
    ])
  ) {
    return "liqueurs";
  }

  if (
    includesTerm(lower, [
      "vodka",
      "gin",
      "rum",
      "whiskey",
      "whisky",
      "tequila",
      "brandy",
      "cognac",
      "bourbon",
      "scotch",
      "mezcal",
      "pisco",
      "cachaca",
      "cachaça",
      "everclear",
      "grain alcohol",
      "absinthe",
      "firewater",
      "applejack"
    ])
  ) {
    return "spirits";
  }

  if (
    includesTerm(lower, [
      "juice",
      "soda",
      "cola",
      "tonic",
      "ginger ale",
      "ginger beer",
      "lemonade",
      "limeade",
      "water",
      "tea",
      "coffee",
      "espresso",
      "beer",
      "stout",
      "cider",
      "mix",
      "nectar",
      "punch",
      "kool-aid",
      "dr. pepper",
      "pepsi",
      "sprite",
      "7-up",
      "fresca",
      "surge",
      "zima",
      "root beer",
      "sarsaparilla"
    ])
  ) {
    return "mixers";
  }

  return "pantry";
}

function includesTerm(text, terms) {
  return terms.some((term) => text.includes(term));
}

function ingredientCount(cocktail) {
  return cocktail.ingredients.length;
}

function matchesCategory(cocktail, key, values) {
  if (!values.size) return true;
  const lookup = {
    ingredient: cocktail.ingredients,
    flavor: cocktail.flavors,
    mood: cocktail.moods,
    season: cocktail.seasons
  }[key];
  return [...values].some((value) => {
    if (lookup.includes(value)) return true;
    if (key !== "ingredient") return false;
    return lookup.some((item) => item.toLowerCase().includes(value.toLowerCase()));
  });
}

function canMakeCount(cocktail) {
  const normalizedInventory = new Set([...state.inventory].map((ingredient) => ingredientKey(ingredient)));
  return cocktail.ingredients.filter((ingredient) =>
    normalizedInventory.has(ingredientKey(normalizeIngredientName(ingredient)))
  ).length;
}

function missingIngredients(cocktail) {
  const normalizedInventory = new Set([...state.inventory].map((ingredient) => ingredientKey(ingredient)));
  return cocktail.ingredients
    .map((ingredient) => normalizeIngredientName(ingredient))
    .filter((ingredient) => !normalizedInventory.has(ingredientKey(ingredient)));
}

function canMakeRecipe(cocktail) {
  return missingIngredients(cocktail).length === 0;
}

function getVisibleCocktails() {
  const term = normalizeSearchText(state.search);
  let list = cocktails.filter((cocktail) => {
    const allSelected = Object.entries(state.selected).every(([key, values]) =>
      matchesCategory(cocktail, key, values)
    );
    const matchesSearch = !term || cocktailMatchesSearch(cocktail, term);
    return allSelected && matchesSearch;
  });

  if (!state.showResults && !term && Object.values(state.selected).every((set) => set.size === 0)) {
    list = cocktails.filter((cocktail) => cocktail.popular);
  }

  if (state.showResults) {
    list = [...list].sort((a, b) => {
      const aScore = canMakeCount(a) / ingredientCount(a);
      const bScore = canMakeCount(b) / ingredientCount(b);
      return bScore - aScore || ingredientCount(a) - ingredientCount(b);
    });
  }

  return list;
}

function renderCategories() {
  els.categoryRow.innerHTML = "";
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip ${state.activeCategory === category.key ? "selected" : ""}`;
    button.textContent = category.label;
    button.addEventListener("click", () => {
      state.activeCategory = category.key;
      state.showResults = false;
      state.cocktailPage = 1;
      els.inventoryPanel.classList.add("hidden");
      render();
    });
    els.categoryRow.append(button);
  });
}

function renderOptions() {
  if (!state.activeCategory) {
    els.filterPanel.classList.add("hidden");
    return;
  }

  const label = categories.find((category) => category.key === state.activeCategory).label;
  els.filterPanel.classList.remove("hidden");
  els.filterTitle.textContent = `Search by ${label}`;
  els.filterSubtitle.textContent = `Select one or more ${label.toLowerCase()} options`;
  els.optionGrid.innerHTML = "";

  filterOptions[state.activeCategory].forEach((option) => {
    const selected = state.selected[state.activeCategory].has(option);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `option-pill ${selected ? "selected" : ""}`;
    button.textContent = option;
    button.addEventListener("click", () => {
      const bucket = state.selected[state.activeCategory];
      if (bucket.has(option)) bucket.delete(option);
      else bucket.add(option);
      state.showResults = false;
      state.cocktailPage = 1;
      render();
    });
    els.optionGrid.append(button);
  });
}

function renderInventory() {
  els.inventoryGrid.innerHTML = "";
  inventoryOptions.forEach((option) => {
    const selected = state.inventory.has(option);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `option-pill ${selected ? "selected" : ""}`;
    button.textContent = option;
    button.addEventListener("click", () => {
      if (state.inventory.has(option)) state.inventory.delete(option);
      else state.inventory.add(option);
      state.pendingIngredients = new Set(state.inventory);
      saveStoredInventory();
      render();
    });
    els.inventoryGrid.append(button);
  });
}

function renderCocktails() {
  const visible = getVisibleCocktails();
  const page = paginate(visible, state.cocktailPage);
  state.cocktailPage = page.currentPage;
  els.resultsTitle.textContent = getResultsTitle();
  els.cocktailGrid.innerHTML = "";

  page.items.forEach((cocktail) => {
    const makeCount = canMakeCount(cocktail);
    const card = document.createElement("article");
    card.className = "cocktail-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Open ${cocktail.name} recipe`);
    card.innerHTML = `
      <img src="${cocktailImage(cocktail)}" alt="${cocktail.name}" loading="lazy" />
      <h3>${cocktail.name}</h3>
      <p>${ingredientCount(cocktail)} ingredients <span aria-hidden="true">></span></p>
      ${
        state.showResults
          ? `<div class="make-meter"><span style="width:${(makeCount / ingredientCount(cocktail)) * 100}%"></span></div>`
          : ""
      }
    `;
    card.addEventListener("click", () => openRecipe(cocktail));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openRecipe(cocktail);
      }
    });
    els.cocktailGrid.append(card);
  });

  if (!visible.length) {
    els.cocktailGrid.innerHTML = `<p class="empty-state">No matching cocktails yet. Try fewer filters.</p>`;
  }

  renderPagination(els.cocktailPagination, page, "cocktail");
}

function renderView() {
  const isAuth = state.view === "auth";
  const isHome = state.view === "home";
  const isMyBar = state.view === "mybar";
  const isProfile = state.view === "profile";
  els.authScreen.classList.toggle("hidden", !isAuth);
  els.appHeader.classList.toggle("hidden", isAuth);
  els.primaryNav.classList.toggle("hidden", isAuth);
  els.homeScreen.classList.toggle("hidden", !isHome);
  els.myBarScreen.classList.toggle("hidden", !isMyBar);
  els.profileScreen.classList.toggle("hidden", !isProfile);
  els.navHome.classList.toggle("active", isHome);
  els.navInventory.classList.toggle("active", isMyBar);
  els.navProfile.classList.toggle("active", isProfile);
  renderAuth();
  updatePageJumpButton();
}

function renderAuth() {
  els.authWelcome.classList.toggle("hidden", state.authMode !== "welcome");
  els.signupPanel.classList.toggle("hidden", state.authMode !== "signup");
  els.loginPanel.classList.toggle("hidden", state.authMode !== "login");
}

function setAuthMode(mode) {
  state.authMode = mode;
  els.signupMessage.textContent = "";
  els.loginMessage.textContent = "";
  renderAuth();
}

function startSession(user, persist = true) {
  state.user = user;
  state.isGuest = !persist;
  if (persist) saveStoredUser(user);
  state.inventory = new Set(loadStoredInventory(user));
  state.pendingIngredients = new Set(state.inventory);
  state.savedRecipes = new Set(loadStoredSavedRecipes(user));
  state.view = "home";
  state.authMode = "welcome";
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openHome() {
  state.view = "home";
  els.inventoryPanel.classList.add("hidden");
  els.recipeSheet.classList.add("hidden");
  document.body.classList.remove("sheet-open");
  renderView();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openMyBar(mode = "dashboard", category = "all") {
  state.view = "mybar";
  state.myBarTab = "inventory";
  state.myBarMode = mode;
  state.myBarCategory = category;
  state.pendingIngredients = new Set(state.inventory);
  els.inventoryPanel.classList.add("hidden");
  state.activeCategory = null;
  renderView();
  renderMyBar();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openMyRecipes() {
  state.view = "mybar";
  state.myBarTab = "recipes";
  state.myBarMode = "dashboard";
  els.inventoryPanel.classList.add("hidden");
  renderView();
  renderMyBar();
  document.querySelector("#myBarScreen").scrollIntoView({ behavior: "smooth", block: "start" });
}

function openProfile() {
  state.view = "profile";
  state.activeCategory = null;
  els.inventoryPanel.classList.add("hidden");
  els.recipeSheet.classList.add("hidden");
  document.body.classList.remove("sheet-open");
  renderView();
  renderProfile();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderMyBar() {
  const isInventory = state.myBarTab === "inventory";
  els.myInventoryToggle.classList.toggle("active", isInventory);
  els.myRecipesToggle.classList.toggle("active", !isInventory);
  els.myInventoryToggle.setAttribute("aria-selected", String(isInventory));
  els.myRecipesToggle.setAttribute("aria-selected", String(!isInventory));
  els.myInventoryPanel.classList.toggle("hidden", !isInventory);
  els.myRecipesPanel.classList.toggle("hidden", isInventory);
  els.myBarSubtitle.textContent = isInventory ? "Manage your collection" : "See what you can make";

  if (isInventory) {
    renderMyBarInventory();
  } else {
    renderMyRecipes();
  }
}

function renderMyBarInventory() {
  const browsing = state.myBarMode === "browser";
  const visibleCount = visibleMyBarIngredients().length;
  els.inventoryTitle.textContent = browsing ? "Search Ingredients" : "Your Ingredients";
  els.inventoryCopy.textContent = inventoryHelperCopy(browsing, visibleCount);
  els.easyModeToggle.checked = state.easyMode;
  els.quickAddPanel.classList.toggle("hidden", browsing || !state.easyMode);
  els.inventoryDashboard.classList.toggle("hidden", browsing);
  els.seeRecipesButton.classList.toggle("hidden", browsing || !state.inventory.size);
  els.ingredientBrowser.classList.toggle("hidden", !browsing);
  renderQuickAdd();
  renderInventoryDashboard();
  if (browsing) {
    renderIngredientCategories();
    renderIngredientGrid();
  }
  renderEstimator();
}

function inventoryHelperCopy(browsing, visibleCount) {
  if (browsing) return `${visibleCount} ingredients available. Add what is in your home bar to see what you can make.`;
  if (state.easyMode) {
    return "Let’s build your home bar. Start with the basics from Quick Add below or search for what you have.";
  }
  return "What’s in your home bar right now? Add your ingredients to see what you can make";
}

function renderInventoryDashboard() {
  els.inventoryDashboard.innerHTML = "";
  inventoryDashboardGroups().forEach(({ key, label }) => {
    const selected = myBarIngredients
      .filter((ingredient) => inventoryGroupMatch(ingredient, key) && state.inventory.has(ingredient.name))
      .map((ingredient) => ingredient.name);
    const group = document.createElement("section");
    group.className = "inventory-group";
    group.innerHTML = `
      <div class="inventory-group-header">
        <h3>${label}${selected.length ? ` (${selected.length})` : ""}</h3>
        <button type="button" data-category="${key}"><span aria-hidden="true">+</span>Add</button>
      </div>
      <div class="ingredient-chip-list">
        ${
          selected.length
            ? selected
                .map(
                  (item) => `
                    <button class="removable-ingredient-chip" type="button" data-remove-ingredient="${item}" aria-label="Remove ${item}">
                      ${item}
                      <span aria-hidden="true">×</span>
                    </button>
                  `
                )
                .join("")
            : `<span class="empty-inventory-note">No ingredients yet</span>`
        }
      </div>
      <div class="glow-shelf"></div>
    `;
    group.querySelectorAll("[data-category]").forEach((button) => {
      button.addEventListener("click", () => openMyBar("browser", key));
    });
    group.querySelectorAll("[data-remove-ingredient]").forEach((button) => {
      button.addEventListener("click", () => removeInventoryIngredient(button.dataset.removeIngredient));
    });
    els.inventoryDashboard.append(group);
  });
}

function inventoryDashboardGroups() {
  if (state.easyMode) return easyModeCategories;
  return fullMyBarCategories().map((category) => ({ key: category.key, label: categoryLabels[category.key] }));
}

function inventoryGroupMatch(ingredient, key) {
  if (key === "alcohol") return isAlcoholCategory(ingredient.category);
  if (key === "everything") return !isAlcoholCategory(ingredient.category);
  return ingredient.category === key;
}

function isAlcoholCategory(category) {
  return category === "spirits" || category === "liqueurs";
}

function removeInventoryIngredient(ingredient) {
  if (!state.inventory.has(ingredient)) return;
  state.inventory.delete(ingredient);
  state.pendingIngredients = new Set(state.inventory);
  saveStoredInventory();
  renderMyBar();
  showUndoBanner(ingredient);
}

function showUndoBanner(ingredient) {
  undoState.ingredient = ingredient;
  window.clearTimeout(undoState.timer);
  els.undoBannerText.textContent = `${ingredient} removed.`;
  els.undoBanner.classList.remove("hidden");
  undoState.timer = window.setTimeout(hideUndoBanner, 6000);
}

function hideUndoBanner() {
  undoState.ingredient = null;
  els.undoBanner.classList.add("hidden");
}

function undoRemoveIngredient() {
  if (!undoState.ingredient) return;
  state.inventory.add(undoState.ingredient);
  state.pendingIngredients = new Set(state.inventory);
  saveStoredInventory();
  renderMyBar();
  hideUndoBanner();
}

function renderQuickAdd() {
  els.quickAddList.innerHTML = "";
  quickAddIngredients.forEach((ingredient) => {
    const selected = state.inventory.has(ingredient);
    const button = document.createElement("button");
    button.type = "button";
    button.className = selected ? "selected" : "";
    button.textContent = ingredient;
    button.addEventListener("click", () => toggleInventoryIngredient(ingredient));
    els.quickAddList.append(button);
  });
}

function toggleInventoryIngredient(ingredient) {
  if (state.inventory.has(ingredient)) state.inventory.delete(ingredient);
  else state.inventory.add(ingredient);
  state.pendingIngredients = new Set(state.inventory);
  saveStoredInventory();
  renderMyBar();
}

function updatePageJumpButton() {
  const isAuth = state.view === "auth";
  const canScroll = document.documentElement.scrollHeight > window.innerHeight + 80;
  els.pageJumpButton.classList.toggle("hidden", isAuth || !canScroll);
  const nearTop = window.scrollY < 240;
  els.pageJumpButton.classList.toggle("scroll-down", nearTop);
  els.pageJumpButton.classList.toggle("scroll-up", !nearTop);
  els.pageJumpButton.setAttribute("aria-label", nearTop ? "Scroll to bottom" : "Scroll to top");
}

function jumpPageScroll() {
  const nearTop = window.scrollY < 240;
  window.scrollTo({
    top: nearTop ? document.documentElement.scrollHeight : 0,
    behavior: "smooth"
  });
}

function renderIngredientCategories() {
  els.ingredientCategoryRow.innerHTML = "";
  activeIngredientCategories().forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip ${state.myBarCategory === category.key ? "selected" : ""}`;
    button.textContent = category.label;
    button.addEventListener("click", () => {
      state.myBarCategory = category.key;
      state.ingredientPage = 1;
      renderIngredientCategories();
      renderIngredientGrid();
    });
    els.ingredientCategoryRow.append(button);
  });
}

function activeIngredientCategories() {
  return state.easyMode ? easyModeCategories : myBarCategories;
}

function visibleMyBarIngredients() {
  const term = state.ingredientSearch.trim().toLowerCase();
  return myBarIngredients.filter((ingredient) => {
    const categoryMatch = ingredientMatchesActiveCategory(ingredient);
    const searchMatch =
      !term ||
      ingredient.name.toLowerCase().includes(term) ||
      categoryLabels[ingredient.category].toLowerCase().includes(term);
    return categoryMatch && searchMatch;
  });
}

function ingredientMatchesActiveCategory(ingredient) {
  if (state.easyMode) {
    if (state.myBarCategory === "alcohol") return isAlcoholCategory(ingredient.category);
    if (state.myBarCategory === "everything") return !isAlcoholCategory(ingredient.category);
    return true;
  }
  return state.myBarCategory === "all" || ingredient.category === state.myBarCategory;
}

function renderIngredientGrid() {
  const visible = visibleMyBarIngredients();
  const page = paginate(visible, state.ingredientPage);
  state.ingredientPage = page.currentPage;
  els.ingredientGrid.innerHTML = "";
  page.items.forEach((ingredient) => {
    const selected = state.pendingIngredients.has(ingredient.name);
    const card = document.createElement("button");
    card.type = "button";
    card.className = `ingredient-card ${selected ? "selected" : ""}`;
    card.innerHTML = `
      <div class="ingredient-art ${ingredient.category}">
        <img src="${ingredient.image}" alt="${ingredient.name}" loading="lazy" />
      </div>
      <div>
        <strong>${ingredient.name}</strong>
        <span>${shortCategoryLabel(ingredient.category)}</span>
      </div>
    `;
    card.querySelector("img").addEventListener("error", (event) => {
      event.currentTarget.remove();
    });
    card.addEventListener("click", () => {
      if (state.pendingIngredients.has(ingredient.name)) state.pendingIngredients.delete(ingredient.name);
      else state.pendingIngredients.add(ingredient.name);
      renderIngredientGrid();
    });
    els.ingredientGrid.append(card);
  });

  if (!visible.length) {
    els.ingredientGrid.innerHTML = `<p class="empty-state">No ingredients found.</p>`;
  }

  renderPagination(els.ingredientPagination, page, "ingredient");
}

function paginate(items, currentPage) {
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const safePage = Math.min(Math.max(1, currentPage), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: items.slice(start, start + pageSize),
    totalItems: items.length,
    currentPage: safePage,
    totalPages
  };
}

function renderPagination(container, page, type) {
  if (!page.totalItems || page.totalPages <= 1) {
    container.classList.add("hidden");
    container.innerHTML = "";
    return;
  }

  container.classList.remove("hidden");
  container.innerHTML = `
    <button type="button" data-page-action="prev" ${page.currentPage === 1 ? "disabled" : ""}>Previous</button>
    <span>Page ${page.currentPage} of ${page.totalPages}</span>
    <button type="button" data-page-action="next" ${page.currentPage === page.totalPages ? "disabled" : ""}>Next</button>
  `;

  container.querySelectorAll("[data-page-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.pageAction === "next" ? 1 : -1;
      if (type === "cocktail") {
        state.cocktailPage += direction;
        renderCocktails();
        document.querySelector("#resultsTitle").scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        state.ingredientPage += direction;
        renderIngredientGrid();
        document.querySelector("#ingredientBrowser").scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function shortCategoryLabel(category) {
  if (category === "pantry") return "Pantry";
  if (category === "liqueurs") return "Liqueurs";
  return categoryLabels[category];
}

function applyPendingIngredients() {
  state.inventory = new Set(state.pendingIngredients);
  saveStoredInventory();
  state.myBarMode = "dashboard";
  state.ingredientSearch = "";
  els.ingredientSearch.value = "";
  renderMyBar();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderMyRecipes() {
  const makeable = exactInventoryRecipes();
  const recommended = recommendedInventoryRecipes();

  els.myRecipesGrid.innerHTML = "";
  els.recommendedRecipesGrid.innerHTML = "";
  if (!state.inventory.size) {
    els.myRecipesGrid.innerHTML = `<p class="empty-state">Add ingredients to your inventory first.</p>`;
    els.recommendedRecipesGrid.innerHTML = `<p class="empty-state">Recommendations will appear after you add ingredients.</p>`;
    return;
  }

  if (!makeable.length) {
    els.myRecipesGrid.innerHTML = `<p class="empty-state">No complete recipes yet. Add a few more ingredients to unlock drinks you can make.</p>`;
  }

  makeable.forEach((cocktail) => {
    els.myRecipesGrid.append(recipeMatchCard(cocktail, "Ready to make"));
  });

  if (!recommended.length) {
    els.recommendedRecipesGrid.innerHTML = `<p class="empty-state">No close matches yet.</p>`;
  }

  recommended.forEach((cocktail) => {
    const missing = missingIngredients(cocktail).slice(0, 2).join(", ");
    els.recommendedRecipesGrid.append(recipeMatchCard(cocktail, `Missing: ${missing}`));
  });
}

function estimatorRecipes() {
  if (!state.inventory.size) return [];
  return exactInventoryRecipes();
}

function recipeMatchCard(cocktail, detail) {
  const card = document.createElement("article");
  card.className = "cocktail-card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Open ${cocktail.name} recipe`);
  card.innerHTML = `
    <img src="${cocktailImage(cocktail)}" alt="${cocktail.name}" loading="lazy" />
    <h3>${cocktail.name}</h3>
    <p>${detail} <span aria-hidden="true">></span></p>
  `;
  card.addEventListener("click", () => openRecipe(cocktail));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openRecipe(cocktail);
    }
  });
  return card;
}

function renderEstimator() {
  const options = estimatorRecipes();
  if (!options.length) {
    estimatorState.recipeId = null;
    els.estimatorRecipeSelect.disabled = true;
    els.estimatorRecipeSelect.innerHTML = `<option>Add ingredients first</option>`;
    els.estimatorDrinkCount.textContent = "0";
    els.estimatorDrinkName.textContent = "drinks";
    els.estimatorIngredients.innerHTML = state.inventory.size
      ? `<p class="empty-state">No complete recipes yet. Add the missing ingredients from Recommended Recipes to estimate a drink.</p>`
      : `<p class="empty-state">Add ingredients to your inventory first. Complete recipes will appear here.</p>`;
    return;
  }

  if (!estimatorState.recipeId || !options.some((cocktail) => cocktail.id === estimatorState.recipeId)) {
    const mojito = options.find((cocktail) => cocktail.name === "Mojito");
    estimatorState.recipeId = (mojito || options[0]).id;
  }

  els.estimatorRecipeSelect.innerHTML = options
    .map(
      (cocktail) =>
        `<option value="${cocktail.id}" ${cocktail.id === estimatorState.recipeId ? "selected" : ""}>${cocktail.name}</option>`
    )
    .join("");
  els.estimatorRecipeSelect.disabled = false;

  const selected = cocktails.find((cocktail) => cocktail.id === estimatorState.recipeId) || options[0];
  const scalable = estimatorIngredientsForRecipe(selected);
  scalable.forEach((ingredient) => {
    const key = ingredientKey(ingredient.name);
    if (!estimatorState.ingredients[key]) {
      estimatorState.ingredients[key] = {
        percent: defaultEstimatorPercent(ingredient.name),
        bottleMl: defaultBottleMl(ingredient.name)
      };
    }
  });

  const drinkCount = estimateDrinkCount(scalable);
  els.estimatorDrinkCount.textContent = drinkCount;
  els.estimatorDrinkName.textContent = pluralizeDrinkName(selected.name, drinkCount);
  els.estimatorIngredients.innerHTML = scalable.length
    ? scalable.map((ingredient) => renderEstimatorIngredient(ingredient)).join("")
    : `<p class="empty-state">This recipe does not have enough measurable ingredients yet.</p>`;

  els.estimatorIngredients.querySelectorAll("[data-estimator-slider]").forEach((input) => {
    input.addEventListener("input", () => {
      const key = input.dataset.estimatorSlider;
      estimatorState.ingredients[key].percent = Number(input.value);
      renderEstimator();
    });
  });

  els.estimatorIngredients.querySelectorAll("[data-bottle-size]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.ingredientKey;
      estimatorState.ingredients[key].bottleMl = Number(button.dataset.bottleSize);
      renderEstimator();
    });
  });
}

function estimatorIngredientsForRecipe(cocktail) {
  return cocktail.ingredientDetails
    .map((item) => {
      const name = estimatorIngredientName(item);
      const requiredMl = estimatorRequiredMl(item);
      return requiredMl ? { name, requiredMl } : null;
    })
    .filter(Boolean);
}

function estimatorIngredientName(item) {
  if (/juice of/i.test(item.measure || "") && item.name.toLowerCase() === "lime") return "Lime Juice";
  if (/juice of/i.test(item.measure || "") && item.name.toLowerCase() === "lemon") return "Lemon Juice";
  return normalizeIngredientName(item.name);
}

function estimatorRequiredMl(item) {
  const parsed = parseMeasure(item.measure);
  if (parsed && isVolumeUnit(parsed.unit)) {
    const requiredMl = toOz(parsed.amount, parsed.unit) * 29.5735;
    if (/soda|water|cola|tonic|ginger beer|ginger ale/i.test(item.name) && requiredMl < 60) return 60;
    return requiredMl;
  }
  if (parsed && parsed.unit === "dash") return parsed.amount * 0.92;
  if (/juice of\s*1\/?2/i.test(item.measure || "")) return 15;
  if (/juice of/i.test(item.measure || "")) return 30;
  if (/soda|water|cola|tonic|ginger beer|ginger ale/i.test(item.name)) return 60;
  return null;
}

function defaultBottleMl(name) {
  const lower = name.toLowerCase();
  if (isMixerIngredient(lower)) return 355;
  if (isJuiceIngredient(lower)) return 375;
  if (isSyrupIngredient(lower)) return 375;
  return 750;
}

function defaultEstimatorPercent(name) {
  return name.toLowerCase().includes("soda") ? 50 : 50;
}

function estimateDrinkCount(ingredients) {
  if (!ingredients.length) return 0;
  return Math.max(
    0,
    Math.floor(
      Math.min(
        ...ingredients.map((ingredient) => {
          const settings = estimatorState.ingredients[ingredientKey(ingredient.name)];
          const availableMl = (settings.bottleMl * settings.percent) / 100;
          return availableMl / ingredient.requiredMl;
        })
      )
    )
  );
}

function renderEstimatorIngredient(ingredient) {
  const key = ingredientKey(ingredient.name);
  const settings = estimatorState.ingredients[key];
  const availableMl = (settings.bottleMl * settings.percent) / 100;
  const containerOptions = estimatorContainerOptions(ingredient.name);
  return `
    <section class="estimator-ingredient">
      <div class="estimator-slider-row">
        <span>${ingredient.name}</span>
        <div class="estimator-slider-control">
          <p>${settings.percent} %</p>
          <input type="range" min="0" max="100" value="${settings.percent}" data-estimator-slider="${key}" aria-label="${ingredient.name} quantity" />
          <p>${formatEstimatorMl(availableMl)}</p>
        </div>
      </div>
      <details class="bottle-size-panel">
        <summary>${estimatorContainerLabel(ingredient.name)}</summary>
        <div class="bottle-size-grid">
          ${containerOptions
            .map(
              (option) => `
                <button type="button" class="${settings.bottleMl === option.ml ? "selected" : ""}" data-ingredient-key="${key}" data-bottle-size="${option.ml}">
                  ${option.label}
                </button>
              `
            )
            .join("")}
        </div>
      </details>
    </section>
  `;
}

function estimatorContainerOptions(name) {
  const lower = name.toLowerCase();
  if (isMixerIngredient(lower)) {
    return [
      { ml: 355, label: "12 oz can" },
      { ml: 500, label: "500mL" },
      { ml: 750, label: "750mL" },
      { ml: 1000, label: "1L" },
      { ml: 2000, label: "2L" }
    ];
  }
  if (isJuiceIngredient(lower)) {
    return [
      { ml: 60, label: "2 oz" },
      { ml: 120, label: "4 oz" },
      { ml: 240, label: "8 oz" },
      { ml: 375, label: "375mL" },
      { ml: 500, label: "500mL" },
      { ml: 1000, label: "1L" }
    ];
  }
  if (isSyrupIngredient(lower)) {
    return [
      { ml: 120, label: "4 oz" },
      { ml: 240, label: "8 oz" },
      { ml: 375, label: "375mL" },
      { ml: 750, label: "750mL" }
    ];
  }
  return [
    { ml: 50, label: "50mL" },
    { ml: 200, label: "200mL" },
    { ml: 375, label: "375mL" },
    { ml: 500, label: "500mL" },
    { ml: 700, label: "700mL" },
    { ml: 750, label: "750mL" },
    { ml: 1000, label: "1L" },
    { ml: 1750, label: "1.75L" }
  ];
}

function estimatorContainerLabel(name) {
  const lower = name.toLowerCase();
  if (isMixerIngredient(lower)) return "Mixer Size";
  if (isJuiceIngredient(lower)) return "Juice Amount";
  if (isSyrupIngredient(lower)) return "Syrup Amount";
  return "Bottle Size";
}

function isMixerIngredient(lower) {
  return /soda|tonic|ginger|cola|sparkling|mineral water|beer|ale/.test(lower);
}

function isJuiceIngredient(lower) {
  return lower.includes("juice");
}

function isSyrupIngredient(lower) {
  return /syrup|honey|agave|grenadine|sugar/.test(lower);
}

function formatEstimatorMl(value) {
  if (value < 30) return `${formatNumber(value / 29.5735)} oz`;
  return `${Math.round(value)} mL`;
}

function formatBottleSize(size) {
  if (size >= 1000) return `${formatNumber(size / 1000)}L`;
  return `${size}mL`;
}

function pluralizeDrinkName(name, count) {
  if (count === 1) return name;
  if (name.endsWith("y")) return `${name.slice(0, -1)}ies`;
  if (name.endsWith("s")) return name;
  return `${name}s`;
}

function savedRecipes() {
  return [...state.savedRecipes]
    .map((id) => cocktails.find((cocktail) => cocktail.id === id))
    .filter(Boolean);
}

function makeableRecipes() {
  return exactInventoryRecipes();
}

function exactInventoryRecipes(limit = Infinity) {
  const recipes = cocktails
    .filter(canMakeRecipe)
    .sort((a, b) => ingredientCount(a) - ingredientCount(b) || a.name.localeCompare(b.name));
  return Number.isFinite(limit) ? recipes.slice(0, limit) : recipes;
}

function recommendedInventoryRecipes(limit = 6) {
  return cocktails
    .filter((cocktail) => {
      const missing = missingIngredients(cocktail).length;
      return missing > 0 && missing <= 2 && canMakeCount(cocktail) > 0;
    })
    .sort((a, b) => {
      const aMissing = missingIngredients(a).length;
      const bMissing = missingIngredients(b).length;
      const aRatio = canMakeCount(a) / ingredientCount(a);
      const bRatio = canMakeCount(b) / ingredientCount(b);
      return aMissing - bMissing || bRatio - aRatio || ingredientCount(a) - ingredientCount(b);
    })
    .slice(0, limit);
}

function renderProfile() {
  const saved = savedRecipes();
  els.profileName.textContent = state.user.name;
  els.profileEmail.textContent = state.isGuest ? "Sign up to save your homebar" : state.user.email;
  els.profileIngredientCount.textContent = state.inventory.size;
  els.profileRecipeCount.textContent = makeableRecipes().length;
  els.profileSavedCount.textContent = saved.length;
  els.profileSavedTitleCount.textContent = saved.length;
  els.profileSavedGrid.innerHTML = "";

  if (!saved.length) {
    els.profileSavedGrid.innerHTML = `<p class="empty-state">Saved recipes will appear here.</p>`;
    return;
  }

  saved.forEach((cocktail) => {
    const card = document.createElement("article");
    card.className = "cocktail-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Open ${cocktail.name} recipe`);
    card.innerHTML = `
      <img src="${cocktailImage(cocktail)}" alt="${cocktail.name}" loading="lazy" />
      <h3>${cocktail.name}</h3>
      <p>${ingredientCount(cocktail)} ingredients <span aria-hidden="true">></span></p>
    `;
    card.addEventListener("click", () => openRecipe(cocktail));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openRecipe(cocktail);
      }
    });
    els.profileSavedGrid.append(card);
  });
}

function getResultsTitle() {
  if (state.search.trim()) return "Search Results";
  if (els.inventoryPanel.classList.contains("hidden") && state.showResults) return "Matching Cocktails";
  if (state.showResults) return "Cocktails You Can Make";
  return "Popular Cocktails";
}

function openRecipe(cocktail) {
  recipeState.cocktail = cocktail;
  recipeState.servings = 1;
  recipeState.unit = "oz";
  renderRecipe();
  els.recipeSheet.classList.remove("hidden");
  document.body.classList.add("sheet-open");
}

function closeRecipe() {
  els.recipeSheet.classList.add("hidden");
  document.body.classList.remove("sheet-open");
}

function renderRecipe() {
  const cocktail = recipeState.cocktail;
  if (!cocktail) return;

  els.recipeImage.src = cocktailImage(cocktail);
  els.recipeImage.alt = cocktail.name;
  els.recipeName.textContent = cocktail.name;
  els.recipeMeta.textContent = cocktail.glass || cocktail.category || "Cocktail";
  renderScaleControls();
  renderRecipeIngredients(cocktail);
  renderInstructions(cocktail.instructions);
  renderSaveRecipeButton(cocktail);
}

function renderSaveRecipeButton(cocktail) {
  const saved = state.savedRecipes.has(cocktail.id);
  els.saveRecipe.classList.toggle("saved", saved);
  els.saveRecipe.setAttribute("aria-label", saved ? `Remove ${cocktail.name} from saved recipes` : `Save ${cocktail.name}`);
  els.saveRecipe.setAttribute("aria-pressed", String(saved));
}

function toggleSavedRecipe() {
  const cocktail = recipeState.cocktail;
  if (!cocktail) return;

  if (state.savedRecipes.has(cocktail.id)) state.savedRecipes.delete(cocktail.id);
  else state.savedRecipes.add(cocktail.id);

  saveStoredSavedRecipes();
  renderSaveRecipeButton(cocktail);
  renderProfile();
}

function renderScaleControls() {
  els.servingOptions.innerHTML = "";
  [1, 2, 3, 4, 5, 6].forEach((serving) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = serving === recipeState.servings ? "selected" : "";
    button.textContent = serving;
    button.addEventListener("click", () => {
      recipeState.servings = serving;
      renderRecipe();
    });
    els.servingOptions.append(button);
  });

  els.unitOptions.innerHTML = "";
  [
    ["ml", "mL"],
    ["oz", "oz"],
    ["part", "part"]
  ].forEach(([value, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = value === recipeState.unit ? "selected" : "";
    button.textContent = label;
    button.addEventListener("click", () => {
      recipeState.unit = value;
      renderRecipe();
    });
    els.unitOptions.append(button);
  });
}

function renderRecipeIngredients(cocktail) {
  const details = cocktail.ingredientDetails.map((item) => ({
    ...item,
    parsed: parseMeasure(item.measure)
  }));
  const baseVolume = details.find((item) => item.parsed && isVolumeUnit(item.parsed.unit))?.parsed;
  const midpoint = Math.ceil(details.length / 2);
  const columns = [details.slice(0, midpoint), details.slice(midpoint)];

  els.recipeIngredients.innerHTML = columns
    .map(
      (column) => `
        <div>
          ${column
            .map((item) => {
              const measure = formatMeasure(item.parsed, item.measure, recipeState.servings, recipeState.unit, baseVolume);
              return `<p>${measure ? `<span>${measure}</span> ` : ""}${item.name}</p>`;
            })
            .join("")}
        </div>
      `
    )
    .join("");
}

function renderInstructions(instructions) {
  const steps = splitInstructions(instructions);
  els.recipeInstructions.innerHTML = steps
    .map((step, index) => `<div class="instruction-step"><p>Step ${index + 1}</p><p>${step}</p></div>`)
    .join("");
}

function splitInstructions(instructions) {
  const clean = (instructions || "No instructions provided.").replace(/\s+/g, " ").trim();
  const sentences = clean.split(/(?<=[.!?])\s+/).filter(Boolean);
  if (sentences.length <= 4) return sentences;
  return sentences.reduce((groups, sentence) => {
    const last = groups[groups.length - 1];
    if (!last || last.length > 95 || groups.length >= 4) groups.push(sentence);
    else groups[groups.length - 1] = `${last} ${sentence}`;
    return groups;
  }, []);
}

function parseMeasure(measure) {
  if (!measure) return null;
  const normalized = measure.replace(/½/g, "1/2").replace(/¼/g, "1/4").replace(/¾/g, "3/4").trim();
  const range = normalized.match(/^([\d.]+(?:\/[\d.]+)?)\s*-\s*([\d.]+(?:\/[\d.]+)?)\s*([a-zA-Z]+)?/);
  if (range) {
    const low = numberFromToken(range[1]);
    const high = numberFromToken(range[2]);
    const amount = (low + high) / 2;
    return { amount, unit: normalizeUnit(range[3] || "") };
  }
  const match = normalized.match(/^([\d.]+(?:\/[\d.]+)?)(?:\s+([\d.]+\/[\d.]+))?\s*([a-zA-Z]+)?/);
  if (!match) return null;
  const amount = numberFromToken(match[1]) + (match[2] ? numberFromToken(match[2]) : 0);
  if (!Number.isFinite(amount) || amount <= 0) return null;
  return { amount, unit: normalizeUnit(match[3] || "") };
}

function numberFromToken(token) {
  if (token.includes("/")) {
    const [top, bottom] = token.split("/").map(Number);
    return top / bottom;
  }
  return Number(token);
}

function normalizeUnit(unit) {
  const value = unit.toLowerCase().replace(/\./g, "");
  if (["oz", "ounce", "ounces"].includes(value)) return "oz";
  if (["cl"].includes(value)) return "cl";
  if (["ml"].includes(value)) return "ml";
  if (["tsp", "teaspoon", "teaspoons"].includes(value)) return "tsp";
  if (["tblsp", "tbsp", "tablespoon", "tablespoons"].includes(value)) return "tbsp";
  if (["cup", "cups"].includes(value)) return "cup";
  if (["dash", "dashes"].includes(value)) return "dash";
  return value;
}

function isVolumeUnit(unit) {
  return ["oz", "cl", "ml", "tsp", "tbsp", "cup"].includes(unit);
}

function toOz(amount, unit) {
  const conversions = { oz: 1, cl: 0.33814, ml: 0.033814, tsp: 0.166667, tbsp: 0.5, cup: 8 };
  return amount * (conversions[unit] || 0);
}

function formatMeasure(parsed, original, servings, targetUnit, baseVolume) {
  if (!parsed) return original || "";
  const scaled = parsed.amount * servings;
  if (!isVolumeUnit(parsed.unit)) {
    return `${formatNumber(scaled)} ${parsed.unit || ""}`.trim();
  }

  const ounces = toOz(scaled, parsed.unit);
  if (!ounces) return `${formatNumber(scaled)} ${parsed.unit}`.trim();
  if (targetUnit === "ml") return `${formatNumber(ounces * 29.5735)} mL`;
  if (targetUnit === "part") {
    const baseOz = baseVolume ? toOz(baseVolume.amount * servings, baseVolume.unit) : ounces;
    return `${formatNumber(ounces / baseOz)} part`;
  }
  return `${formatNumber(ounces)} oz`;
}

function formatNumber(value) {
  if (value >= 10) return String(Math.round(value));
  return String(Math.round(value * 4) / 4).replace(/\\.00$/, "");
}

function render() {
  renderView();
  renderCategories();
  renderOptions();
  renderInventory();
  renderCocktails();
  renderMyBar();
  renderProfile();
  updatePageJumpButton();
}

els.showSignup.addEventListener("click", () => setAuthMode("signup"));
els.showLogin.addEventListener("click", () => setAuthMode("login"));
els.authModeButtons.forEach((button) => {
  button.addEventListener("click", () => setAuthMode(button.dataset.authMode));
});
els.continueGuest.addEventListener("click", () => startSession(guestUser, false));
els.signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = els.signupName.value.trim();
  const email = els.signupEmail.value.trim().toLowerCase();
  const password = els.signupPassword.value;
  const confirm = els.signupConfirm.value;

  if (password !== confirm) {
    els.signupMessage.textContent = "Passwords do not match.";
    return;
  }

  const user = { name, email };
  startSession(user);
});
els.loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = els.loginEmail.value.trim().toLowerCase();
  const saved = loadStoredUser();

  if (!saved) {
    els.loginMessage.textContent = "Create an account first on this device.";
    return;
  }

  if (saved.email !== email) {
    els.loginMessage.textContent = "No saved account found for that email.";
    return;
  }

  startSession(saved);
});

els.recipeSearch.addEventListener("input", (event) => {
  state.search = event.target.value;
  state.showResults = Boolean(state.search.trim());
  state.cocktailPage = 1;
  renderCocktails();
});

els.closeFilters.addEventListener("click", () => {
  state.activeCategory = null;
  state.cocktailPage = 1;
  render();
});

els.applyFilters.addEventListener("click", () => {
  state.showResults = true;
  state.cocktailPage = 1;
  renderCocktails();
  document.querySelector("#resultsTitle").scrollIntoView({ behavior: "smooth", block: "start" });
});

els.findRecipesButton.addEventListener("click", () => {
  state.showResults = true;
  state.activeCategory = null;
  state.cocktailPage = 1;
  els.inventoryPanel.classList.add("hidden");
  render();
  document.querySelector("#resultsTitle").scrollIntoView({ behavior: "smooth", block: "start" });
});

els.navHome.addEventListener("click", openHome);
els.homeButtons.forEach((button) => {
  button.addEventListener("click", openHome);
});
els.inventoryButton.addEventListener("click", () => openMyBar("dashboard"));
els.navInventory.addEventListener("click", () => openMyBar("dashboard"));
els.navProfile.addEventListener("click", openProfile);
els.profileButtons.forEach((button) => {
  button.addEventListener("click", openProfile);
});
els.copyInventoryBackup.addEventListener("click", copyInventoryBackup);
els.restoreInventoryBackup.addEventListener("click", restoreInventoryBackup);
els.selectInventoryBackup.addEventListener("click", selectInventoryBackup);
els.applyInventoryBackup.addEventListener("click", applyInventoryBackup);
els.undoRemoveIngredient.addEventListener("click", undoRemoveIngredient);
els.closeInventory.addEventListener("click", () => {
  els.inventoryPanel.classList.add("hidden");
});

els.myInventoryToggle.addEventListener("click", () => {
  state.myBarTab = "inventory";
  renderMyBar();
});
els.myRecipesToggle.addEventListener("click", () => {
  state.myBarTab = "recipes";
  state.myBarMode = "dashboard";
  renderMyBar();
});
els.seeRecipesButton.addEventListener("click", openMyRecipes);
els.ingredientSearch.addEventListener("input", (event) => {
  state.ingredientSearch = event.target.value;
  state.ingredientPage = 1;
  if (state.myBarMode !== "browser") {
    state.myBarMode = "browser";
    state.myBarCategory = state.easyMode ? "alcohol" : "all";
  }
  renderMyBar();
});
els.estimatorRecipeSelect.addEventListener("change", (event) => {
  estimatorState.recipeId = event.target.value;
  renderEstimator();
});
els.addSelectedIngredients.addEventListener("click", applyPendingIngredients);
els.easyModeToggle.addEventListener("change", () => {
  state.easyMode = els.easyModeToggle.checked;
  state.myBarCategory = state.easyMode ? "alcohol" : "all";
  state.myBarMode = "dashboard";
  state.ingredientPage = 1;
  renderMyBar();
});

els.pageJumpButton.addEventListener("click", jumpPageScroll);
window.addEventListener("scroll", updatePageJumpButton, { passive: true });
window.addEventListener("resize", updatePageJumpButton);

els.closeRecipe.addEventListener("click", closeRecipe);
els.saveRecipe.addEventListener("click", toggleSavedRecipe);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeRecipe();
});

render();
