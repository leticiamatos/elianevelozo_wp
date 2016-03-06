<?php get_header(); ?>

	<main role="main">
		<!-- section -->
		<section>

			<h3><?php the_title(); ?></h3>

		<?php if (have_posts()): while (have_posts()) : the_post(); ?>

			<!-- article -->
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

				<?php the_content(); ?>

				<br class="clear">


			</article>
			<!-- /article -->

		<?php endwhile; ?>

		<?php else: ?>

			<!-- article -->
			<article>

				<h2><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>

			</article>
			<!-- /article -->

		<?php endif; ?>

		</section>
		<!-- /section -->
	</main>


<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.min.js" type="text/javascript"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/slideLp.js" type="text/javascript"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/highlight.js" type="text/javascript"></script>
<link href="<?php echo get_template_directory_uri(); ?>/js/slideLp.css"  rel='stylesheet' type='text/css'>

<?php get_footer(); ?>
