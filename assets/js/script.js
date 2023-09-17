function show(anything) {
  document.querySelector('.selectBox').value = anything;
}

let select = document.querySelector('.select');
select.onclick = function(){
  select.classList.toggle('active');
}

const button = document.querySelector('button');
button.addEventListener('click', function (event) {
  alert("Masih Belum Fungsi Bang!!");
});

function navBar() {
  var x = document.getElementById("navbar");
  if (x.className === "resnavbar") {
    x.className += " responsive";
  } else {
    x.className = "resnavbar";
  }
}

const navShadow = document.querySelector('nav');
const navText = document.querySelectorAll('.navText');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navShadow.style.boxShadow = "-3px -4px 6px black";
    navShadow.style.backgroundColor = "rgb(253, 192, 80)";
    for (const nav of navText) {
      nav.style.color = "white";
    }
    document.getElementsByClassName('fa fa-bars')[0].style.color = "white";

  } else {
    navShadow.style.boxShadow= "none";
    navShadow.style.backgroundColor = "white";
    for (const nav of navText) {
      nav.style.color = "rgb(253, 192, 80)";
    }
    document.getElementsByClassName('fa fa-bars')[0].style.color = "rgb(253, 192, 80)";

  }
}

