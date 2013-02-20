/**
 * Created with IntelliJ IDEA.
 * User: xiaoxiao
 * Date: 2/19/13
 * Time: 9:46 PM
 * To change this template use File | Settings | File Templates.
 */




(function() {

    var cursorPart = document.getElementById("cursor-part");

    var cursorMove = function(e) {
        cursorPart.style.top = e.screenY - 5 + "px";
        cursorPart.style.left = e.screenX + "px";
    };

    if (cursorPart != null) {
        var frameContent = document.getElementById("frame-content");
        if (window.addEventListener) {
            document.addEventListener('mousemove', cursorMove);
            frameContent.addEventListener('mousemove', cursorMove);
        }
        else {
            document.attachEvent('mousemove', cursorMove);
            frameContent.addEventListener('mousemove', cursorMove);
        }

    }
})();

