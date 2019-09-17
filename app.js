
let firstPic = document.querySelector('#firstphotolink');
let secondPic = document.querySelector('#secondphotolink');




firstPic.addEventListener('mouseover', function () {
   let changeBackground = firstPic.querySelector('div');
    changeBackground.style.display = 'none'

});
firstPic.addEventListener('mouseout', function() {
    let changeBackground = firstPic.querySelector('div');
    changeBackground.style.display = 'block'
});
secondPic.addEventListener('mouseover', function () {
    let changeBackground = secondPic.querySelector('div');
    changeBackground.style.display = 'none'
});
secondPic.addEventListener('mouseout', function () {
    let changeBackground = secondPic.querySelector('div');
    changeBackground.style.display = 'block'
});


var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}