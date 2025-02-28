
$('.burger-button, .menu__link').on('click', function(){
  $('.menu__list').toggleClass('active');
  $('.burger-button').toggleClass('active');
  $('body').toggleClass('lock');
});

$(function () {
  var mixer = mixitup('.portfolio__content')
});

$(document).ready(function () {
  $(".menu__list",).on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();  

      var id = $(this).attr('href'),

      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 1500);
  });
});

$(document).ready(function () {
  $(".header__order").on("click", function (event) {
    event.preventDefault();

    var id = $(this).attr('href'),

      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 1500);
  });
});

$(document).ready(function () {
  $(".logo").on("click", function (event) {
    event.preventDefault();

    var id = $(this).attr('href'),

      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 1500);
  });
});

const menu = document.getElementById("menu")

window.addEventListener("scroll", function() {
  const scrollPos = window.scrollY

  if (scrollPos>50) {
    menu.classList.add("sticky")

  } else {
    menu.classList.remove("sticky")
  }
   
})



