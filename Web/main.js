// for prototype purpose
list1 = ["Home", "Flickr", "Messenger", "Sports", "Finance", "Autos", "Beauty", "Movies"]
list2 = ["Business", "Cricket", "Tech", "World", "News", "Support"]
// start

var playing = 0;


function rotate () {
    if (playing) {

    };
}

function addTrackMenu (track, arg) {
    html = "<ul class=\"pure-menu-list\">";
    for (var i = arg.length - 1; i >= 0; i--) {
        html = html + "<li class=\"pure-menu-item\"><a href=\"#\" class=\"pure-menu-link\">"+arg[i]+"</a></li>";
    };
    html = html + "</ul>";
    $(track).html(html);
}

document.addEventListener("DOMContentLoaded", function(event) { 
    console.log("ready");
    var cover_height = $(".splash-container").height() / 2;
    console.log("height:" + cover_height);
    $(".img-wrapper").height($(".img-wrapper").width());
    $("#blank").height(cover_height/6);
    $("#track1_button").click(function () {
        $("#track1").toggle()
    });
    $("#track2_button").click(function () {
        $("#track2").toggle()
    });
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
    updateTrackMenu();
});

// on query response
function updateTrackMenu () {
    addTrackMenu("#track1", list1);
    addTrackMenu("#track2", list2);
}