
<div class="article_list escrev_list">
	<?php if (have_posts()): while (have_posts()) : the_post(); ?>

		<div class="post_wpr">
			<!-- article -->
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

				<!-- post title -->
				<h2 class="escr_title">
					<?php the_title(); ?>
				</h2>
				<p class="descpt">
					<?php the_content(); ?>
				</p>


			</article>
			<!-- /article -->
		</div>

	<?php endwhile; ?>

	<?php else: ?>

		<!-- article -->
		<article>
			<h2><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>
		</article>
		<!-- /article -->

	<?php endif; ?>

	<?php get_template_part('pagination'); ?>
	
	<span class="clear"></span>
</div>
