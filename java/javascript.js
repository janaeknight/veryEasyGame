var ohBrother = document.getElementById("soundOhBrother");

function playOhBrother() {
    ohBrother.play();
} function pauseOhBrother() {
    ohBrother.pause();
}



var Q = [
    "Worst dissappointment - hoveboards or apple watch?",
    "What song video is this shot from? - Cups, Anna Kendrick.",
    "What famous 🍑 is this? (Harley Quinn/Margot Robbie) Jennifer Anison, Kim K, etc",
    "Ani-bandz",
    "Purple Palace/Putt Putt",
    "What is this called? Meme rage face?"
]

var A = [
    "104", // e. None of the above
    "202", // 21,
    "300", // an oxymoron
    "401", // Carly Shay
    "500", // 🐓
    "601", // First of the Year (Equinox)
    "701", // Puffles
    "802", // Barack Obama
    "900", // Slenderman
    "", // 
    "" // 
]



function startgame() {
    $("#start").hide();
    $("#stages").show();
    $(".stage").hide();
    $("#set1").show();
    //$("#set10").show();
}

$("a").click(function() {
    var userA = $(this).data("id") // will return the data-id string
    console.log(userA);

    var thisStage = $(this).closest('.stage');
    var nextStage = $(thisStage).next('.stage');

    thisStage.hide();
    nextStage.show();

    updateGame();
});


var questionNum = $("#questionNum").text;

function updateGame() {
    questionNum+1;
    console.log(questionNum);
}
