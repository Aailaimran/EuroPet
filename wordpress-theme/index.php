<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package europet-theme
 */

get_header();
?>

<main id="main" class="site-main" role="main">
	<div class="container">
		<?php
		if ( have_posts() ) :
			?>
			<div class="posts-list">
				<?php
				while ( have_posts() ) :
					the_post();
					?>
					<article id="post-<?php the_ID(); ?>" <?php post_class( 'post-item' ); ?>>
						<header class="entry-header">
							<?php
							if ( is_singular() ) :
								the_title( '<h1 class="entry-title">', '</h1>' );
							else :
								the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
							endif;
							?>
						</header>

						<?php
						if ( has_post_thumbnail() ) :
							?>
							<div class="entry-image">
								<?php the_post_thumbnail( 'europet-featured' ); ?>
							</div>
							<?php
						endif;
						?>

						<div class="entry-content">
							<?php
							if ( is_singular() ) :
								the_content();
							else :
								the_excerpt();
								?>
								<div class="entry-footer">
									<a href="<?php the_permalink(); ?>" class="btn btn-primary">Read More</a>
								</div>
								<?php
							endif;
							wp_link_pages(
								array(
									'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'europet-theme' ),
									'after'  => '</div>',
								)
							);
							?>
						</div>

						<?php
						if ( is_singular() ) :
							?>
							<footer class="entry-footer mt-4">
								<div class="post-meta">
									<?php
									echo 'Posted on ' . get_the_date();
									echo ' by ' . get_the_author();
									?>
								</div>
							</footer>
							<?php
						endif;
						?>
					</article>
					<?php
				endwhile;

				the_posts_pagination(
					array(
						'mid_size'  => 2,
						'prev_text' => esc_html__( 'Previous', 'europet-theme' ),
						'next_text' => esc_html__( 'Next', 'europet-theme' ),
					)
				);
			else :
				?>
				<div class="no-posts-found">
					<p><?php esc_html_e( 'No posts found.', 'europet-theme' ); ?></p>
				</div>
				<?php
			endif;
			?>
		</div>
	</div>
</main>

<?php
get_footer();
?>
