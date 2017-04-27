scripts.js
$(document).ready(function() {
  $("form#matchmaker").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var personality = $("select#personality").val()
    if (age <=30) {
        if (true) {

        }
    }
      $("#celebrity").empty().append(statement);
      $("#statment").show();
    } else {
      alert('Please enter your age.');
    }

    event.preventDefault();
  });
});
