$(function () {

  $(".btn-primary").on("click", function (evt) {
    evt.preventDefault();
    let $query = $(".search-bar").val();
    // console.log($query);


    let gif = getGif($query);
    $("form").trigger("reset");
    // showGif(gif)

  });

  $(".btn-danger").on("click", function (evt) {
    evt.preventDefault();
    let ele = document.querySelector(".gif-div");
    clearDomElement(ele);
  });

  function clearDomElement(ele) {
    while (ele.firstChild) {
      ele.removeChild(ele.firstChild);
    }
  }


  async function getGif(query) {
    let apiURL = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`;
    let results = await $.get(apiURL, function (res) {

      showGif(res.data[0].images.original.url);
      // console.log(res.data[0].images.original.url);

      // return ;

    });
  }

  function showGif(imgLink) {
    const $gifDiv = $('.gif-div');
    let gifCard = $(
      `<div class="col-md-4">
                <div>
                    <img src="${imgLink}" alt="">
                </div>
            </div>`
    );
    $gifDiv.append(gifCard);
  }


});