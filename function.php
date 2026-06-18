<?php

function ai_of_echt_styles() {
    wp_enqueue_style(
        'main-style',
        get_stylesheet_uri()
    );
}

add_action('wp_enqueue_scripts', 'ai_of_echt_styles');
