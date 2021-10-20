jQuery(document).ready(function () {
  jQuery(".main-menu .bar").click(function () {
    jQuery(".main-menu ul").slideToggle();
  });
  jQuery(window).resize(function () {
    var screenwidth = jQuery(window).width();
    // Style One
    if (screenwidth > 768) {
      jQuery(".main-menu ul").show();
    } else {
      jQuery(".main-menu ul").hide();
    }

    // Style Two

    // if (screenwidth > 768) {
    //   jQuery(".main-menu ul").showAttr("style");
    // }
  });

  jQuery(".main-menu ul li").click(function () {
    jQuery(this).children("ul").slideToggle(1500, "easeOutElastic");
  });

  jQuery(".main-menu ul ul")
    .parent("li")
    .children("a")
    .append(' <i class="fa fa-angle-down"></i>');
});
