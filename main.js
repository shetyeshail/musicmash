var playing = 0;

function rotate () {
    if (playing) {

    };
}

document.addEventListener("DOMContentLoaded", function(event) { 
    console.log("ready");
    var cover_height = $(".splash-container").height() / 2;
    console.log("height:" + cover_height);
    $("#blank").height(cover_height/6);
    $("#play_button").click(function () {
        console.log("click")
        if (playing) {
            console.log("pause");
            playing = 0;
            $("#play_button").text("Play");
            $(".img-wrapper").css("-webkit-animation-play-state", "paused");
            $(".img-wrapper").css("-moz-animation-play-state", "paused");
            $(".img-wrapper").css("-animation-play-state", "paused");
        } else {
            console.log("play");
            playing = 1;
            $("#play_button").text("Pause");
            $(".img-wrapper").css("-webkit-animation-play-state", "running");
            $(".img-wrapper").css("-moz-animation-play-state", "running");
            $(".img-wrapper").css("-animation-play-state", "running");
        }
    }); 
});