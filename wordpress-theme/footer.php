<?php
/**
 * The template for displaying the footer
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package europet-theme
 */

?>
		<footer id="colophon" class="site-footer" role="contentinfo">
			<div class="footer-content">
				<div class="container">
					<div class="footer-widgets">
						<div class="footer-section">
							<h3><?php esc_html_e( 'Company', 'europet-theme' ); ?></h3>
							<ul>
								<li><a href="<?php echo esc_url( home_url( '/about' ) ); ?>"><?php esc_html_e( 'About Us', 'europet-theme' ); ?></a></li>
								<li><a href="<?php echo esc_url( home_url( '/services' ) ); ?>"><?php esc_html_e( 'Our Services', 'europet-theme' ); ?></a></li>
								<li><a href="<?php echo esc_url( home_url( '/rescue' ) ); ?>"><?php esc_html_e( 'Rescue a Dog', 'europet-theme' ); ?></a></li>
								<li><a href="<?php echo esc_url( home_url( '/compliance' ) ); ?>"><?php esc_html_e( 'Licensing & Compliance', 'europet-theme' ); ?></a></li>
								<li><a href="<?php echo esc_url( home_url( '/privacy' ) ); ?>"><?php esc_html_e( 'Privacy Policy', 'europet-theme' ); ?></a></li>
							</ul>
						</div>

						<div class="footer-section">
							<h3><?php esc_html_e( 'Services', 'europet-theme' ); ?></h3>
							<ul>
								<li><a href="<?php echo esc_url( home_url( '/services' ) ); ?>"><?php esc_html_e( 'Pet Transport', 'europet-theme' ); ?></a></li>
								<li><a href="<?php echo esc_url( home_url( '/services' ) ); ?>"><?php esc_html_e( 'Rescue Operations', 'europet-theme' ); ?></a></li>
								<li><a href="<?php echo esc_url( home_url( '/services' ) ); ?>"><?php esc_html_e( 'Adoption Support', 'europet-theme' ); ?></a></li>
								<li><a href="<?php echo esc_url( home_url( '/contact' ) ); ?>"><?php esc_html_e( 'Get a Quote', 'europet-theme' ); ?></a></li>
							</ul>
						</div>

						<div class="footer-section">
							<h3><?php esc_html_e( 'Connect', 'europet-theme' ); ?></h3>
							<div class="social-links">
								<a href="https://facebook.com/europetexpress" target="_blank" rel="noopener noreferrer" class="social-link">Facebook</a>
								<a href="https://instagram.com/europetexpress" target="_blank" rel="noopener noreferrer" class="social-link">Instagram</a>
								<a href="https://youtube.com/@europetexpress-z1v" target="_blank" rel="noopener noreferrer" class="social-link">YouTube</a>
								<a href="https://wa.me/447700000000" target="_blank" rel="noopener noreferrer" class="social-link">WhatsApp</a>
							</div>
						</div>

						<div class="footer-section">
							<h3><?php esc_html_e( 'Newsletter', 'europet-theme' ); ?></h3>
							<form id="newsletter-form" class="newsletter-form">
								<input type="email" placeholder="<?php esc_attr_e( 'Your email', 'europet-theme' ); ?>" required>
								<button type="submit" class="btn btn-primary"><?php esc_html_e( 'Subscribe', 'europet-theme' ); ?></button>
							</form>
						</div>
					</div>

					<div class="footer-bottom">
						<p>&copy; <?php echo date( 'Y' ); ?> <?php bloginfo( 'name' ); ?>. <?php esc_html_e( 'All rights reserved.', 'europet-theme' ); ?></p>
					</div>
				</div>
			</div>
		</footer>
	</div>

	<?php wp_footer(); ?>
</body>
</html>
