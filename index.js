function alternar2(el, el2) {
    var div = document.getElementsByClassName(el);
    var id = document.getElementById(el2);
    for (var i = 0; i < div.length; i++) {
        if (div[i] == id) {
            div[i].style.display = 'block';
        } else {
            div[i].style.display = 'none';
        }
    }
}
