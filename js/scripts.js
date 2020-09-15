let pokemonList = [
  {name: "Venusaur", height: 2, weight: 100, types: ["grass", "poison"]},
  {name: "Charizard", height: 1.7, weight: 90.5, types: ["fire", "flying"]},
  {name: "Blastoise", height: 1.6, weight: 85.5, types: ["water"]},
  {name: "Raichu", height: 0.8, weight: 30, types: ["electric"]},
];

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height >= 2) {
    document.write("<p>" + pokemonList[i].name + " (length: " + pokemonList[i].height + ") - Wow, that’s big!</p>" );
  } else {
    document.write("<p>" + pokemonList[i].name + " (length: " + pokemonList[i].height + ")</p>" );
  }
}
