<?php
/**
 * The front page template
 *
 * @package europet-theme
 */

get_header();
?>

<main id="main" class="site-main" role="main">
	<!-- Hero Section -->
	<section class="hero-section" style="background-color: var(--navy); color: var(--text-light); padding: 120px 0; text-align: center;">
		<div class="container">
			<h1 style="font-size: 3.5rem; margin-bottom: 1rem; color: var(--text-light);"><?php echo get_option( 'blogname' ); ?></h1>
			<p style="font-size: 1.25rem; margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto;"><?php echo get_option( 'blogdescription' ); ?></p>
			<div class="hero-buttons" style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
				<a href="<?php echo esc_url( home_url( '/services' ) ); ?>" class="btn btn-primary"><?php esc_html_e( 'Explore Services', 'europet-theme' ); ?></a>
				<a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="btn btn-secondary" style="color: var(--gold); border-color: var(--gold);"><?php esc_html_e( 'Get in Touch', 'europet-theme' ); ?></a>
			</div>
		</div>
	</section>

	<!-- About Section -->
	<section class="about-section section">
		<div class="container">
			<h2 class="section-title"><?php esc_html_e( 'About EuroPet Express', 'europet-theme' ); ?></h2>
			<div class="about-content" style="max-width: 800px; margin: 0 auto; line-height: 1.8;">
				<?php
				$about_page = get_page_by_path( 'about' );
				if ( $about_page ) {
					echo apply_filters( 'the_content', substr( $about_page->post_content, 0, 400 ) . '...' );
				} else {
					echo '<p>' . esc_html__( 'Welcome to EuroPet Express, your trusted partner in pet transportation and rescue services across Europe.', 'europet-theme' ) . '</p>';
				}
				?>
			</div>
			<div class="text-center mt-4">
				<a href="<?php echo esc_url( home_url( '/about' ) ); ?>" class="btn btn-primary"><?php esc_html_e( 'Learn More', 'europet-theme' ); ?></a>
			</div>
		</div>
	</section>

	<!-- Services Section -->
	<section class="services-section section" style="background-color: #f5f5f5;">
		<div class="container">
			<h2 class="section-title"><?php esc_html_e( 'Our Services', 'europet-theme' ); ?></h2>
			<div class="services-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
				<?php
				$services = get_posts( array(
					'post_type'      => 'service',
					'posts_per_page' => 6,
				) );

				if ( $services ) {
					foreach ( $services as $service ) {
						?>
						<div class="service-card" style="background: white; padding: 2rem; border-radius: 8px; text-align: center;">
							<?php
							if ( has_post_thumbnail( $service->ID ) ) {
								echo get_the_post_thumbnail( $service->ID, 'europet-thumbnail' );
							}
							?>
							<h3><?php echo esc_html( $service->post_title ); ?></h3>
							<p><?php echo wp_trim_words( $service->post_content, 15 ); ?></p>
							<a href="<?php echo esc_url( get_permalink( $service->ID ) ); ?>" class="btn btn-primary"><?php esc_html_e( 'Learn More', 'europet-theme' ); ?></a>
						</div>
						<?php
					}
				} else {
					?>
					<p><?php esc_html_e( 'No services found. Please add some services.', 'europet-theme' ); ?></p>
					<?php
				}
				?>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="cta-section section" style="background-color: var(--gold); color: var(--text-dark); text-align: center;">
		<div class="container">
			<h2><?php esc_html_e( 'Ready to Transport Your Pet?', 'europet-theme' ); ?></h2>
			<p style="font-size: 1.1rem; margin: 1.5rem 0;"><?php esc_html_e( 'Get a free quote for your pet transportation needs.', 'europet-theme' ); ?></p>
			<a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="btn btn-dark"><?php esc_html_e( 'Get a Quote', 'europet-theme' ); ?></a>
		</div>
	</section>
</main>

<?php
get_footer();
?>
