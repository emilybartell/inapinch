//Hillary's header shrink magic
$(document).ready( function() {
  function handleScroll(){
    if ( $(document).scrollTop() > 100){
      $("header").addClass("shrink");
      $("#title").hide();
      $("#logo").hide();
      $("header").removeClass("page-header");
    }

    if( $(document).scrollTop() < 100){
      $("header").removeClass("shrink");
      $("#title").show();
      $("#logo").show();
      $("header").addClass("page-header");
    }
  }

  handleScroll();

  $(document).on("scroll", function() {
    handleScroll();
  });

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
});
