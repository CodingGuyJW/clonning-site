// index.js
// header
// nav menu 

// burger menu
(function() {
    var burgerMenu = document.getElementsByClassName('b-menu')[0];
    var burgerNav = document.getElementsByClassName('b-nav')[0];

    burgerMenu.addEventListener('click', function toggleClasses() {
            this.classList.toggle('open');
            burgerNav.classList.toggle('open');
    }, false);
})();

// main
const elDownload = $('.main-1');
const elLi = $('main .main-1 ul li');
// const elVid = $('main .main-1 .bg-vid');

elDownload.on("click", function(evt){
    evt.preventDefault();
    if(evt.target.nodeName == 'A'){
        elLi.find('div').stop().slideDown(10);
    }else{
        elLi.find('div').stop().slideUp(10);
    }
})


