function redirectToUrl(button) {
    var url = button.getAttribute('data-href');
    window.location.href = url;
}