// jQuery(document).ready(function () {
//   jQuery("form").submit(function () {
//     var firstValue = jQuery(".first").val();
//     var secondtValue = jQuery(".second").val();
//     var totalValue = parseInt(firstValue) + parseInt(secondtValue);

//     jQuery(this).after(totalValue);
//     // alert(totalValue);
//   });
// });

jQuery(document).ready(function () {
  // jQuery("input[type='text']").focus(function () {
  //   jQuery(this).val("this is empty");
  // });
  // jQuery("input[type='text']").blur(function () {
  //   jQuery(this).val("this is not empty");
  // });

  jQuery("input[type='text']").focus(function () {
    if (jQuery("input[type='text']").val() == "") {
      jQuery("input[type='text']").val("This is empty that's why write");
    }
  });
});
