
<?php get_header(); ?>

<main>


<h2>Dit is een tesrt</h2>
<div class="buttons">

        <a href="<?php  echo get_field("url-cta-1"); ?>" class="wp-block-button__link wp-element-button"><?php  echo get_field("url-cta-1"); ?></a>
        <a href="<?php  echo get_field("url-cta-1"); ?>" class="wp-block-button__link wp-element-button"><?php  echo get_field("url-cta-1"); ?></a>



</div>

<?php
while (have_posts()) :
    the_post();
    the_content();
endwhile;
?>

</main>

<script src="<?php echo get_template_directory_uri(); ?>/script.js"></script>

<?php get_footer(); ?>
