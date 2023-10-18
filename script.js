let timeout;

$('.portfolio-button').on('mousedown mouseup', function (event) {
    if (event.type === 'mousedown') {
        timeout = setInterval(scrollUp, 0);
    } else {
        clearInterval(timeout);
    }

    return false;
});

function scrollUp() {
    window.scrollBy(0, -1); //adjust the scrolling speed by changing the value
}
