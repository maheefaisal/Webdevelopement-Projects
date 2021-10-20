jQuery(document).ready(function () {
  jQuery(".popupopen").click(function () {
    jQuery(".popupbox").dialog({
      show: {
        effect: "explode",
        duration: "1000",
      },
      hide: {
        effect: "blind",
        duration: "4000",
      },
    });
  });
});
