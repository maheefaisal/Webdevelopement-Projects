// jQuery(document).ready(function () {
//   jQuery("p").click(function () {
//     jQuery(this).hide();
//   });
// });

// jQuery(document).ready(function () {
//   var screensize = jQuery(window).width();

//   jQuery(window).resize(function () {
//     var screensize = jQuery(window).width();
//     jQuery(".box").text(screensize);
//   });
//   jQuery(".box").text(screensize);

// });

jQuery(document).ready(function () {
  jQuery(window).scroll(function () {
    var spacefromthetop = jQuery(window).scrollTop();
    jQuery(".box").text(spacefromthetop);
  });
});
