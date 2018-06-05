$(document).ready(function(){
  var stringInput = "";

  $("#word-puzzle").submit(function(event){
    event.preventDefault();
    stringInput = $("input#puzzle").val();
    var inputArray = stringInput.split("");

    var outputArray = inputArray.map(function(letter){
      if(letter.toUpperCase() === "A"||letter.toUpperCase() === "E"||letter.toUpperCase() === "I"||letter.toUpperCase() === "O"||letter.toUpperCase() === "U"){
        return "-";
      } else {
        return letter;
      };
    });

    var outputString = "";
    for (count = 0; count < outputArray.length; count +=1){
      outputString = outputString.concat(outputArray[count]);
    }

    // document.getElementById("word-puzzle").reset();
    $("#word-puzzle").trigger("reset");

    $("#output").text(outputString);
    $(".output-area").show();

  });
  $("button#reveal").click(function(){
    $("#output-reveal").text(stringInput);
  });
});
