jQuery(document).ready(function () {
  jQuery("#button").on("click", function () {
    jQuery("#effect").toggleClass("newClass", 2000);
  });
});
