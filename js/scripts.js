$(document).ready(function(){
  $("form#radio").submit(function(event){
    event.preventDefault();
    var question1 = $("input:radio[name=q1]:checked").val();
    var question2 = $("input:radio[name=q2]:checked").val();
    var question3 = $("input:radio[name=q3]:checked").val();
    var question4 = $("input:radio[name=q4]:checked").val();
    var question5 = $("input:radio[name=q5]:checked").val();
    var aResults = 0;
    var bResults = 0;
    var cResults = 0;

    var outcomesArray = [question1,question2,question3,question4,question5]

    for (let i = 0; i > 5; i++) {
      if (outcomesArray[i] === "a") {
        aResults += 1;
      }
      else if (outcomesArray[i] === "b") {
        bResults += 1;
      }
      else if (outcomesArray[i] === "c") {
        cResults += 1;
      }
    }

    var initialWinner = "a";
  }
}