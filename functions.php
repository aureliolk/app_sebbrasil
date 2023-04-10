/* Custom Scritp */
function meu_script_personalizado() {
    $script_path = get_template_directory() . '/js/custom-script.js';
    wp_enqueue_script( 'custom-script', get_stylesheet_directory_uri() . '/js/custom-script.js', array('jquery'), false, true );
}
add_action( 'wp_enqueue_scripts', 'meu_script_personalizado' );