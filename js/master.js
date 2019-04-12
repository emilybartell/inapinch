<<<<<<< HEAD

=======
>>>>>>> 30190e80a0bfe46145f3b3f5f7da81159d64b118
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
<<<<<<< HEAD

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
=======
>>>>>>> 30190e80a0bfe46145f3b3f5f7da81159d64b118
