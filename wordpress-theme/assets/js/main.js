/**
 * Main theme JavaScript
 */

(function() {
	'use strict';

	// Handle contact form submission
	const contactForm = document.getElementById('contact-form');
	if (contactForm) {
		contactForm.addEventListener('submit', handleContactForm);
	}

	// Handle quote form submission
	const quoteForm = document.getElementById('quote-form');
	if (quoteForm) {
		quoteForm.addEventListener('submit', handleQuoteForm);
	}

	// Handle rescue adoption form
	const rescueForm = document.getElementById('rescue-form');
	if (rescueForm) {
		rescueForm.addEventListener('submit', handleRescueForm);
	}

	/**
	 * Handle contact form submission
	 */
	function handleContactForm(e) {
		e.preventDefault();

		const formData = new FormData(this);
		formData.append('action', 'europet_contact_form');

		const submitBtn = this.querySelector('button[type="submit"]');
		const msgDiv = document.getElementById('form-message');

		if (!msgDiv) return;

		submitBtn.disabled = true;
		msgDiv.style.display = 'block';
		msgDiv.textContent = 'Sending...';
		msgDiv.style.color = '#0a0e1a';

		fetch(europetData.ajaxUrl, {
			method: 'POST',
			body: formData
		})
		.then(response => response.json())
		.then(data => {
			submitBtn.disabled = false;
			if (data.success) {
				msgDiv.style.color = 'green';
				msgDiv.textContent = data.data;
				contactForm.reset();
			} else {
				msgDiv.style.color = 'red';
				msgDiv.textContent = data.data || 'Error sending message';
			}
		})
		.catch(error => {
			submitBtn.disabled = false;
			msgDiv.style.color = 'red';
			msgDiv.textContent = 'Error sending message. Please try again.';
			console.error('Form submission error:', error);
		});
	}

	/**
	 * Handle quote form submission
	 */
	function handleQuoteForm(e) {
		e.preventDefault();

		const formData = new FormData(this);
		formData.append('action', 'europet_quote_form');

		const submitBtn = this.querySelector('button[type="submit"]');
		const msgDiv = document.getElementById('quote-message');

		if (!msgDiv) return;

		submitBtn.disabled = true;
		msgDiv.style.display = 'block';
		msgDiv.textContent = 'Sending...';
		msgDiv.style.color = '#0a0e1a';

		fetch(europetData.ajaxUrl, {
			method: 'POST',
			body: formData
		})
		.then(response => response.json())
		.then(data => {
			submitBtn.disabled = false;
			if (data.success) {
				msgDiv.style.color = 'green';
				msgDiv.textContent = data.data;
				quoteForm.reset();
			} else {
				msgDiv.style.color = 'red';
				msgDiv.textContent = data.data || 'Error sending quote request';
			}
		})
		.catch(error => {
			submitBtn.disabled = false;
			msgDiv.style.color = 'red';
			msgDiv.textContent = 'Error sending quote request. Please try again.';
			console.error('Form submission error:', error);
		});
	}

	/**
	 * Handle rescue adoption form submission
	 */
	function handleRescueForm(e) {
		e.preventDefault();

		const formData = new FormData(this);
		formData.append('action', 'europet_rescue_form');

		const submitBtn = this.querySelector('button[type="submit"]');
		const msgDiv = document.getElementById('rescue-message');

		if (!msgDiv) return;

		submitBtn.disabled = true;
		msgDiv.style.display = 'block';
		msgDiv.textContent = 'Submitting...';
		msgDiv.style.color = '#0a0e1a';

		fetch(europetData.ajaxUrl, {
			method: 'POST',
			body: formData
		})
		.then(response => response.json())
		.then(data => {
			submitBtn.disabled = false;
			if (data.success) {
				msgDiv.style.color = 'green';
				msgDiv.textContent = data.data;
				rescueForm.reset();
			} else {
				msgDiv.style.color = 'red';
				msgDiv.textContent = data.data || 'Error submitting application';
			}
		})
		.catch(error => {
			submitBtn.disabled = false;
			msgDiv.style.color = 'red';
			msgDiv.textContent = 'Error submitting application. Please try again.';
			console.error('Form submission error:', error);
		});
	}

	/**
	 * Add smooth scroll behavior
	 */
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function(e) {
			const href = this.getAttribute('href');
			if (href !== '#' && document.querySelector(href)) {
				e.preventDefault();
				document.querySelector(href).scrollIntoView({
					behavior: 'smooth'
				});
			}
		});
	});

	/**
	 * Mobile menu toggle
	 */
	const menuToggle = document.querySelector('.menu-toggle');
	const primaryMenu = document.getElementById('primary-menu');

	if (menuToggle && primaryMenu) {
		menuToggle.addEventListener('click', function() {
			primaryMenu.classList.toggle('open');
			this.setAttribute('aria-expanded', primaryMenu.classList.contains('open'));
		});
	}

})();
