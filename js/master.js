$(document).on("scroll", function() {
  console.log( $(document).scrollTop() );
  if ( $(document).scrollTop() > 100){
    $("header").addClass("shrink");
    $("#title").hide();
    $("#logo").hide();
  }

  if( $(document).scrollTop() < 100){
    $("header").removeClass("shrink");
    $("#title").show();
    $("#logo").show();
  }

});
