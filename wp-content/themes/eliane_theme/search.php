<?php
/*
Template Name: Search
*/
?>
<?php get_header(); ?>

<?php
	// Results Count
	global $wp_query;
	$total_results = $wp_query->found_posts;
?>


<?php get_header(); ?>

	<main role="main">
		<!-- section -->
		<section>
				

			<h3>Resultados para "<?php echo get_search_query(); ?>"</h3>

			<div class="post_wpr">


				<?php get_template_part('loop'); ?>

			</div>

		</section>
		<!-- /section -->
	</main>

<!-- 
<script src="<?php //echo get_template_directory_uri(); ?>/js/jquery.min.js" type="text/javascript"></script>
<script src="<?php //echo get_template_directory_uri(); ?>/js/slideLp.js" type="text/javascript"></script>
<script src="<?php //echo get_template_directory_uri(); ?>/js/highlight.js" type="text/javascript"></script>
<link href="<?php //echo get_template_directory_uri(); ?>/js/slideLp.css"  rel='stylesheet' type='text/css'>
 -->
<?php get_footer(); ?>