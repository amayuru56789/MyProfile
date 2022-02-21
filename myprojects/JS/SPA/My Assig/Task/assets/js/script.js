$("body > section").mousemove(function (e) {
    /*console.log("Avengers");*/
    //console.log(e.pageX, e.pageY);
    $("h1").css("position", "relative");
    $("h1").css("left", e.pageX);
    $("h1").css("top", e.pageY);

});