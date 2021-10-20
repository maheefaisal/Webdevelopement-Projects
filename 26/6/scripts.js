jQuery(document).ready(function () {
  jQuery("#movingthree").click(function () {
    jQuery("#boxone").slideDown(5000);
  });

  jQuery("#movingfour").click(function () {
    jQuery("#boxone").stop();
  });
});
