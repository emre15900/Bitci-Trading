$(document).ready(function () {
  // Times Active
  $(".time-value").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // Times Filter
  $(".graphic-item").hide();
  $(".twenty-four-hour").show();
  $(".time-value").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".graphic-item").hide("100");
    } else {
      $(".graphic-item")
        .not("." + value)
        .hide("100");
      $(".graphic-item")
        .filter("." + value)
        .show("100");
    }
  });

  // Times Active
  $(".var-trading").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

});
