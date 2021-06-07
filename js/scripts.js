$(document).ready(function() {
  $("#word").submit(function(event) {
    event.preventDefault();
    const sentence = $("#sentence").val();
    const sentenceArray = sentence.split(" ");
    let reverseArray = newArray.reverse();
    let newArray = []

    sentenceArray.forEach(function(word){
      if(word.length >= 3) {
        newArray.push(word)
      }
    })

    $("#result").text(newArray)
  })
})