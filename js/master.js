<<<<<<< HEAD
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
=======
//contact form validation
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
>>>>>>> 4c4b576e9eee4a3f11566ad7e1b9049e72dc7284
