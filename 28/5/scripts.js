jQuery(document).ready(function () {
  jQuery("#sorting").sortable({
    revert: true,
  });
  jQuery("#dragging").draggable({
    connectToSortable: "#sorting",
    helper: "clone",
    revert: "invalid",
  });
  jQuery("ul,li").disableSelection({});
});
