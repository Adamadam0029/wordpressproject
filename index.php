<?php get_header(); ?>

<?php
while (have_posts()) :
    the_post();
    the_content();
endwhile;
?>
<section class="cards">
        <div class="card">
            <h3>🤖 AI</h3>
            <p>
                Leer hoe AI werkt, wat deepfakes zijn en hoe AI-afbeeldingen
                worden gemaakt.
            </p>
        </div>

        <div class="card">
            <h3>📰 Nepnieuws</h3>
            <p>
                Ontdek hoe nepnieuws zich verspreidt en hoe je betrouwbare
                bronnen kunt herkennen.
            </p>
        </div>

        <div class="card">
            <h3>🎯 Quiz</h3>
            <p>
                Test jezelf en kijk of jij AI-content van echte content kunt onderscheiden.
            </p>
        </div>
    </section>
</main>

<script src="<?php echo get_template_directory_uri(); ?>/script.js"></script>

<?php get_footer(); ?>
