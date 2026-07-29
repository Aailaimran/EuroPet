<?php
/**
 * The template for displaying single service posts
 *
 * @package europet-theme
 */

get_header();
?>

<main id="main" class="site-main" role="main">
	<div class="container">
		<div class="service-single" style="max-width: 900px; margin: 3rem auto;">
			<?php
			while ( have_posts() ) :
				the_post();
				?>
				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					<header class="entry-header">
						<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
					</header>

					<?php
					if ( has_post_thumbnail() ) :
						?>
						<div class="entry-image" style="margin: 2rem 0; border-radius: 8px; overflow: hidden;">
							<?php the_post_thumbnail( 'europet-featured' ); ?>
						</div>
						<?php
					endif;
					?>

					<div class="entry-content" style="font-size: 1.05rem; line-height: 1.8;">
						<?php
						the_content();
						wp_link_pages(
							array(
								'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'europet-theme' ),
								'after'  => '</div>',
							)
						);
						?>
					</div>

					<footer class="entry-footer" style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #ddd;">
						<?php
						$categories = get_the_terms( get_the_ID(), 'service_category' );
						if ( $categories && ! is_wp_error( $categories ) ) {
							echo '<p><strong>' . esc_html__( 'Category:', 'europet-theme' ) . '</strong> ';
							$category_links = array();
							foreach ( $categories as $category ) {
								$category_links[] = '<a href="' . esc_url( get_term_link( $category ) ) . '">' . esc_html( $category->name ) . '</a>';
							}
							echo implode( ', ', $category_links );
							echo '</p>';
						}
						?>
					</footer>
				</article>

				<!-- Related Services -->
				<div class="related-services" style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid #ddd;">
					<h2><?php esc_html_e( 'Other Services', 'europet-theme' ); ?></h2>
					<?php
					$related = get_posts( array(
						'post_type'      => 'service',
						'posts_per_page' => 3,
						'post__not_in'   => array( get_the_ID() ),
						'orderby'        => 'rand',
					) );

					if ( $related ) {
						?>
						<div class="related-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-top: 2rem;">
							<?php
							foreach ( $related as $post ) {
								?>
								<div class="related-service" style="background: #f9f9f9; padding: 1.5rem; border-radius: 8px;">
									<?php
									if ( has_post_thumbnail( $post->ID ) ) {
										echo '<div style="margin-bottom: 1rem; border-radius: 8px; overflow: hidden; height: 150px;">';
										echo get_the_post_thumbnail( $post->ID, 'europet-thumbnail', array( 'style' => 'width: 100%; height: 100%; object-fit: cover;' ) );
										echo '</div>';
									}
									?>
									<h3 style="margin-bottom: 0.5rem;"><a href="<?php echo esc_url( get_permalink( $post->ID ) ); ?>" style="color: var(--text-dark);"><?php echo esc_html( $post->post_title ); ?></a></h3>
									<p><?php echo wp_trim_words( $post->post_content, 15 ); ?></p>
									<a href="<?php echo esc_url( get_permalink( $post->ID ) ); ?>" class="btn btn-primary" style="display: inline-block; margin-top: 1rem;"><?php esc_html_e( 'View Service', 'europet-theme' ); ?></a>
								</div>
								<?php
							}
							?>
						</div>
						<?php
					}
					wp_reset_postdata();
					?>
				</div>
			<?php
			endwhile;
			?>
		</div>
	</div>
</main>

<?php
get_footer();
?>
