//menu
function openSlideMenu(){
      document.getElementById('side-menu').style.width = '100%';
       document.getElementById('side-menu').style.height = 'auto';
    }

    function closeSlideMenu(){
      document.getElementById('side-menu').style.width = '0';
}
//smooth scrolling
$(document).ready(function(){
	$('a[href^="#"]').on('click', function(el){
		el.preventDefault();

		var target = this.hash;
		var $target = $(target);

		// Scroll and show hash
		$('html, body').animate({
			'scrollTop': $target.offset().top
				}, 700, 'swing', function(){
					window.location.hash = target;
		});
	});
});


// Animations
window.sr = ScrollReveal();
      sr.reveal('.box-photo', {
        duration: 1200,
        reset: false,
        origin: 'bottom',
        opacity: 0
      });
     
      sr.reveal('.btn-submit', {
        duration: 1200,
        reset: false,
        origin: 'bottom',
        distance: '100px',
        scale: 0.5
      });
      
       sr.reveal('.btn-booking', {
        duration: 1200,
        reset: false,
        origin: 'bottom',
        distance: '100px',
        scale: 0.5
      });