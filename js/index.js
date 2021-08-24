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
            //elem.style.paddingTop = '70px';
            elem.style.transform = 'translateY(70px)';
        } else {
            elem.style.opacity = "1";
            elem.style.transform = 'translateY(0px)';
        }
    })
}

// scrollimg event function(JS)
window.addEventListener('scroll', handleScroll);


