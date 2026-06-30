
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/style.css">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<header>

    <div>
        <a href="<?php echo home_url(); ?>">
      
        </a>
        <a href="index.php">

    </a>

    </div>

    <nav class="header1">
        <a class="woordenbox" href="<?php echo home_url(); ?>">Home</a>
        <a class="woordenbox" href="<?php echo home_url('/Ai'); ?>">AI</a>
        <a class="woordenbox" href="<?php echo home_url('/Nepnieuws'); ?>">Nepnieuws</a>
        <a class="woordenbox" href="<?php echo home_url('/Tips'); ?>">Tips</a>
        <a class="woordenbox" href="<?php echo home_url('/quiz'); ?>">Quiz</a>
    </nav>
</header>
