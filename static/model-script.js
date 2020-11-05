
$("#open-model-modal-btn").click(function() {
  var modalId = $(this).attr("data-target");
  $("#" + modalId).addClass("is-active"); 
});
 
$(".modal-close").click(function() {
  $(this).parent().removeClass("is-active");
});

lightGallery(document.getElementById('lightgallery'), {
  thumbnail: true
});