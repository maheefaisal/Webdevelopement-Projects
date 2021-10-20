jQuery(document).ready(function () {
  jQuery("#slidingdown").click(function () {
    jQuery("#boxone").slideDown("slow");
  });

  jQuery("#slidingup").click(function () {
    jQuery("#boxone").slideUp("slow");
  });

  jQuery("#slidingtoggle").click(function () {
    jQuery("#boxone").slideToggle("slow");
  });

  jQuery("#moving").click(function () {
    jQuery("#boxtwo").animate({ right: "400px" });
  });

  jQuery("#movingtwo").click(function () {
    jQuery("#boxthree").animate({
      right: "500px",
      opacity: "0.5",
      height: "200px",
      width: "200px",
    });
  });

  jQuery("#movingthree").click(function () {
    jQuery("#boxfour").animate({
      left: "100px",
      height: "+=200px",
      width: "+=200px",
    });
  });

  jQuery("#movingfour").click(function () {
    jQuery("#boxfive").animate({
      left: "100px",
      height: "toggle",
    });
  });


});
