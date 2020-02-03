var ohBrother = document.getElementById("soundOhBrother");
var correctSound = document.getElementById("correctSound");
var inCorrectSound = document.getElementById("inCorrectSound");
var theme = document.getElementById("theme");

function playOhBrother() {
    ohBrother.play();
} function pauseOhBrother() {
    ohBrother.pause();
}



var Q = [
    "Worst dissappointment - hoveboards or apple watch?",
    "What song video is this shot from? - Cups, Anna Kendrick.",
    "Ani-bandz",
    "Purple Palace/Putt Putt"
]

var A = [
    104, // None of the above
    202, // 21,
    300, // an oxymoron
    401, // Carly Shay
    500, // 🐓
    601, // First of the Year (Equinox)
    701, // Puffles
    802, // Barack Obama
    900, // Slenderman
    1010, // Will always be a mystery
    1101, // 
    1202, // WeeWorld
    1301, // FireFly
    1408, // Paris Hilton
    1501, // Wii Sports Theme 
    1602, // Fancy Pants 
    1702, 1705, // rage comics ,i don't know but i used them
    1802, // Only for teachers
    1904, // Lemonade Mouth
    , // 
    , // 
    , // 
    , // 
    , // 
]



function startgame() {
    $("#start").hide(); $("#stages").show();
    $(".stage").hide(); //$("#set1").show(); theme.play();
    $("#set19").show();
}

$("a").click(function() {
    var userA = $(this).data("id") // will return the data-id string
    console.log(userA);

        // Updates Score
        var scoreNum = $("#scoreNum").text();
        var nextScoreNum = "";
            if ($.inArray(userA, A) !=-1) {
                nextScoreNum = parseInt(scoreNum) + 1;
                correctSound.play();
            } else {
                nextScoreNum = parseInt(scoreNum) + 0;
                inCorrectSound.play();
            }
        $("#scoreNum").text(nextScoreNum);

        // Updates Question # 
            var currentValue = $("#questionNum").text();
            var nextQuestionNum = parseInt(currentValue) + 1;
            $("#questionNum").text(nextQuestionNum);

    var thisStage = $(this).closest('.stage');
    var nextStage = $(thisStage).next('.stage');

    thisStage.hide();
    nextStage.show();
});
