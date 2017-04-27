$(document).ready(function() {

  $("form#matchmaker").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var personality = $("select#personality").val();

    if (age <=30) {
      //alert("test2");
      if (personality === "jokester" ) {
         //alert("test");
        $("#celebrity").empty().append("Jessica Biel");
      } else if (personality === "timid") {
        $("#celebrity").empty().append("Selena Gomez");
      } else if (personality === "peopleperson") {
        $("#celebrity").empty().append("Justin Timberlake");
      } else {
        $("#celebrity").empty().append("Justin Bieber");
      }
    } else if (age >= 31 && age > 59) {
      if (personality === "jokester") {
          $("#celebrity").empty().append("James Franco");
      } else if (personality === "timid") {
        $("#celebrity").empty().append("Lucy Lu");
      } else if (personality === "peopleperson") {
        $("#celebrity").empty().append("Kate Hudson");
      } else {
        $("#celebrity").empty().append("Matt Damon");
      }
    } else if (age >= 60){
      if (personality === "jokester") {
        $("#celebrity").empty().append("Betty White");
      } else if (personality === "timid") {
        $("#celebrity").empty().append("Daniel Craig");
      } else if (personality === "peopleperson") {
        $("#celebrity").empty().append("Jason Bateman");
      } else {
        $("#celebrity").empty().append("Charlize Theron");
      }
    } else {
      alert('Please enter your age.');
      }

    $("#statement").show();

    event.preventDefault();
  });
});
