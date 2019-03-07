$(document).ready(function () {

    $("#correct").hide();
    $("#correctscore").hide();
    $("#incorrect").hide();
    $("#incorrectscore").hide();
    $("#counter").hide();
    $("#quiz").hide();

$("#toggle").on("click", begin);

function begin(){
    $("#toggle").hide();
    $("#counter").show();
    $("#quiz").show();
    function countDown(seconds, elem) {
        var element = document.getElementById(elem);
        element.innerHTML = "" + seconds + "";
        if (seconds < 0) {
            clearTimeout(timer);
            $("#correct").show();
            $("#correctscore").show();
            $("#incorrect").show();
            $("#incorrectscore").show();
            $("#counter").hide();
            $("#quiz").hide();
        }
        seconds--;
        var timer = setTimeout(function () { countDown(seconds, "counter"); }, 1000);
    }

    countDown(20, "counter");
   
}
    var incorrect = 0;
    var correct = 0;


 //answer click functions    
$( ".correct" ).click(function() {
    correct++;
    $("#correctscore").text(correct);
    console.log(correct);
    });
    
 $(".incorrect").click(function(){
     incorrect++;
     $("#incorrectscore").text(incorrect);
     console.log(incorrect);
 })

    //timer function
    

    
    



    

});
