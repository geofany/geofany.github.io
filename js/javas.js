
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("menu").style.marginLeft = "100%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    fullpage_api.setAllowScrolling(false);
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("menu").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
    fullpage_api.setAllowScrolling(true);

}

function openPic() {
    document.getElementById("mySidenav2").style.width = "100%";
    fullpage_api.setAllowScrolling(false);
}

function closePic() {
    document.getElementById("mySidenav2").style.width = "0";
    fullpage_api.setAllowScrolling(true);

}




function openMenu(evt, menuName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active";
}



// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



function openMenu2(evt, menuName2) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks2");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(menuName2).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen2").click();

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" actives", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " actives";
}
