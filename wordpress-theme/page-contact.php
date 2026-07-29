<?php
/**
 * Template Name: Contact Page
 * 
 * @package europet-theme
 */

get_header();
?>

<main id="main" class="site-main" role="main">
	<div class="container">
		<div class="contact-page" style="max-width: 800px; margin: 3rem auto;">
			<header class="page-header">
				<?php the_title( '<h1 class="page-title">', '</h1>' ); ?>
			</header>

			<div class="contact-content" style="margin: 2rem 0;">
				<?php
				if ( have_posts() ) {
					while ( have_posts() ) {
						the_post();
						the_content();
					}
				}
				?>
			</div>

			<!-- Contact Form -->
			<div class="contact-form-wrapper" style="background: #f9f9f9; padding: 2rem; border-radius: 8px; margin-top: 2rem;">
				<h2><?php esc_html_e( 'Send us a Message', 'europet-theme' ); ?></h2>
				<form id="contact-form" class="contact-form" style="margin-top: 1.5rem;">
					<?php wp_nonce_field( 'europet_nonce', 'europet_nonce' ); ?>

					<div class="form-group" style="margin-bottom: 1.5rem;">
						<label for="name" style="display: block; margin-bottom: 0.5rem; font-weight: 600;"><?php esc_html_e( 'Name', 'europet-theme' ); ?> <span style="color: red;">*</span></label>
						<input type="text" id="name" name="name" required style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
					</div>

					<div class="form-group" style="margin-bottom: 1.5rem;">
						<label for="email" style="display: block; margin-bottom: 0.5rem; font-weight: 600;"><?php esc_html_e( 'Email', 'europet-theme' ); ?> <span style="color: red;">*</span></label>
						<input type="email" id="email" name="email" required style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
					</div>

					<div class="form-group" style="margin-bottom: 1.5rem;">
						<label for="subject" style="display: block; margin-bottom: 0.5rem; font-weight: 600;"><?php esc_html_e( 'Subject', 'europet-theme' ); ?></label>
						<input type="text" id="subject" name="subject" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
					</div>

					<div class="form-group" style="margin-bottom: 1.5rem;">
						<label for="message" style="display: block; margin-bottom: 0.5rem; font-weight: 600;"><?php esc_html_e( 'Message', 'europet-theme' ); ?> <span style="color: red;">*</span></label>
						<textarea id="message" name="message" required rows="6" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; font-family: inherit;"></textarea>
					</div>

					<div class="form-actions" style="display: flex; gap: 1rem;">
						<button type="submit" class="btn btn-primary"><?php esc_html_e( 'Send Message', 'europet-theme' ); ?></button>
						<div id="form-message" style="align-self: center; display: none;"></div>
					</div>
				</form>
			</div>

			<!-- Contact Info -->
			<div class="contact-info" style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #ddd;">
				<div class="info-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
					<div class="info-item">
						<h3 style="color: var(--gold); margin-bottom: 0.5rem;"><?php esc_html_e( 'Phone', 'europet-theme' ); ?></h3>
						<p><a href="tel:+447700000000">+44 7700 000000</a></p>
					</div>
					<div class="info-item">
						<h3 style="color: var(--gold); margin-bottom: 0.5rem;"><?php esc_html_e( 'Email', 'europet-theme' ); ?></h3>
						<p><a href="mailto:info@europetexpress.co.uk">info@europetexpress.co.uk</a></p>
					</div>
					<div class="info-item">
						<h3 style="color: var(--gold); margin-bottom: 0.5rem;"><?php esc_html_e( 'WhatsApp', 'europet-theme' ); ?></h3>
						<p><a href="https://wa.me/447700000000" target="_blank" rel="noopener noreferrer"><?php esc_html_e( 'Chat with us', 'europet-theme' ); ?></a></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>

<script>
document.getElementById('contact-form').addEventListener('submit', function(e) {
	e.preventDefault();

	const formData = new FormData(this);
	formData.append('action', 'europet_contact_form');

	const submitBtn = this.querySelector('button[type="submit"]');
	const msgDiv = document.getElementById('form-message');

	submitBtn.disabled = true;
	msgDiv.style.display = 'block';
	msgDiv.textContent = '<?php esc_html_e( 'Sending...', 'europet-theme' ); ?>';

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
			document.getElementById('contact-form').reset();
		} else {
			msgDiv.style.color = 'red';
			msgDiv.textContent = data.data;
		}
	})
	.catch(error => {
		submitBtn.disabled = false;
		msgDiv.style.color = 'red';
		msgDiv.textContent = '<?php esc_html_e( 'Error sending message. Please try again.', 'europet-theme' ); ?>';
	});
});
</script>

<?php
get_footer();
?>
