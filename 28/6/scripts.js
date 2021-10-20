jQuery(document).ready(function () {
  jQuery("#dragging").draggable({ revert: true });
  jQuery("#draggingtwo").draggable({ revert: true, helper: "clone" });
});
