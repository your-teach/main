let images = [];
var N = 15;
for (let i = 1; i < N + 1; i++) { 
    images.push(document.querySelector('img.gallery#img' + String(i)));
}

arr_owsR = document.querySelector('.material-symbols-outlined#one');
arr_owsL = document.querySelector('.material-symbols-outlined#two');

function setPosition() {
for (let i = 0; i < N; i++) { 
    images[i].style.display = 'inline-block';
    images[i].style.right = '0px';
    images[i].style.transition = '0s';
    images[i].style.translate = '900px';
    images[i].style.top = '0px';
}

// images.at(-1).style.transition = '0s';
// images.at(-1).style.translate = '0px';
// images.at(-1).style.right = '900px';



images[images.length - 1].style.transition = '0s';
images[images.length - 1].style.translate = '0px';
images[images.length - 1].style.right = '900px';

images[1].style.transition = '0s';
images[1].style.translate = '0px';
images[1].style.right = '-900px';

images[0].style.translate = '0px';
images[0].style.opacity = '1';
}
setPosition();
// console.log();

function right() {
    // if (screen.width > 480) {
    for (let i = 2; i < N - 1; i++) {  // было i = 2
        // images[i].style.transition = '0s';
        // images[i].style.display = 'block';
        images[i].style.opacity = '0';
    }

    images[0].style.right = '0px';
    images[0].style['transition'] = '1.48s';
    // images[0].style['-webkit-transition'] = '1.48s';
    images[0].style['translate'] = '-900px';
    images[0].style.opacity = '.1';

    // -webkit-transition: top 1s ease-out 0.5s;
    //  -moz-transition: top 1s ease-out 0.5s;
    //  -o-transition: top 1s ease-out 0.5s;
    //  transition: top 1s ease-out 0.5s;

    // images[0].style.width = '50%';


    images[1].style.opacity = '1';
    images[1].style.display = 'inline-block';
    images[1].style.right = '-900px';
    images[1].style.transition = '1.48s';
    images[1].style.translate = '-900px';
 //////////////
    // images[1].style.right = '0px';
    // images[1].style.translate = '0px';
    // images[1].style.zIndex = '10009';
    // images[1].style.transition = '0s';
    /////////////////////
    images[2].style.transition = '0s';
    images[2].style.translate = '0px';
    images[2].style.right = '-900px';

    images.push(images.shift()); // берем первый элемент shift() и кидаем его в конец push()
    console.log(images[0]);
}

function left() {
    // if (screen.width > 480) {
    console.log('left');

    for (let i = 2; i < N - 1; i++) { 
        images[i].style.opacity = '0';
    }

    images[0].style.right = '0px';
    images[0].style.transition = '1.48s';
    images[0].style.translate = '900px';
    images[0].style.opacity = '.1';

    // images.at(-1).style.opacity = '1';
    // images.at(-1).style.display = 'inline-block';
    // images.at(-1).style.right = '900px';
    // images.at(-1).style.transition = '1.48s';
    // images.at(-1).style.translate = '900px';

    images[images.length - 1].style.opacity = '1';
    images[images.length - 1].style.display = 'inline-block';
    images[images.length - 1].style.right = '900px';
    images[images.length - 1].style.transition = '1.48s';
    images[images.length - 1].style.translate = '900px';
    

    images[images.length - 2].style.transition = '0s';
    images[images.length - 2].style.translate = '0px';
    images[images.length - 2].style.right = '900px';

    images.unshift(images.pop()); // берем первый элемент shift() и кидаем его в конец push()
    // setPosition();
    // console.log(images);
}
// var tbl = document.querySelector('table');
// function openImage() {
//     tbl.style.border = '1px solid blue';
//     tbl.style.position = 'absolute';
//     // tbl.style.width = '100%';
// }

function mgEm() {
    $('#magnify_emulation').css({
        left: ($(document).width() - $('#magnify_emulation').outerWidth())/2,
        top: ($('section#top').height() - $('#magnify_emulation').outerHeight())/2,
        width: '90%',
        height: 'auto',
    });
    $('#magnify_emulation img').css({
        width: '100%',
    });
    if ($(window).height() < $('#magnify_emulation').outerHeight()) {
        $('#magnify_emulation img').css({
            width: 'auto',
            height: $('section#top').height(),
        });
        $('#magnify_emulation').css({
            width: 'auto',
            height: $('section#top').height(),
        });
        // Нужно здесь еще раз изменить css свойства. В первый раз - изменяем и сохраняем размеры, а во второй считаем исходя из этих размеров.
        $('#magnify_emulation').css({
            left: ($(document).width() - $('#magnify_emulation').outerWidth())/2,
            top: ($('section#top').height() - $('#magnify_emulation').outerHeight())/2,
        });
    }
    // $('#magnify_emulation').fadeIn('fast');
}

function rightHide() {
    for (let i = 0; i < N; i++) { 
        images[i].style.opacity = '0';
        // images[i].style.display = 'none';
    }
}

var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
if (isFirefox) {
    var magnify = '#magnify';
} else {
    var magnify = '#magnify_emulation';
}
console.log(magnify, 'magnify');
function changePhoto() {
    images.push(images.shift());
    setPosition();
    rightHide();
    console.log(images[0]);

    
    $("#magnify").replaceWith(`
    <div id="magnify">
        <img onclick="changePhoto();" src="`+images[0].src+`">
    </div>
    `)
    
    if ($(window).height() < $(magnify).outerHeight()) {
        // var test = document.querySelector('#magnify');
        $('#magnify img').css({
            width: 'auto',
            height: $(window).height(),
        });
        $('#magnify').css({
            width: 'auto',
            height: $(window).height(),
        });
        // Нужно здесь еще раз изменить css свойства. В первый раз - изменяем и сохраняем размеры, а во второй считаем исходя из этих размеров.
        $('#magnify').css({
            left: ($(document).width() - $(magnify).outerWidth())/2,
            top: ($('section#top').height() - $(magnify).outerHeight())/2,
        });
    } else {
        $('#magnify').css({
            left: ($(document).width() - $(magnify).outerWidth())/2,
            top: ($('section#top').height() - $(magnify).outerHeight())/2,
        });
    }
    $('#overlay, #magnify').fadeIn('fast');
}

$(window).on("load", function () { 
    mgEm();

    $(function(){
        $('.gallery').click(function(event) {
            $('body').append(`
            <div id="overlay"></div>
            <div id="magnify">
                <img onclick="changePhoto();" src="`+images[0].src+`">
            </div>
            <div id="close-popup">
                <span class="material-symbols-outlined">close</span>
            </div>
            `);
            rightHide(); // ТУТ ТОЖЕ НАДО ХАЙДИТЬ
            arr_owsR.style.opacity = '0';
            arr_owsL.style.opacity = '0';
            if ($(window).height() < $(magnify).outerHeight()) {
                // var test = document.querySelector('#magnify');
                $('#magnify img').css({
                    width: 'auto',
                    height: $(window).height(),
                });
                $('#magnify').css({
                    width: 'auto',
                    height: $(window).height(),
                });
                // Нужно здесь еще раз изменить css свойства. В первый раз - изменяем и сохраняем размеры, а во второй считаем исходя из этих размеров.
                $('#magnify').css({
                    left: ($(document).width() - $(magnify).outerWidth())/2,
                    top: ($('section#top').height() - $(magnify).outerHeight())/2,
                });
            } else {
                $('#magnify').css({
                    // Здесь как раз и используем картинки-эмулятор (#magnify_emulation) для выравнивания
                    left: ($(document).width() - $(magnify).outerWidth())/2,
                    // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
                    top: ($('section#top').height() - $(magnify).outerHeight())/2,
                });
            }
            $('#overlay, #magnify').fadeIn('fast');
        });
        $('body').on('click', '#close-popup, #overlay', function(event) {
            event.preventDefault();
            $('#overlay, #magnify').fadeOut('fast', function() {
                $('#magnify, #overlay, #close-popup').remove();
                setPosition();
                arr_owsR.style.opacity = '1';
                arr_owsL.style.opacity = '1';
            });
        });
    });
})


// Триггер изменения разрешения окна
// Во всех браузерах в принципе и так работает подравнивание элементов при ресайзе, кроме хрома...
window.addEventListener("resize", function() {
    mgEm(); // Очень странно работает. На уменьшение - нет. А при увеличении страницы происходит предполагаемое подравнивание.
    console.log('resize');
});