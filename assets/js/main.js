/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

	// Back to Top Button (with on-page debug)
		var backToTopButton = $('#backToTop');

		// If jQuery didn't find it, check native DOM and rewrap
		if ((!backToTopButton || backToTopButton.length === 0) && document.getElementById('backToTop')) {
			backToTopButton = $(document.getElementById('backToTop'));
			console.log('BackToTop: found via document.getElementById');
		}

		// If still missing, create a fallback button and append to body
		if (!backToTopButton || backToTopButton.length === 0) {
			console.warn('BackToTop button missing; creating fallback instance');
			var fallback = '<a id="backToTop" class="back-to-top" href="#header"><i class="fas fa-chevron-up"></i></a>';
			$body.append(fallback);
			backToTopButton = $('#backToTop');
		}

		if (!backToTopButton || backToTopButton.length === 0) {
			console.warn('BackToTop button not found: #backToTop');
		} else {
			console.log('BackToTop button found, ready');
		}

		$window.on('scroll', function() {
			var st = $window.scrollTop();
			if (st > 100) {
				if (backToTopButton && backToTopButton.length) {
					backToTopButton.addClass('show');
					backToTopButton.css('display', 'flex');
				}
			} else {
				if (backToTopButton && backToTopButton.length) {
					backToTopButton.removeClass('show');
					backToTopButton.css('display', 'none');
				}
			}
		});

		// Trigger a scroll event on load to set initial state
		$window.trigger('scroll');

		backToTopButton.on('click', function(e) {
			e.preventDefault();
			$('html, body').animate({scrollTop: 0}, 600);
		});

})(jQuery);