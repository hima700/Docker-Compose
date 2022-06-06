var el = document.getElementById("Intro");
el.classList.add("Try_font");

$(document).ready(function(){
  $("#Intro").css("background-color", "white");

  $("a").click(function(){
    alert("You will be directed to the Link");
  });
  
  $(".btn1").click(function(){
    $("header").hide();
  });
  $(".btn2").click(function(){
    $("header").show();
  });

});
