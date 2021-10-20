jQuery(document).ready(function () {
  jQuery(".box").draggable({
    // 'axis': "x",
    // axis: "y",
    // cursor: "move",
    cursor: "pointer",
    // containment: ".bigbox",
  });
  jQuery(".bigbox").droppable({
    drop: function () {
      alert("Work Done YAAAAY!!!!!");
    },
  });
});
