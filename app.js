const $gifArea = $("#gif-area");
const $searchInput = $("#search");


/* use ajax result to add a gif */

function addGif(res) {
  let numResults = res.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
    let $newGif = $("<img>", {
      src: res.data[randomIdx].images.original.url,
      class: "w-100"
    });
    $newCol.append($newGif);
    $gifArea.append($newCol);
  }
}

/* handle form submission: clear search box & make ajax call */

$("form").on("submit", function (e) {
  e.preventDefault();

  let searchTerm = $searchInput.val();
  $searchInput.val("");

  $.get(
    "//api.giphy.com/v1/gifs/search",
    { q: searchTerm, api_key: "G8vYr8T6crBB6uv6azGMtVDn2RLbmK6T" },
    addGif);
});

/* remove gif */

$("#remove").on("click", function () {
  $gifArea.empty();
});
