var overlayTimer = 0,
    hasClass = false,
    pointerOverlay = document.getElementById('pointerOverlay');

function toggleOverlay() {
    clearTimeout(overlayTimer);
    if (!hasClass) {
        pointerOverlay.classList.add("__auto");
        hasClass = true;
    }
    overlayTimer = setTimeout(function() {
        pointerOverlay.classList.remove("__auto");
        hasClass = false;
    }, 200);
}

window.addEventListener("scroll", toggleOverlay, false)