<?php get_header(); ?>

<?php
while (have_posts()) :
    the_post();
    the_content();
endwhile;
?>

</main>

<script src="<?php echo get_template_directory_uri(); ?>/script.js"></script>

<?php get_footer(); ?>
