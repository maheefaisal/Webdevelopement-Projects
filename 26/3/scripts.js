// One
jQuery(document).ready(function () {
  jQuery("#clickme").click(function () {
    jQuery("#paraone").toggle(), jQuery("#paratwo").toggle();
  });
});

// Two
jQuery(document).ready(function () {
  jQuery("#hidingfunction").click(function () {
    jQuery("#two").hide(1000), jQuery("#two-second").hide(1000);
  });
});

// Three
jQuery(document).ready(function () {
  jQuery("#hidingmechanism").click(function () {
    jQuery("#three").hide();
  });
  jQuery("#showingfunction").click(function () {
    jQuery("#three").show();
  });
});
