
// When the user scrolls down 20px from the top of the document, show the button

var scrollFunc = function scrollFunction() {
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
};

export default scrollFunc;
