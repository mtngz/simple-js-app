let pokemonRepository = (function () {
  let t = [],
    e = "https://pokeapi.co/api/v2/pokemon/?limit=150",
    o = $("ul");
  function n(e) {
    "object" == typeof e && "name" in e
      ? t.push(e)
      : alert("Incorrect Pokémon!");
  }
  function a(t) {
    let e = t.detailsUrl;
    return $.ajax(e).then(function (e) {
      (t.imageUrlFront = e.sprites.front_default),
        (t.imageUrlBack = e.sprites.back_default),
        (t.height = e.height),
        (t.weight = e.weight),
        (t.types = e.types);
    });
  }
  function i(t) {
    let e = $(".modal-body"),
      o = $(".modal-title");
    o.empty(), e.empty();
    let n = $("<h1>" + t.name + "</h1>"),
      a = $('<img class="modal-img" style="width:50%">');
    a.attr("src", t.imageUrlFront);
    let i = $('<img class="modal-img" style="width:50%">');
    i.attr("src", t.imageUrlBack);
    let l = $("<h5>height: " + t.height + "</h5>"),
      r = $("<h5>weight: " + t.weight + "</h5>");
    o.append(n), e.append(a), e.append(i), e.append(l), e.append(r);
  }
  return {
    add: n,
    getAll: function () {
      return t;
    },
    addListItem: function (t) {
      let e = $("<li></li>");
      o.append(e);
      let n = $(
        "<button type='button' class='btn btn-default list-group-item col-12 text-white text-capitalize border-bottom' data-toggle='modal' data-target='#exampleModal'style='background-color: #0f125d'></button>"
      );
      n.text(t.name),
        e.append(n),
        n.on("click", function () {
          !(function (t) {
            a(t).then(function () {
              i(t);
            });
          })(t);
        });
    },
    loadList: function () {
      return $.ajax(e, { dataType: "json" })
        .then(function (t) {
          $.each(t.results, function (t, e) {
            n({ name: e.name, detailsUrl: e.url });
          });
        })
        .catch(function (t) {
          console.error(t);
        });
    },
    loadDetails: a,
    showDetails: i,
  };
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (t) {
    pokemonRepository.addListItem(t);
  });
});
