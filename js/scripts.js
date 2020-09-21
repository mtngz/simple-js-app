let pokemonRepository = (function () {
  let pokemonList = [
    { name: "Venusaur", height: 2, weight: 100, types: ["grass", "poison"] },
    { name: "Charizard", height: 1.7, weight: 90.5, types: ["fire", "flying"] },
    { name: "Blastoise", height: 1.6, weight: 85.5, types: ["water"] },
    { name: "Raichu", height: 0.8, weight: 30, types: ["electric"] },
  ];

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "weight" in pokemon &&
      "types" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      alert("Incorrect Pokémon!");
    }
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
  };
})();

let newPokemonList = pokemonRepository.getAll();

newPokemonList.forEach(function (pokemon) {
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
