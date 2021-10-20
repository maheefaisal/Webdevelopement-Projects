jQuery(document).ready(function () {
  jQuery("footer").append("");
  jQuery(".smallbox").draggable();
  jQuery(".slightlysmallbox").draggable();
  jQuery(".box").droppable({
    drop: function () {
      jQuery(".overlay").remove();
    },
    accept: ".smallbox",
  });
});
