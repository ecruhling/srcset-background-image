// PHP / Blade fragment

<div class="carousel-image {{ !empty(get_sub_field('image')['id']) ? 'srcset-background-image' : '' }}">
    {!! wp_get_attachment_image( get_sub_field('image')['id'], 'full', false, array( 'class' => 'img-fluid d-none' ) ) !!}
</div>
