
// Клик на select_mode, изменение иконки. id="activate_mode"
console.log(getCookie("mode"));
console.log("getCookie(hello_user)", getCookie("hello_user"));
// НАЙТИ КУКИ 
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

const media_scheme = window.matchMedia('(prefers-color-scheme: dark)');

console.log(media_scheme.matches && ((getCookie("hello_user")) == undefined))
if (media_scheme.matches && ((getCookie("hello_user")) == undefined)) {document.cookie = "mode = dark; max-age=7200"; document.cookie = "hello_user = ya_tut";};
if (!(media_scheme.matches) && ((getCookie("hello_user")) == undefined)) {document.cookie = "mode = light; max-age=7200"; document.cookie = "hello_user = ya_tut";};


function blackMode(mode='None') {
  // BLACK MODE
  if (mode != 'None') {
    document.cookie = "mode = dark; max-age=7200";
    console.log(getCookie("mode"))
    mode.html('light_mode');
    mode.data('status', true);  // $(this).data('status', false);
  }
  $("section").css({"background-color":"#0d0d0d", "color": "#ffffffe6", "border-color":"#33343d"});
  $("#bottom-line").css({"background-color": "#140c1c", "color": "#ffffffe6", "border-top": "1.1px solid rgb(47, 47, 47)"});
  $("section:nth-child(2n)").css({"background": "#151515"}); //, "box-shadow": "inset 0 1px 0 0 rgb(0, 31, 31)"
  $("section:not(:last-child").css({"border-bottom": "1px solid rgba(18, 28, 50, 0.839)"});
  $("iframe#calendar_frame").css({"filter": "invert(0.8) saturate(0.5) hue-rotate(-145deg) contrast(1.5)"});
  $(".profi-widget").css({"filter": "invert(0.1) saturate(0.6) contrast(1.1)"}); // "filter": "invert(0.07)"
  // $(".profi-widget").css({"filter": "invert(0.8) saturate(0.6) contrast(1.4)"});
  // $(".profi-widget").css({"filter": "invert(0.9) saturate(0.7) hue-rotate(-145deg) contrast(1)"});
  $("#menu ul").css({"background": "rgb(13, 13, 13, .98)"});
  $("#select_mode span").css({"background": "rgb(13, 13, 13, .9)"});
  $("#menu a#toggle span").css({"background": "rgb(13, 13, 13, .9)"});
  // menu mobile
  $(".dropbtn").css({"background": "rgb(13, 13, 13, .98)"});
  $(".select_mode").css({"background": "rgb(13, 13, 13, .9)"});
  $(".dropdown-content").css({"background": "rgb(13, 13, 13, .9)"});
}

function whiteMode(mode='None') {
  // WHITE MODE
  if (mode != 'None') {
    document.cookie = "mode = light; max-age=7200";
    console.log(getCookie("mode"))
    mode.html('dark_mode'); 
    mode.data('status', false); // $(this).data('status', false);
  }
  $("section").css({"background-color":"white", "color": "#0d0d0d"});
  $("#bottom-line").css({"background-color": "#cebce1", "color": "#0d0d0d", "border-top": "1.1px solid rgb(180, 180, 180)"});
  $("section:nth-child(2n)").css({"background": "#fdfdfd"}); //, "box-shadow": "inset 0 1px 0 0 white"
  $("section:not(:last-child").css({"border-bottom": "1px solid rgba(203, 203, 203, 0.627)"});
  $("iframe").css({"filter": "none"});
  $(".profi-widget").css({"filter": "saturate(0.6)"});
  $("#menu ul").css({"background": "rgba(255,255,255, .98)"});
  $("#select_mode span").css({"background": "rgba(255,255,255,.9)"});
  $("#menu a#toggle span").css({"background": "rgba(255,255,255, .9)"}); 
  // menu mobile
  $(".dropbtn").css({"background": "rgba(255,255,255, .98)"});
  $(".select_mode").css({"background": "rgba(255,255,255,.98)"});
  $(".dropdown-content").css({"background": "rgba(255,255,255, .98)"});
}

if ((getCookie("mode")) == "dark") {
  $(document).ready(function() 
  { 
  $('#activate_mode').html('light_mode');
  $('#activate_mode').data('status', true);
  $('#activate_mode2').html('light_mode');
  $('#activate_mode2').data('status', true);
  blackMode()
  });
} else if ((getCookie("mode")) == "light"){
  $(document).ready(function() 
  {
    $('#activate_mode').html('dark_mode');
    $('#activate_mode').data('status', false);
    $('#activate_mode2').html('dark_mode');
    $('#activate_mode2').data('status', false);
    whiteMode()
  });
}

$('#activate_mode').click(function() {
    if (!$(this).data('status')) {
      blackMode($('#activate_mode'))
    }
    else {
      whiteMode($('#activate_mode'))
    }
});

$('#activate_mode2').click(function() {
  if (!$(this).data('status')) {
    blackMode($('#activate_mode2'))
  }
  else {
    whiteMode($('#activate_mode2'))
  }
});
$("div.clickProfi").click(function() {
  // let link = document.createElement("a");
  // link.href = "https://profi.ru/profile/MorozovFE";
  // link.target = "_blank";
  // document.body.appendChild(link);
  // link.click(); // Создаётся впечатление, что клик совершил пользователь!
  // document.body.removeChild(link);
  window.open('https://profi.ru/profile/MorozovFE', '_blank'); 
});