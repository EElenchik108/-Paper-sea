$(document).ready(function(){
    $('.parallax_list>li').addClass('layer');
    $('.parallax_list').parallax();
    $('.wrapper').addClass('active');
});

let whale = document.querySelector('.parallax_fish');
setInterval(()=>{
    whale.classList.toggle('animated-whale');
}, 20000);
