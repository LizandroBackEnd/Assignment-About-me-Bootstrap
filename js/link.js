function redirectToUrl(button) {
    // Lee la URL desde el atributo data-href
    var url = button.getAttribute('data-href');
    // Redirige a la URL especificada
    window.location.href = url;
}