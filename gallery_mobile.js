let mob_images = [];
var N = 15;
for (let i = 1; i < N + 1; i++) { 
    mob_images.push(document.querySelector('img.mob-gallery#img' + String(i)));
}

var shift_rt = 1200; // на сколько сдвигаем по бокам картинки, которые должны идти после нажатия кнопок вправо/влево
var time_transition = 1; // 1.48

$(window).on("load", function () { 
    if (screen.width > 0) {
        shift_rt = screen.width;
    }
})
function setPositionMob() {
for (let i = 0; i < N; i++) { 
    mob_images[i].style.display = 'inline-block';
    mob_images[i].style.right = '0px';
    mob_images[i].style.transition = '0s';
    mob_images[i].style.translate = String(shift_rt) + 'px';
    mob_images[i].style.top = '0px';
}

mob_images[mob_images.length - 1].style.transition = '0s';
mob_images[mob_images.length - 1].style.translate = '0px';
mob_images[mob_images.length - 1].style.right = String(shift_rt) + 'px';

mob_images[1].style.transition = '0s';
mob_images[1].style.translate = '0px';
mob_images[1].style.right = '-' + String(shift_rt) + 'px';

mob_images[0].style.translate = '0px';
mob_images[0].style.opacity = '1';
}
setPositionMob();

function rightMob() {
    for (let i = 2; i < N - 1; i++) {
        mob_images[i].style.opacity = '0';
    }
    mob_images[0].style.right = '0px';
    mob_images[0].style['transition'] = String(time_transition) + 's';
    mob_images[0].style['translate'] = '-' + String(shift_rt) + 'px';
    mob_images[0].style.opacity = '.1';

    mob_images[1].style.opacity = '1';
    mob_images[1].style.display = 'inline-block';
    mob_images[1].style.right = '-' + String(shift_rt) + 'px';
    mob_images[1].style.transition = String(time_transition) + 's';
    mob_images[1].style.translate = '-' + String(shift_rt) + 'px';

    mob_images[2].style.transition = '0s';
    mob_images[2].style.translate = '0px';
    mob_images[2].style.right = '-' + String(shift_rt) + 'px';

    mob_images.push(mob_images.shift()); // берем первый элемент 'shift()' и кидаем его в конец 'push()'
}

function leftMob() {
    for (let i = 2; i < N - 1; i++) { 
        mob_images[i].style.opacity = '0';
    }

    mob_images[0].style.right = '0px';
    mob_images[0].style.transition = String(time_transition) + 's';
    mob_images[0].style.translate = String(shift_rt) + 'px';
    mob_images[0].style.opacity = '.1';

    mob_images[mob_images.length - 1].style.opacity = '1';
    mob_images[mob_images.length - 1].style.display = 'inline-block';
    mob_images[mob_images.length - 1].style.right = String(shift_rt) + 'px';
    mob_images[mob_images.length - 1].style.transition = String(time_transition) + 's';
    mob_images[mob_images.length - 1].style.translate = String(shift_rt) + 'px';
    
    mob_images[mob_images.length - 2].style.transition = '0s';
    mob_images[mob_images.length - 2].style.translate = '0px';
    mob_images[mob_images.length - 2].style.right = String(shift_rt) + 'px';

    mob_images.unshift(mob_images.pop()); // берем последний элеменет 'pop()' и ставим его в начало 'unshift()'
}