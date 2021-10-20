jQuery(document).ready(function () {
  jQuery("#resizing").resizable({
    maxHeight: 350,
    maxWidth: 400,
    minHeight: 200,
    minWidth: 50,
  });
  jQuery("#resizingtwo").resizable({
    ghost: true,
  });
  jQuery("#selectable").selectable({});
  jQuery("#menustyle").menu({});
  jQuery("#height").tooltip({});
});
