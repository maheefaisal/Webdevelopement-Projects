// $("p").text("Hello");

// const jquery = require("./jquery");

// var three = jQuery(".one").text();

// jQuery(".two").html("<h1>" + three + "</h1>");

// jQuery(".one").css('color','red').css('background','blue');

// jQuery(".one").css({ color: "blue", background: "black" });

// jQuery(".one").addClass("mahee").removeClass("one");

// jQuery(".one").attr("Mahee","present");
// jQuery("[Mahee]").css("color","blue");

// jQuery(document).ready(function () {
//   jQuery(".clickme").hover(function () {
//     jQuery(".one").toggle(1000);
//   });
// });

// jQuery(document).ready(function () {
//   jQuery(".rectangle").animate({ width: 300 }, 2000);
// });

jQuery(document).ready(function () {
  jQuery(".clickme").click(function () {
    jQuery(".rectangle")
      .animate({ left: "200" }, 2000)
      .animate({ top: "300" }, 1000)
      .animate({ left: "0" }, 1000)
      .animate({ top: "30" }, 1000);
  });

  jQuery(".freeze").click(function(){
    jQuery(".rectangle").stop();
  })
});
