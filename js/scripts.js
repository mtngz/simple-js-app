let pokemonList = [
  { name: "Venusaur", height: 2, weight: 100, types: ["grass", "poison"] },
  { name: "Charizard", height: 1.7, weight: 90.5, types: ["fire", "flying"] },
  { name: "Blastoise", height: 1.6, weight: 85.5, types: ["water"] },
  { name: "Raichu", height: 0.8, weight: 30, types: ["electric"] },
];

// for (let i = 0; i < pokemonList.length; i++) {
//   if (pokemonList[i].height >= 2) {
//     document.write("<h3>" + pokemonList[i].name + "</h3>" + "<p>(height: " + pokemonList[i].height + ") - Wow, that’s big!</p>" );
//   } else {
//     document.write("<h3>" + pokemonList[i].name + "</h3>" + "<p>(height: " + pokemonList[i].height + ")</p>" );
//   }
// }

// pokemonList.forEach(function (pokemon) {
//   Object.keys(pokemon).forEach(function (property) {
//     document.write(property + ": " + pokemon[property] + "<br>");
//   });
// });

pokemonList.forEach(function (pokemon) {
  if (pokemon.height >= 2) {
    document.write(
      "<h3>" +
        pokemon.name +
        "</h3>" +
        "height: " +
        pokemon.height +
        "- Wow, that's big!" +
        "<br>" +
        "weight: " +
        pokemon.weight +
        "<br>" +
        "types: " +
        pokemon.types
    );
  } else {
    document.write(
      "<h3>" +
        pokemon.name +
        "</h3>" +
        "height: " +
        pokemon.height +
        "<br>" +
        "weight: " +
        pokemon.weight +
        "<br>" +
        "types: " +
        pokemon.types
    );
  }
});
