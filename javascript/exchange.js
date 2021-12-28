$(document).ready(function () {
  $(".button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});
