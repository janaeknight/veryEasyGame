var ohBrother = document.getElementById("soundOhBrother");

function playOhBrother() {
    ohBrother.play();
} function pauseOhBrother() {
    ohBrother.pause();
}



var Q = [
    "What does the fox say? Nobody Nose",
    "Worst dissappointment - hoveboards or apple watch?",
    "Who is this? Obama.",
    "What Carly is this? Carly Rae Jepsen/Carly Shay",
    "What song video is this shot from? - Cups, Anna Kendrick.",
    "What's that song that goes dunDunDUnDun daDunDUnDUnDDUnDUNDunDUND MEROW duNDUnDUNDuNDuNDUN nuNunuNuNAtcha?",
    "(Finish this) Walk into the store like - Whaddup I got a big (🐓) - Thrift Store",
    "What famous 🍑 is this? (Harley Quinn/Margot Robbie) Jennifer Anison, Kim K, etc",
    "What's 9+10? (21)",
    "What is this (club penguin pet)?",
    "Who is this? (Slenderman, <i>The</i> Slenderman, Skinny White Guy, Mouthface.",
    "Ani-bandz",
    "Purple Palace/Putt Putt",
    "What is this called? Meme rage face?"
]

var A = [
    //checkDataAttr in array and if none matches (-) score;
]


$("a").click(function() {
    var userA = $(this).data("id") // will return the data-id string
    console.log(userA);
});


// var divs = document.getElementsByTagName("div");
// for(var i = 0; i < divs.length; i++){
//    //do something to each div like
//    divs[i].innerHTML = "something new...";
// }








function startgame() {
    $("#start").hide();
    $("#stages").show();
    $("#stage").hide();
    $("#set1").show();
}
