//Hillary's header shrink magic
$(document).ready( function() {
  function handleScroll(){
    if ( $(document).scrollTop() > 100){
      $("header").addClass("shrink");
      $("#pinchYatTitle").hide();
      $("#logo").hide();
      $("header").removeClass("page-header");
    }

    if( $(document).scrollTop() < 100){
      $("header").removeClass("shrink");
      $("#pinchYatTitle").show();
      $("#logo").show();
      $("header").addClass("page-header");
    }
  }

  handleScroll();

  $(document).on("scroll", function() {
    handleScroll();
  })
});


//Jesiah contact form validation and success message

  $(document).ready( function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add('was-validated')
          $("#alert-sucess").hide("slow");
        } else {
          $("#alert-sucess").show("slow");
          $("#contact-form").removeClass("was-validated");
          $("#contact-form")[0].reset();
        }
      });
    });
});
