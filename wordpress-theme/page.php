<?php
/**
 * The template for displaying all single pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-page
 *
 * @package europet-theme
 */

get_header();
?>

<main id="main" class="site-main" role="main">
	<div class="container">
		<div class="page-content" style="max-width: 900px; margin: 3rem auto;">
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
				</article>
				<?php
			endwhile;
			?>
		</div>
	</div>
</main>

<?php
get_footer();
?>
