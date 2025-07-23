/*
	Massively by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$nav = $('#nav'),
		$main = $('#main'),
		$navPanelToggle, $navPanel, $navPanelInner;

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	/**
	 * Applies parallax scrolling to an element's background image.
	 * @return {jQuery} jQuery object.
	 */
	$.fn._parallax = function(intensity) {

		var	$window = $(window),
			$this = $(this);

		if (this.length == 0 || intensity === 0)
			return $this;

		if (this.length > 1) {

			for (var i=0; i < this.length; i++)
				$(this[i])._parallax(intensity);

			return $this;

		}

		if (!intensity)
			intensity = 0.25;

		$this.each(function() {

			var $t = $(this),
				$bg = $('<div class="bg"></div>').appendTo($t),
				on, off;

			on = function() {

				$bg
					.removeClass('fixed')
					.css('transform', 'matrix(1,0,0,1,0,0)');

				$window
					.on('scroll._parallax', function() {

						var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);

						$bg.css('transform', 'matrix(1,0,0,1,0,' + (pos * intensity) + ')');

					});

			};

			off = function() {

				$bg
					.addClass('fixed')
					.css('transform', 'none');

				$window
					.off('scroll._parallax');

			};

			// Disable parallax on ..
				if (browser.name == 'ie'			// IE
				||	browser.name == 'edge'			// Edge
				||	window.devicePixelRatio > 1		// Retina/HiDPI (= poor performance)
				||	browser.mobile)					// Mobile devices
					off();

			// Enable everywhere else.
				else {

					breakpoints.on('>large', on);
					breakpoints.on('<=large', off);

				}

		});

		$window
			.off('load._parallax resize._parallax')
			.on('load._parallax resize._parallax', function() {
				$window.trigger('scroll');
			});

		return $(this);

	};

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

	// Background.
		$wrapper._parallax(0.925);

	// Nav Panel.

		// Toggle.
			$navPanelToggle = $(
				'<a href="#navPanel" id="navPanelToggle">Menu</a>'
			)
				.appendTo($wrapper);

			// Change toggle styling once we've scrolled past the header.
				$header.scrollex({
					bottom: '5vh',
					enter: function() {
						$navPanelToggle.removeClass('alt');
					},
					leave: function() {
						$navPanelToggle.addClass('alt');
					}
				});

		// Panel.
			$navPanel = $(
				'<div id="navPanel">' +
					'<nav>' +
					'</nav>' +
					'<a href="#navPanel" class="close"></a>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-navPanel-visible'
				});

			// Get inner.
				$navPanelInner = $navPanel.children('nav');

			// Move nav content on breakpoint change.
				var $navContent = $nav.children();

				breakpoints.on('>medium', function() {

					// NavPanel -> Nav.
						$navContent.appendTo($nav);

					// Flip icon classes.
						$nav.find('.icons, .icon')
							.removeClass('alt');

				});

				breakpoints.on('<=medium', function() {

					// Nav -> NavPanel.
						$navContent.appendTo($navPanelInner);

					// Flip icon classes.
						$navPanelInner.find('.icons, .icon')
							.addClass('alt');

				});

			// Hack: Disable transitions on WP.
				if (browser.os == 'wp'
				&&	browser.osVersion < 10)
					$navPanel
						.css('transition', 'none');

	// Intro.
		var $intro = $('#intro');

		if ($intro.length > 0) {

			// Hack: Fix flex min-height on IE.
				if (browser.name == 'ie') {
					$window.on('resize.ie-intro-fix', function() {

						var h = $intro.height();

						if (h > $window.height())
							$intro.css('height', 'auto');
						else
							$intro.css('height', h);

					}).trigger('resize.ie-intro-fix');
				}

			// Hide intro on scroll (> small).
				breakpoints.on('>small', function() {

					$main.unscrollex();

					$main.scrollex({
						mode: 'bottom',
						top: '25vh',
						bottom: '-50vh',
						enter: function() {
							$intro.addClass('hidden');
						},
						leave: function() {
							$intro.removeClass('hidden');
						}
					});

				});

			// Hide intro on scroll (<= small).
				breakpoints.on('<=small', function() {

					$main.unscrollex();

					$main.scrollex({
						mode: 'middle',
						top: '15vh',
						bottom: '-15vh',
						enter: function() {
							$intro.addClass('hidden');
						},
						leave: function() {
							$intro.removeClass('hidden');
						}
					});

			});

		}

})(jQuery);




// Example usage: Replace 'yourFetchUrl' and variables as needed
function handlePredictionResponse(data) {
  if (data.prediction) {
	uploadResult.innerHTML = `<i class="fas fa-diagnoses"></i> <span>${data.prediction}</span>`;
	if (data.image_url) {
	  uploadedImage.src = data.image_url;
	  uploadPreview.classList.remove('d-none');
	}
  } else {
	uploadResult.innerHTML = `<span class="text-danger">${data.error}</span>`;
  }
}

// Example fetch usage
// fetch('yourFetchUrl', { method: 'POST', body: yourFormData })
//   .then(response => response.json())
//   .then(handlePredictionResponse)
//   .catch(error => {
//     uploadResult.innerHTML = `<span class="text-danger">An error occurred: ${error}</span>`;
//   });

// ...existing code...

// Upload Prediction Logic
document.addEventListener('DOMContentLoaded', function () {
  const uploadForm = document.getElementById('uploadForm');
  const fileInput = document.getElementById('fileInput');
  const uploadPreview = document.getElementById('uploadPreview');
  const uploadedImage = document.getElementById('uploadedImage');
  const uploadResult = document.getElementById('uploadResult');

  if (uploadForm && fileInput && uploadPreview && uploadedImage && uploadResult) {
    uploadForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const file = fileInput.files[0];
      if (file) {
        const formData = new FormData();
        formData.append('file', file);

        uploadResult.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Predicting...';

        fetch('/predict-upload', {
          method: 'POST',
          body: formData
        })
          .then(response => response.json())
          .then(data => {
            if (data.prediction) {
              uploadResult.innerHTML = `<i class="fas fa-diagnoses"></i> <span>${data.prediction}</span>`;
              if (data.image_url) {
                uploadedImage.src = data.image_url;
                uploadPreview.classList.remove('d-none');
              }
            } else {
              uploadResult.innerHTML = `<span class="text-danger">${data.error}</span>`;
              uploadPreview.classList.add('d-none');
            }
          })
          .catch(error => {
            uploadResult.innerHTML = `<span class="text-danger">An error occurred: ${error}</span>`;
            uploadPreview.classList.add('d-none');
          });
      }
    });
  }
});



// ...existing code...

// Camera Prediction Logic
document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('video');
  const startBtn = document.getElementById('startCamera');
  const snapBtn = document.getElementById('snap');
  const canvas = document.getElementById('canvas');
  const cameraPreview = document.getElementById('cameraPreview');
  const capturedImage = document.getElementById('capturedImage');
  const cameraResult = document.getElementById('cameraResult');
  const retakeBtn = document.getElementById('retake');
  let cameraStream = null;

  if (startBtn && video && snapBtn && canvas && capturedImage && cameraPreview && cameraResult && retakeBtn) {
    startBtn.addEventListener('click', () => {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
          cameraStream = stream;
          video.srcObject = stream;
          video.classList.remove('d-none');
          snapBtn.classList.remove('d-none');
          startBtn.classList.add('d-none');
          video.play();
        }).catch(() => {
          document.getElementById('cameraArea').innerHTML = '<p class="text-danger">Camera access denied or not available.</p>';
        });
      }
    });

    // ...existing code...

snapBtn.addEventListener('click', function () {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  const dataURL = canvas.toDataURL('image/png');

  // Show preview image
  capturedImage.src = dataURL;
  cameraPreview.classList.remove('d-none');
  canvas.classList.add('d-none');
  video.classList.add('d-none');
  snapBtn.classList.add('d-none');
  retakeBtn.classList.remove('d-none');
  cameraResult.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Predicting...';

  fetch('/predict-camera', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ image: dataURL })
  })
  .then(response => response.json())
  .then(data => {
    if (data.prediction) {
      cameraResult.innerHTML = `<i class="fas fa-diagnoses"></i> <span>${data.prediction}</span>`;
      // Optionally overlay prediction on image
      // ctx.font = "24px Arial";
      // ctx.fillStyle = "red";
      // ctx.fillText(data.prediction, 10, 30);
      // capturedImage.src = canvas.toDataURL('image/png');
    } else {
      cameraResult.innerHTML = `<span class="text-danger">${data.error}</span>`;
    }
  })
  .catch(err => {
    cameraResult.innerHTML = `<span class="text-danger">Error occurred</span>`;
    console.error(err);
  });
});

// ...existing code...

    retakeBtn.addEventListener('click', function () {
      cameraPreview.classList.add('d-none');
      video.classList.remove('d-none');
      snapBtn.classList.remove('d-none');
      retakeBtn.classList.add('d-none');
    });

    // Optional: Stop camera when leaving the page
    window.addEventListener('beforeunload', () => {
      if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
      }
    });
  }
});




// form 


const form = document.querySelector('form[action="https://api.web3forms.com/submit"]');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  // Show waiting message with animation
  result.className = 'form-result waiting show';
  result.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: json
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.className = 'form-result success show';
        result.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! Your message has been sent successfully.';
      } else {
        result.className = 'form-result error show';
        result.innerHTML = `<i class="fas fa-times-circle"></i> ${json.message}`;
      }
    })
    .catch(error => {
      result.className = 'form-result error show';
      result.innerHTML = '<i class="fas fa-times-circle"></i> Something went wrong!';
    })
    .then(function() {
      form.reset();
      setTimeout(() => {
        result.classList.remove('show');
      }, 3000);
    });
});
