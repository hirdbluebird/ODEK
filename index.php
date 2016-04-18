<?php get_header(); ?>

      <main>
        <div class="container">
          <diw class="row">

          	<?php if ( have_rows('mainpage-block')) : ?>
          		<?php while( have_rows('mainpage-block')) : the_row(); ?>
		            <div class="col-md-3 col-lg-3 mainpage-block-area">
		              <div class="mainpage-block">
		                <div class="image-container">
		                	<?php $image_attr = wp_get_attachment_image_src( get_sub_field('block-image') ); ?>
		                  <img src="<?php echo $image_attr[0]; ?>" alt="">
		                </div>
		                <div class="text-container">
			                <h3><?php the_sub_field('block-title'); ?></h3>
			                <p><?php the_sub_field('block-text'); ?></p>
			                <a href="" alt="">Learn more</a>
			            </div>
		              </div>
		            </div>
            	<?php endwhile; ?>
            <?php endif; ?>

          </div>
        </div>
      </main>
    </div>

<?php get_footer(); ?>