$(document).ready(function(){
  $("#word-puzzle").submit(function(event){
    event.preventDefault();
    var stringInput = $("input#puzzle").val();
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
      debugger;
    }

    document.getElementById("word-puzzle").reset();

    $("#output").text(outputString);

  });
});
