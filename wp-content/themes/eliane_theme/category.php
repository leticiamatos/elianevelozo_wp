<?php get_header(); ?>

	<main role="main">

		<?php if (have_posts()) { ?>
		<!-- section -->
		<section>
			<?php if (
			is_category('2007')|| 
			is_category('2008')|| 
			is_category('2009')|| 
			is_category('2010')|| 
			is_category('2011')|| 
			is_category('2012')||
			is_category('2013')||
			is_category('2014')||
			is_category('2015')||
			is_category('2016')||
			is_category('2017')
			) { ?>
			
			<h4>Escrevinhadura</h4>
			<h3><?php single_cat_title(); ?></h3>
			<?php get_template_part('loop', 'escrev'); ?>

			<?php } else if (is_category('blog')){ ?>
			
			<h3>Blog</h3>
			<?php get_template_part('loop', 'blog'); ?>

			<?php } else { ?>
			
			<h3><?php single_cat_title(); ?></h3>
			<?php get_template_part('loop'); ?>

			<?php } ?>

		</section>
		<!-- /section -->
		<?php }else { ?>
			<h2><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>
		<?php } ?>

	</main>


<?php get_footer(); ?>
