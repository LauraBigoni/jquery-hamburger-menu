$(document).ready(function () {
  // Salvo il menu in una variabile
  const menu = $('.menu--mobile');
  console.log(menu);

  // Senza toggle
  // $('.hamburger').click(function () {

  //   // Faccio un controllo
  //   if ($(this).hasClass('is-active')) {

  //     // Se c'è la classe active la tolgo
  //     $(this).removeClass('is-active white');
  //     menu.removeClass('visible');

  //   } else {
  //     // Altrimenti la aggiungo
  //     $(this).addClass('is-active white');
  //     menu.addClass('visible');
  //   }
  // });

  // Con toggle
  $('.hamburger').click(function () {
    $(this).toggleClass('is-active white');
    menu.toggleClass('visible');
  });
});