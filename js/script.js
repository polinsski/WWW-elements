$(document).ready(function() {
    $('.grid-item').click(function() {
      $(this).toggleClass('active');
      $('.slide-in-text').toggleClass('active');
    });
  });
  