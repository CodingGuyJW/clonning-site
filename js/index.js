// index.js
// header
// nav menu 
const elNav = $('header div nav a');
const elLang = $('header div .lang li a');

elNav.hover(function(){
    $(this).css('background','#eee');
}, function(){
    $(this).css('background','#fff');
});

// language menu
elLang.hover(function(){
    $(this).css('background','#eee');
}, function(){
    $(this).css('background','#fff');
});

elLang.on('click',function(){
    elLang.removeClass('active');
    $(this).addClass('active');
})

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


