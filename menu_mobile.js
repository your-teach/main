/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn, .material-symbols-outlined')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    var select_mode = document.getElementsByClassName("select_mode");
    var ui;
    for (ui = 0; ui < select_mode.length; ui++) {
      var openSelect_mode = select_mode[ui];
      if (openSelect_mode.classList.contains('show')) {
        openSelect_mode.classList.remove('show');
      }
    }
  }
}

