function alternar(el, el2) {
    var div = document.getElementById(el);
    var disp = div.style.display;
    div.style.display = disp == 'none' ? 'block' : 'none';
    var div2 = document.getElementById(el2);
    var disp2 = div2.style.display;
    div2.style.display = disp2 == 'block' ? 'none' : 'block';

}
function alternar2(el, el2) {
    document.getElementById(el);
    document.getElementById(el2);
    el.style.display = 'block';
    el2.style.display = 'none';
}