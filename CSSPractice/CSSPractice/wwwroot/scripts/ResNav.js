var element;
window.getNav = function (elementId) {
    element = document.getElementById(elementId);
}


window.myFunction = function () {

    if (element.className === "ncontainer") {
        element.className += " responsive";
    } else {
        element.className = "ncontainer";
    }
}