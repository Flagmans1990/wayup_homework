let card = document.querySelectorAll('.card');
let btn = document.querySelector('.btn');
let offerH = document.querySelector('.offer h1');
console.log(offerH);

btn.onclick = () => {
    card[1].style.marginTop = '-50px';
}


// $(function() {
//   $( window ).scroll(function() {
//     console.log('ok');
//     $('.form').each(function() {
//       let imagePos = $(this).offset().top;
  
//       let topOfWindow = $(window).scrollTop();
//       if (imagePos < topOfWindow + 650) {
//         $(this).addClass('animate__animated animate__backInRight');
//       }
//     });
//   });
// });
$(function() {
  $( window ).scroll(function() {
    $( ".card" ).addClass('active');
  });
  $( window ).scroll(function() {
    $( ".form" ).addClass('active animate__animated animate__slideInUp');
  });
});