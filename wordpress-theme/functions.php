<?php
/**
 * EuroPet Express Theme Functions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package europet-theme
 */

// Exit if accessed directly
defined( 'ABSPATH' ) || exit;

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function europet_setup() {
	// Enable support for Post Thumbnails on posts and pages
	add_theme_support( 'post-thumbnails' );

	// Enable support for HTML5 markup
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
		'style',
		'script',
	) );

	// Add custom logo support
	add_theme_support( 'custom-logo', array(
		'height'      => 90,
		'width'       => 300,
		'flex-height' => true,
		'flex-width'  => true,
	) );

	// Add support for custom header
	add_theme_support( 'custom-header', array(
		'default-image' => '',
		'width'         => 1200,
		'height'        => 400,
		'flex-height'   => true,
		'flex-width'    => true,
	) );

	// Register navigation menus
	register_nav_menus( array(
		'primary'   => esc_html__( 'Primary Menu', 'europet-theme' ),
		'footer'    => esc_html__( 'Footer Menu', 'europet-theme' ),
	) );
}
add_action( 'after_setup_theme', 'europet_setup' );

/**
 * Enqueue scripts and styles
 */
function europet_enqueue_scripts() {
	$theme_uri = get_template_directory_uri();
	$version = wp_get_theme()->get( 'Version' );

	// Enqueue main theme stylesheet (style.css)
	wp_enqueue_style( 
		'europet-style', 
		$theme_uri . '/style.css',
		array(),
		$version,
		'all'
	);

	// Enqueue custom CSS (must load after style.css)
	wp_enqueue_style( 
		'europet-custom', 
		$theme_uri . '/assets/css/custom.css',
		array( 'europet-style' ),
		$version,
		'all'
	);

	// Enqueue main JavaScript
	wp_enqueue_script( 
		'europet-main', 
		$theme_uri . '/assets/js/main.js', 
		array( 'jquery' ), 
		$version, 
		true 
	);

	// Localize script for AJAX
	wp_localize_script( 'europet-main', 'europetData', array(
		'ajaxUrl' => admin_url( 'admin-ajax.php' ),
		'nonce'   => wp_create_nonce( 'europet_nonce' ),
	) );
}
add_action( 'wp_enqueue_scripts', 'europet_enqueue_scripts' );

/**
 * Register widget areas
 */
function europet_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Primary Sidebar', 'europet-theme' ),
		'id'            => 'primary-sidebar',
		'description'   => esc_html__( 'Main sidebar area', 'europet-theme' ),
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );

	register_sidebar( array(
		'name'          => esc_html__( 'Footer Sidebar', 'europet-theme' ),
		'id'            => 'footer-sidebar',
		'description'   => esc_html__( 'Footer widget area', 'europet-theme' ),
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );
}
add_action( 'widgets_init', 'europet_widgets_init' );

/**
 * Add custom image sizes
 */
function europet_add_image_sizes() {
	add_image_size( 'europet-featured', 800, 400, true );
	add_image_size( 'europet-thumbnail', 300, 300, true );
	add_image_size( 'europet-hero', 1920, 600, true );
}
add_action( 'after_setup_theme', 'europet_add_image_sizes' );

/**
 * Get custom logo
 */
function europet_get_logo() {
	if ( function_exists( 'get_custom_logo' ) ) {
		return get_custom_logo();
	}
	return '';
}

/**
 * Handle contact form submission
 */
function europet_handle_contact_form() {
	check_ajax_referer( 'europet_nonce' );

	if ( ! isset( $_POST['name'], $_POST['email'], $_POST['message'] ) ) {
		wp_send_json_error( 'Missing required fields' );
	}

	$name    = sanitize_text_field( $_POST['name'] );
	$email   = sanitize_email( $_POST['email'] );
	$message = sanitize_textarea_field( $_POST['message'] );
	$subject = sanitize_text_field( $_POST['subject'] ?? 'Contact Form Submission' );

	// Validate email
	if ( ! is_email( $email ) ) {
		wp_send_json_error( 'Invalid email address' );
	}

	// Send email to admin
	$to      = get_option( 'admin_email' );
	$headers = "From: $name <$email>\r\n";
	$headers .= "Reply-To: $email\r\n";
	$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

	$body = "
	<html>
		<body>
			<h2>$subject</h2>
			<p><strong>Name:</strong> $name</p>
			<p><strong>Email:</strong> $email</p>
			<p><strong>Message:</strong></p>
			<p>" . nl2br( $message ) . "</p>
		</body>
	</html>";

	$sent = wp_mail( $to, $subject, $body, $headers );

	if ( $sent ) {
		wp_send_json_success( 'Thank you for your message. We will be in touch soon!' );
	} else {
		wp_send_json_error( 'Failed to send message. Please try again later.' );
	}
}
add_action( 'wp_ajax_europet_contact_form', 'europet_handle_contact_form' );
add_action( 'wp_ajax_nopriv_europet_contact_form', 'europet_handle_contact_form' );

/**
 * Handle quote form submission
 */
function europet_handle_quote_form() {
	check_ajax_referer( 'europet_nonce' );

	if ( ! isset( $_POST['name'], $_POST['email'], $_POST['from'], $_POST['to'] ) ) {
		wp_send_json_error( 'Missing required fields' );
	}

	$name   = sanitize_text_field( $_POST['name'] );
	$email  = sanitize_email( $_POST['email'] );
	$phone  = sanitize_text_field( $_POST['phone'] ?? '' );
	$from   = sanitize_text_field( $_POST['from'] );
	$to     = sanitize_text_field( $_POST['to'] );
	$type   = sanitize_text_field( $_POST['type'] ?? 'Standard Transport' );

	if ( ! is_email( $email ) ) {
		wp_send_json_error( 'Invalid email address' );
	}

	$admin_email = get_option( 'admin_email' );
	$subject     = 'Quote Request from ' . $name;
	$headers     = "From: $name <$email>\r\n";
	$headers     .= "Reply-To: $email\r\n";
	$headers     .= "Content-Type: text/html; charset=UTF-8\r\n";

	$body = "
	<html>
		<body>
			<h2>New Quote Request</h2>
			<p><strong>Name:</strong> $name</p>
			<p><strong>Email:</strong> $email</p>
			<p><strong>Phone:</strong> $phone</p>
			<p><strong>From:</strong> $from</p>
			<p><strong>To:</strong> $to</p>
			<p><strong>Transport Type:</strong> $type</p>
		</body>
	</html>";

	$sent = wp_mail( $admin_email, $subject, $body, $headers );

	if ( $sent ) {
		wp_send_json_success( 'Quote request received! We will contact you shortly.' );
	} else {
		wp_send_json_error( 'Failed to send quote request. Please try again.' );
	}
}
add_action( 'wp_ajax_europet_quote_form', 'europet_handle_quote_form' );
add_action( 'wp_ajax_nopriv_europet_quote_form', 'europet_handle_quote_form' );

/**
 * Register post type for services
 */
function europet_register_services_cpt() {
	$labels = array(
		'name'               => _x( 'Services', 'post type general name', 'europet-theme' ),
		'singular_name'      => _x( 'Service', 'post type singular name', 'europet-theme' ),
		'menu_name'          => _x( 'Services', 'admin menu', 'europet-theme' ),
		'name_admin_bar'     => _x( 'Service', 'add new on admin bar', 'europet-theme' ),
		'add_new'            => _x( 'Add New', 'service', 'europet-theme' ),
		'add_new_item'       => __( 'Add New Service', 'europet-theme' ),
		'new_item'           => __( 'New Service', 'europet-theme' ),
		'edit_item'          => __( 'Edit Service', 'europet-theme' ),
		'view_item'          => __( 'View Service', 'europet-theme' ),
		'all_items'          => __( 'All Services', 'europet-theme' ),
		'search_items'       => __( 'Search Services', 'europet-theme' ),
		'not_found'          => __( 'No services found.', 'europet-theme' ),
		'not_found_in_trash' => __( 'No services found in Trash.', 'europet-theme' ),
	);

	$args = array(
		'labels'             => $labels,
		'description'        => __( 'Our transportation services', 'europet-theme' ),
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'services' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => 20,
		'supports'           => array( 'title', 'editor', 'thumbnail', 'excerpt' ),
		'show_in_rest'       => true,
	);

	register_post_type( 'service', $args );
}
add_action( 'init', 'europet_register_services_cpt' );

/**
 * Register taxonomy for service categories
 */
function europet_register_service_taxonomy() {
	$labels = array(
		'name'              => _x( 'Service Categories', 'taxonomy general name', 'europet-theme' ),
		'singular_name'     => _x( 'Service Category', 'taxonomy singular name', 'europet-theme' ),
		'search_items'      => __( 'Search Service Categories', 'europet-theme' ),
		'all_items'         => __( 'All Service Categories', 'europet-theme' ),
		'edit_item'         => __( 'Edit Service Category', 'europet-theme' ),
		'update_item'       => __( 'Update Service Category', 'europet-theme' ),
		'add_new_item'      => __( 'Add New Service Category', 'europet-theme' ),
		'new_item_name'     => __( 'New Service Category Name', 'europet-theme' ),
		'menu_name'         => __( 'Service Categories', 'europet-theme' ),
	);

	$args = array(
		'hierarchical'      => true,
		'labels'            => $labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'service-category' ),
		'show_in_rest'      => true,
	);

	register_taxonomy( 'service_category', array( 'service' ), $args );
}
add_action( 'init', 'europet_register_service_taxonomy' );

?>
