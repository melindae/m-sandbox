
$(document).ready(function() {
  $( "p" ).click(function() {
  
    if($("p").hasClass("blue")){
      $( this ).removeClass("blue").addClass("red");
      $("p").html("I'm a red button");
    }
  
    else {
      $( this ).removeClass("red").addClass("blue");
      $("p").html("I'm a blue button");
    }
  });
});
