// index.js
// nav menu - burger menu
(function() {
    var burgerMenu = document.getElementsByClassName('b-menu')[0];
    var burgerNav = document.getElementsByClassName('b-nav')[0];

    burgerMenu.addEventListener('click', function toggleClasses() {
            this.classList.toggle('open');
            burgerNav.classList.toggle('open');
    }, false);
})();

// main
const elDownloadBtn = $('main .download .btn-dwnld');
const elUl = $('main .download ul');

// download-button(jquery)
$('html').on("click", function(evt){
    if(evt.target.nodeName == 'BUTTON'){
        $('.download ul').stop().slideDown(10);
    }else{
        $('.download ul').stop().slideUp(10);
    }
})
// download-button menu(jquery)
const storeMenu = $('main .download ul li');

storeMenu.hover(function(){
    storeMenu.find('A').removeClass('active');
    $(this).find('A').addClass('active');
})

// move-page-button(jquery)
$('main .move-page svg').on("click",function(){
    $('html').animate( { scrollTop : $('main .cont-1').offset().top }, 500 );
})

// element Bottom Screen Check Function(JS)
function isElementUnderBottom(elem, triggerDiff) {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
}

// scroll Event Handler Function(JS)
function handleScroll() {
    const elems = document.querySelectorAll('.up-on-scroll');
    elems.forEach(elem => {
        if (isElementUnderBottom(elem, -20)) {
            elem.style.opacity = "0";
            elem.style.transform = 'translateY(70px)';
        } else {
            elem.style.opacity = "1";
            elem.style.transform = 'translateY(0px)';
        }
    })
}

// scrollimg event function(JS)
window.addEventListener('scroll', handleScroll);

// opacity change(Jquery)
function changeOpacity(){
    const imgs = $('main .cont-4 .main-4-1 .main-4-1-cont div figure img');
    const fig = $('main .cont-4 .main-4-1 .main-4-1-cont div figure');
    let refVal1 = fig.offset().top - $(window).height();

    if( ($(window).scrollTop() - refVal1) > 100 ){
        imgs.eq(2).animate({opacity:1},500)
        imgs.eq(4).animate({opacity:1},500)
    }
    if( ($(window).scrollTop() - refVal1) > 200){
        imgs.eq(1).animate({opacity:1},500)
        imgs.eq(5).animate({opacity:1},500)
    }
    if( ($(window).scrollTop() - refVal1) > 300){
        imgs.eq(0).animate({opacity:1},500)
        imgs.eq(6).animate({opacity:1},500)
    }

};
window.addEventListener('scroll',changeOpacity);

// image width control
const bgimg = $('main .cont-4 .main-4-2');
let refval2 = bgimg.offset().top - $(window).height();

function imageWidth(){
    if($(window).scrollTop() - refval2 > 200){
        bgimg.width('70%');
    }
    if($(window).scrollTop() - refval2 > 300){ 
        bgimg.width('73%');
    }
    if($(window).scrollTop() - refval2 > 400){ 
        bgimg.width('76%');
    }
    if($(window).scrollTop() - refval2 > 500){ 
        bgimg.width('80%');
    }
    if($(window).scrollTop() - refval2 > 600){ 
        bgimg.width('85%');
    }
    if($(window).scrollTop() - refval2 > 700){ 
        bgimg.width('90%');
    }
    if($(window).scrollTop() - refval2 > 800){ 
        bgimg.width('95%');
    }
    if($(window).scrollTop() - refval2 > 900){ 
        bgimg.width('100%');
    }
}
window.addEventListener('scroll',imageWidth)




