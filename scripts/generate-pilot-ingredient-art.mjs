import { mkdirSync, writeFileSync } from "node:fs";

const outputDir = new URL("../assets/generated/ingredients/", import.meta.url);
mkdirSync(outputDir, { recursive: true });

const ingredients = [
  ["Vodka", "clearBottle"],
  ["Gin", "clearBottleHerb"],
  ["Tequila", "goldBottleLime"],
  ["White Rum", "clearBottleLime"],
  ["Dark Rum", "amberBottle"],
  ["Whiskey", "amberBottle"],
  ["Bourbon", "amberBottle"],
  ["Scotch", "amberBottle"],
  ["Brandy", "amberSnifter"],
  ["Cognac", "amberSnifter"],
  ["Triple Sec", "orangeBottle"],
  ["Cointreau", "orangeBottle"],
  ["Campari", "redBottle"],
  ["Aperol", "orangeBottle"],
  ["Kahlua", "coffeeBottle"],
  ["Baileys", "creamBottle"],
  ["Amaretto", "amberBottle"],
  ["Blue Curacao", "blueBottle"],
  ["Vermouth", "greenBottle"],
  ["Sweet Vermouth", "redBottle"],
  ["Lime Juice", "limeJuice"],
  ["Lemon Juice", "lemonJuice"],
  ["Orange Juice", "orangeJuice"],
  ["Cranberry Juice", "redJuice"],
  ["Pineapple Juice", "pineappleJuice"],
  ["Grapefruit Juice", "pinkJuice"],
  ["Soda Water", "sparkleBottle"],
  ["Tonic Water", "sparkleBottle"],
  ["Ginger Beer", "gingerBottle"],
  ["Ginger Ale", "gingerBottle"],
  ["Simple Syrup", "syrupBottle"],
  ["Grenadine", "redSyrup"],
  ["Honey Syrup", "honeySyrup"],
  ["Agave Syrup", "agaveSyrup"],
  ["Sugar", "sugarBowl"],
  ["Brown Sugar", "brownSugarBowl"],
  ["Maple Syrup", "mapleSyrup"],
  ["Coconut Syrup", "coconutSyrup"],
  ["Ginger Syrup", "gingerSyrup"],
  ["Vanilla Syrup", "vanillaSyrup"],
  ["Lime", "lime"],
  ["Lemon", "lemon"],
  ["Orange", "orange"],
  ["Mint", "mint"],
  ["Egg White", "egg"],
  ["Cream", "cream"],
  ["Coffee", "coffee"],
  ["Bitters", "bitters"],
  ["Angostura Bitters", "bitters"],
  ["Orange Bitters", "orangeBitters"]
];

const slug = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const colors = {
  blue: "#0e6095",
  glass: "rgba(255,255,255,.52)",
  highlight: "rgba(255,255,255,.82)",
  shadow: "rgba(0,0,0,.24)",
  amber: "#b86f24",
  gold: "#d69a33",
  red: "#b31932",
  orange: "#e77b28",
  green: "#2fa95b",
  blueLiquid: "#23a4d8",
  cream: "#ead8b8",
  coffee: "#4c2418",
  lemon: "#f3d94d",
  lime: "#73bb42",
  pink: "#e98885"
};

function base(content) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1402 1122" role="img">
  <defs>
    <radialGradient id="light" cx="47%" cy="24%" r="58%">
      <stop offset="0" stop-color="#ffffff" stop-opacity=".32"/>
      <stop offset=".55" stop-color="#67bde6" stop-opacity=".13"/>
      <stop offset="1" stop-color="#0e6095" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#fff" stop-opacity=".62"/>
      <stop offset=".42" stop-color="#fff" stop-opacity=".18"/>
      <stop offset="1" stop-color="#fff" stop-opacity=".5"/>
    </linearGradient>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="28" stdDeviation="24" flood-color="#001525" flood-opacity=".35"/>
    </filter>
  </defs>
  <rect width="1402" height="1122" fill="${colors.blue}"/>
  <rect width="1402" height="1122" fill="url(#light)"/>
  <ellipse cx="701" cy="936" rx="360" ry="54" fill="${colors.shadow}"/>
  <g filter="url(#softShadow)">${content}</g>
</svg>`;
}

function bottle(liquid = colors.amber, accent = colors.gold, extra = "") {
  return `
    <path d="M604 202h194v132c0 42 48 72 48 133v392c0 64-52 116-116 116h-58c-64 0-116-52-116-116V467c0-61 48-91 48-133V202Z" fill="url(#glassGrad)" stroke="rgba(255,255,255,.72)" stroke-width="10"/>
    <rect x="621" y="119" width="160" height="112" rx="34" fill="url(#glassGrad)" stroke="rgba(255,255,255,.66)" stroke-width="9"/>
    <path d="M577 510h248v337c0 39-32 71-71 71H648c-39 0-71-32-71-71V510Z" fill="${liquid}" opacity=".9"/>
    <path d="M627 251c-2 101-50 119-50 218v85" fill="none" stroke="${colors.highlight}" stroke-width="13" stroke-linecap="round" opacity=".7"/>
    <circle cx="829" cy="258" r="19" fill="${accent}" opacity=".9"/>
    ${extra}`;
}

function snifter(liquid = colors.amber) {
  return `
    <path d="M513 300c0-34 376-34 376 0v235c0 98-75 181-169 191v118h111v76H571v-76h111V726c-94-10-169-93-169-191V300Z" fill="url(#glassGrad)" stroke="rgba(255,255,255,.68)" stroke-width="10"/>
    <path d="M545 438h312v95c0 86-70 156-156 156s-156-70-156-156v-95Z" fill="${liquid}" opacity=".88"/>
    <path d="M581 336c-11 82-17 172 11 232" fill="none" stroke="${colors.highlight}" stroke-width="14" stroke-linecap="round" opacity=".65"/>`;
}

function juice(liquid, garnish = "lime") {
  const fruit = fruitShape(garnish, 514, 760, 112);
  return `
    <path d="M548 251h306l-34 636c-3 58-51 103-109 103h-20c-58 0-106-45-109-103L548 251Z" fill="url(#glassGrad)" stroke="rgba(255,255,255,.68)" stroke-width="10"/>
    <path d="M589 481h224l-21 386c-2 34-30 60-64 60h-54c-34 0-62-26-64-60l-21-386Z" fill="${liquid}" opacity=".9"/>
    <path d="M607 320c4 140 4 276 19 412" fill="none" stroke="${colors.highlight}" stroke-width="13" stroke-linecap="round" opacity=".65"/>
    ${fruit}`;
}

function bowl(fill = "#fff", seed = "#eee") {
  return `
    <ellipse cx="701" cy="494" rx="214" ry="92" fill="${fill}" opacity=".96"/>
    <path d="M490 496c24 187 110 297 211 297s187-110 211-297c-80 63-342 63-422 0Z" fill="url(#glassGrad)" stroke="rgba(255,255,255,.68)" stroke-width="10"/>
    ${Array.from({ length: 16 }, (_, i) => {
      const x = 540 + (i % 8) * 45;
      const y = 450 + Math.floor(i / 8) * 54 + (i % 2) * 10;
      return `<circle cx="${x}" cy="${y}" r="17" fill="${seed}" opacity=".82"/>`;
    }).join("")}`;
}

function fruitShape(kind, x = 701, y = 545, size = 168) {
  const map = {
    lime: [colors.lime, "#d8f38e"],
    lemon: [colors.lemon, "#fff3a3"],
    orange: [colors.orange, "#ffd28b"],
    grapefruit: [colors.pink, "#ffd5c8"]
  };
  const [outer, inner] = map[kind] || map.lime;
  return `
    <circle cx="${x}" cy="${y}" r="${size}" fill="${outer}"/>
    <circle cx="${x}" cy="${y}" r="${size * 0.75}" fill="${inner}" opacity=".92"/>
    ${Array.from({ length: 8 }, (_, i) => {
      const angle = (Math.PI * 2 * i) / 8;
      const x2 = x + Math.cos(angle) * size * 0.65;
      const y2 = y + Math.sin(angle) * size * 0.65;
      return `<line x1="${x}" y1="${y}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="rgba(255,255,255,.62)" stroke-width="8"/>`;
    }).join("")}`;
}

function herb() {
  return `
    <path d="M692 812c-10-195 38-350 141-465" fill="none" stroke="#155f37" stroke-width="16" stroke-linecap="round"/>
    ${Array.from({ length: 9 }, (_, i) => {
      const x = 600 + (i % 3) * 72;
      const y = 328 + i * 54;
      const rot = i % 2 ? -28 : 24;
      return `<ellipse cx="${x}" cy="${y}" rx="52" ry="92" fill="${colors.green}" transform="rotate(${rot} ${x} ${y})"/>`;
    }).join("")}`;
}

function coffee() {
  return `
    <path d="M512 381h342v207c0 93-75 168-168 168h-6c-93 0-168-75-168-168V381Z" fill="${colors.coffee}" opacity=".94"/>
    <path d="M861 444h64c59 0 107 48 107 107s-48 107-107 107h-64v-66h55c23 0 42-19 42-42s-19-42-42-42h-55v-64Z" fill="url(#glassGrad)"/>
    <ellipse cx="683" cy="382" rx="172" ry="45" fill="#9c5a35"/>
    <path d="M569 236c-35 37-35 72 0 108M696 210c-35 37-35 72 0 108M823 236c-35 37-35 72 0 108" fill="none" stroke="rgba(255,255,255,.62)" stroke-width="16" stroke-linecap="round"/>`;
}

function egg() {
  return `
    <ellipse cx="701" cy="582" rx="188" ry="248" fill="#f5efe1"/>
    <circle cx="701" cy="628" r="86" fill="#efb339"/>
    <path d="M596 416c-35 86-35 189-5 285" fill="none" stroke="${colors.highlight}" stroke-width="16" stroke-linecap="round" opacity=".55"/>`;
}

function syrup(liquid, accent = colors.gold) {
  return bottle(liquid, accent, `<path d="M862 766c93 41 131 101 94 150-43 56-146 18-183-59" fill="${liquid}" opacity=".78"/><circle cx="946" cy="914" r="20" fill="${accent}"/>`);
}

function art(type) {
  if (type.includes("Snifter")) return base(snifter(colors.amber));
  if (type === "lime") return base(fruitShape("lime"));
  if (type === "lemon") return base(fruitShape("lemon"));
  if (type === "orange") return base(fruitShape("orange"));
  if (type === "mint") return base(herb());
  if (type === "egg") return base(egg());
  if (type === "coffee") return base(coffee());
  if (type === "sugarBowl") return base(bowl("#f7f5ec", "#fff"));
  if (type === "brownSugarBowl") return base(bowl("#b66c35", "#d59a5b"));
  if (type.includes("Juice")) {
    const color = type === "limeJuice" ? colors.lime : type === "lemonJuice" ? colors.lemon : type === "orangeJuice" ? colors.orange : type === "redJuice" ? colors.red : type === "pinkJuice" ? colors.pink : colors.gold;
    const garnish = type === "lemonJuice" ? "lemon" : type === "orangeJuice" ? "orange" : type === "pinkJuice" ? "grapefruit" : "lime";
    return base(juice(color, garnish));
  }
  if (type.includes("Syrup")) {
    const liquid = type === "redSyrup" ? colors.red : type === "coconutSyrup" ? colors.cream : type === "vanillaSyrup" ? "#d9bb87" : type === "mapleSyrup" ? "#8a451c" : type === "gingerSyrup" ? "#c9833b" : colors.gold;
    return base(syrup(liquid));
  }
  if (type === "blueBottle") return base(bottle(colors.blueLiquid, "#bdefff"));
  if (type === "redBottle") return base(bottle(colors.red, "#ffb3a7"));
  if (type === "orangeBottle") return base(bottle(colors.orange, "#ffd28b", fruitShape("orange", 506, 789, 86)));
  if (type === "greenBottle") return base(bottle("#63824a", "#d7e6b8"));
  if (type === "coffeeBottle") return base(bottle(colors.coffee, "#c38b57", coffeeBeanCluster()));
  if (type === "creamBottle") return base(bottle(colors.cream, "#fff2d2"));
  if (type === "sparkleBottle") return base(bottle("#d6f5ff", "#fff", sparkle()));
  if (type === "gingerBottle") return base(bottle("#c9833b", "#f4cf8e", ginger()));
  if (type === "goldBottleLime") return base(bottle(colors.gold, "#f0d76f", fruitShape("lime", 512, 789, 86)));
  if (type === "clearBottleLime") return base(bottle("#eafaff", "#bdefff", fruitShape("lime", 512, 789, 86)));
  if (type === "clearBottleHerb") return base(bottle("#eafaff", "#bdefff", herbMini()));
  if (type === "orangeBitters") return base(bottle(colors.orange, "#ffd28b", fruitShape("orange", 506, 789, 80)));
  if (type === "bitters") return base(bottle("#5a2b19", "#d49a5b"));
  return base(bottle(colors.amber, colors.gold));
}

function sparkle() {
  return Array.from({ length: 18 }, (_, i) => {
    const x = 610 + (i % 5) * 45;
    const y = 540 + Math.floor(i / 5) * 74;
    return `<circle cx="${x}" cy="${y}" r="${8 + (i % 3) * 3}" fill="#fff" opacity=".78"/>`;
  }).join("");
}

function ginger() {
  return `<path d="M456 805c68-56 163-80 234-45 43 21 49 77 11 107-80 64-203 25-245-62Z" fill="#d99b4c"/><path d="M482 804c66 20 121 16 178-16" fill="none" stroke="#9c632b" stroke-width="11" stroke-linecap="round"/>`;
}

function coffeeBeanCluster() {
  return Array.from({ length: 7 }, (_, i) => {
    const x = 493 + (i % 4) * 48;
    const y = 795 + Math.floor(i / 4) * 48;
    return `<ellipse cx="${x}" cy="${y}" rx="23" ry="34" fill="#4b2418" transform="rotate(${20 - i * 9} ${x} ${y})"/><path d="M${x} ${y - 25}c-14 17-14 34 0 50" fill="none" stroke="#8a4e2d" stroke-width="5" stroke-linecap="round"/>`;
  }).join("");
}

function herbMini() {
  return `<path d="M503 836c12-67 41-121 88-164" fill="none" stroke="#155f37" stroke-width="10" stroke-linecap="round"/><ellipse cx="561" cy="724" rx="34" ry="58" fill="${colors.green}" transform="rotate(33 561 724)"/><ellipse cx="516" cy="777" rx="30" ry="52" fill="${colors.green}" transform="rotate(-31 516 777)"/>`;
}

ingredients.forEach(([name, type]) => {
  writeFileSync(new URL(`${slug(name)}.svg`, outputDir), art(type));
});

console.log(`Generated ${ingredients.length} ingredient assets.`);
