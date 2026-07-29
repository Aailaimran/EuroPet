<?php
/**
 * Template Name: Services Page
 * 
 * @package europet-theme
 */

get_header();
?>

<main id="main" class="site-main" role="main">
	<div class="container">
		<div class="page-content" style="max-width: 1000px; margin: 3rem auto;">
			<header class="page-header">
				<?php the_title( '<h1 class="page-title">', '</h1>' ); ?>
			</header>

			<div class="page-description" style="margin: 2rem 0; font-size: 1.1rem; line-height: 1.8;">
				<?php the_content(); ?>
			</div>

			<!-- Services Grid -->
			<div class="services-list" style="margin-top: 3rem;">
				<h2 style="margin-bottom: 2rem; text-align: center;"><?php esc_html_e( 'Our Transport Services', 'europet-theme' ); ?></h2>
				<div class="services-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 2rem;">
					<?php
					$services = get_posts( array(
						'post_type'      => 'service',
						'posts_per_page' => -1,
						'orderby'        => 'title',
						'order'          => 'ASC',
					) );

					if ( $services ) {
						foreach ( $services as $service ) {
							?>
							<div class="service-card" style="background: white; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; transition: all 0.3s ease;">
								<?php
								if ( has_post_thumbnail( $service->ID ) ) {
									echo '<div style="overflow: hidden; height: 200px;">';
									echo get_the_post_thumbnail( $service->ID, 'europet-featured', array( 'style' => 'width: 100%; height: 100%; object-fit: cover;' ) );
									echo '</div>';
								}
								?>
								<div style="padding: 1.5rem;">
									<h3 style="margin-bottom: 0.5rem; color: var(--text-dark);"><?php echo esc_html( $service->post_title ); ?></h3>
									<p style="color: #666; margin-bottom: 1rem;"><?php echo wp_trim_words( $service->post_content, 20 ); ?></p>
									<a href="<?php echo esc_url( get_permalink( $service->ID ) ); ?>" class="btn btn-primary" style="width: 100%; text-align: center;"><?php esc_html_e( 'Learn More', 'europet-theme' ); ?></a>
								</div>
							</div>
							<?php
						}
					} else {
						?>
						<p><?php esc_html_e( 'No services available at the moment.', 'europet-theme' ); ?></p>
						<?php
					}
					?>
				</div>
			</div>

			<!-- CTA Section -->
			<div class="services-cta" style="background: var(--gold); color: var(--text-dark); padding: 2rem; border-radius: 8px; text-align: center; margin-top: 3rem;">
				<h2><?php esc_html_e( 'Need a Custom Quote?', 'europet-theme' ); ?></h2>
				<p style="margin: 1rem 0;"><?php esc_html_e( 'Contact us for personalized service quotes.', 'europet-theme' ); ?></p>
				<a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="btn btn-dark"><?php esc_html_e( 'Get Quote', 'europet-theme' ); ?></a>
			</div>
		</div>
	</div>
</main>

<?php
get_footer();
?>
