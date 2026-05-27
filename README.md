# Simple Homebar

A mobile-first working prototype based on the Figma Homepage screens.

## Run it

```bash
npm start
```

Then open:

```text
http://localhost:5173
```

## Screen map

- Homepage: default Discover screen with search, categories, CTA, and popular cocktails.
- Homepage 2: tap Ingredient.
- Homepage 3: tap Flavor.
- Homepage 4: tap Mood.
- Homepage 5: tap Season.
- Homepage 6: tap "Find recipes" or apply filters to see an expanded scored recipe list.

The cocktail database lives in `src/cocktails.js` and includes 426 bundled recipes with ingredients, measurements, instructions, flavor tags, mood tags, season tags, images, and inventory matching. It was generated from TheCocktailDB public API with:

```bash
node scripts/build-cocktail-db.mjs
```

Recipe pages include serving scaling from 1-6 and unit toggles for oz, mL, and parts. Volume measurements are converted automatically; garnish/count ingredients scale by serving count when the source measurement can be parsed.

## My Bar

The My Bar tab now includes the My Inventory flow from Figma:

- Main My Inventory dashboard
- Add/search screens for All, Spirits, Liqueurs, Mixers, Sweeteners, Pantry, and Bitters
- Ingredient selection with an Add Ingredient(s) action
- My Recipes tab that uses the saved inventory to suggest matching cocktails
- Ingredient search is derived from the bundled cocktail database, currently 288 normalized ingredients across the six My Bar categories.
