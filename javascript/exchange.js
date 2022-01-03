$(document).ready(function () {
  //Market Buy Sell Active
  $(".button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  //Search Filter
  $(".search-button").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".coin-item").filter(function () {
      $(this).toggle($(this).text().toLocaleLowerCase().indexOf(value) > -1);
    });
  });
});
