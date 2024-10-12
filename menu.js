(function(){  // анонимная функция (function(){ })(), чтобы переменные "a" и "b" не стали глобальными
var a = document.querySelector('#menu'), b = null;  // селектор блока, который нужно закрепить
var menu_ul = a.querySelectorAll('ul');
var select_mode = document.querySelector('#select_mode')
var score = 0;
window.addEventListener('scroll', Ascroll, false);
document.body.addEventListener('scroll', Ascroll, false);  // если у html и body высота равна 100%
// menu_hover[0].style.display = 'none';
function Ascroll() {
  if (b == null) {  // добавить потомка-обёртку, чтобы убрать зависимость с соседями
    var Sa = getComputedStyle(a, ''), s = '';
    for (var i = 0; i < Sa.length; i++) {  // перечислить стили CSS, которые нужно скопировать с родителя
      if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
      }
    }
    b = document.createElement('div');  // создать потомка
    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
    a.insertBefore(b, a.firstChild);  // поместить потомка в цепляющийся блок
    var l = a.childNodes.length;
    for (var i = 1; i < l; i++) {  // переместить во вновь созданного потомка всех остальных потомков плавающего блока (итого: создан потомок-обёртка)
      b.appendChild(a.childNodes[1]);
    }
    a.style.height = b.getBoundingClientRect().height + 'px';  // если под скользящим элементом есть другие блоки, можно своё значение
    a.style.padding = '0';
    a.style.border = '0';  // если элементу присвоен padding или border
  }
  
  if (a.getBoundingClientRect().top <= 30) { // elem.getBoundingClientRect() возвращает в px координаты элемента относительно верхнего левого угла области просмотра окна браузера
    b.className = 'sticky';
    a.style.opacity = '1';
    
  } else {
    b.className = '';
    // a.style.opacity = '0.2'  
  }
  if (a.getBoundingClientRect().top > score) {
    score = a.getBoundingClientRect().top;
  }
  var finish = score - (score * 0.02)
  if (a.getBoundingClientRect().top > finish) {
    a.style.opacity = '1';
  }
  var transform_menu_top = score - (score * 0.5)
  if (a.getBoundingClientRect().top < transform_menu_top) {
    // Страницу листают вниз, меню цепляется за топ
    // menu_ul[0].style.bottom = '-86.5px';
    menu_ul[0].style.bottom = '0px';
    menu_ul[0].style.top = '4px';
    select_mode.style.bottom = '-91px';
  } else {
    // Стиль, когда страница возвращается в самый верх
    menu_ul[0].style.top = 'auto';
    menu_ul[0].style.bottom = '14px';
    select_mode.style.bottom = '14px';
  }
  // if (a.getBoundingClientRect().top > finish) {
    
  // }

  window.addEventListener('resize', function() {
    a.children[0].style.width = getComputedStyle(a, '').width
  }, false);  // если изменить размер окна браузера, измениться ширина элемента
  
}
})()

