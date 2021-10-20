// One
// jQuery(document).ready(function () {
//   jQuery("#fadetesting").click(function () {
//     jQuery("#boxone").fadeIn();
//     jQuery("#boxtwo").fadeIn("slow");
//     jQuery("#boxthree").fadeIn(3000);
//   });
// });

jQuery(document).ready(function () {
  jQuery("#buttonforfadein").click(function () {
    jQuery("#boxone").fadeIn("fast");
    jQuery("#boxtwo").fadeIn("slow");
    jQuery("#boxthree").fadeIn(3000);
  });
  jQuery("#buttonforfadeout").click(function () {
    jQuery("#boxone").fadeOut("fast");
    jQuery("#boxtwo").fadeOut("slow");
    jQuery("#boxthree").fadeOut(3000);
  });
  jQuery("#buttonforfadetoggle").click(function () {
    jQuery("#boxone").fadeToggle("fast");
    jQuery("#boxtwo").fadeToggle("slow");
    jQuery("#boxthree").fadeToggle(3000);
  });
  jQuery("#buttonforfading").click(function () {
    jQuery("#boxone").fadeTo("slow",0.10);
    jQuery("#boxtwo").fadeTo("slow",0.20);
    jQuery("#boxthree").fadeTo("slow",0.30);
    jQuery("#boxthree").fadeTo("slow",0.40);
  });
});
// Two
// Three
// Four
