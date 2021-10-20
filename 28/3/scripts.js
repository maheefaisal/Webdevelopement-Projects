jQuery(document).ready(function () {
  jQuery(".something").accordion({
    collapsible: true,
  });
  var guesswords = ["mahee", "faisal", "wahed", "poly", "batman"];
  jQuery(".input").autocomplete({
    source: guesswords,
  });

  jQuery(".many").buttonset();

  jQuery("input.time").datepicker({
    changeMonth: true,
    changeYear: true,
  });
});
