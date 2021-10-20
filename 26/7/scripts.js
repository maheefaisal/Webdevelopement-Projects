jQuery(document).ready(function () {
  jQuery("#one").click(function () {
    jQuery("#paraone").hide(1000);
    alert("This is awesome");
  });
});

jQuery(document).ready(function () {
  jQuery("#two").click(function () {
    jQuery("#paratwo").hide("slow", function () {
      alert("This is awesome");
    });
  });
});
