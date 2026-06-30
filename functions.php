<?php

// Source - https://stackoverflow.com/questions/79863802/how-to-enqueue-scripts-properly-in-wordpress-theme
// Posted by Swrice
// Retrieved 2026-06-29, License - CC BY-SA 4.0


function enqueue_frontend_script_or_style() {

    // Enqueue JS
    wp_enqueue_script(
        'custom-frontend-script',
        get_stylesheet_directory_uri() . '/script.js',
    );

}
add_action( 'wp_enqueue_scripts', 'enqueue_frontend_script_or_style' );

