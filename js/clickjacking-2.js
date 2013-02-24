/**
 * Created with IntelliJ IDEA.
 * User: xiaoxiao
 * Date: 2/19/13
 * Time: 9:46 PM
 * To change this template use File | Settings | File Templates.
 */




(function() {

    var cursorPart = document.getElementById("cursor-part");
    var mainDiv = document.getElementById("main");
    mainDiv.style.cursor = "none";

    var cursorMove = function(e) {
        cursorPart.style.top = e.screenY - 90 + "px";
        cursorPart.style.left = e.screenX + "px";
        var mainDiv = document.getElementById("main");
        mainDiv.style.cursor = "none";
    };

    if (cursorPart != null) {
        if (window.addEventListener) {
            document.addEventListener('mousemove', cursorMove);
        }
        else {
            document.attachEvent('mousemove', cursorMove);
        }

    }
})();

