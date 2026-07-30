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
 * Hosting Compatibility Fixes
 * Works with Hostinger, GoDaddy, and other shared hosting
 */

// Disable potentially problematic features on shared hosting
if ( ! defined( 'DISABLE_WP_CRON' ) ) {
	define( 'DISABLE_WP_CRON', true );
}

// Increase memory limit if not already set
if ( defined( 'WP_MEMORY_LIMIT' ) && strpos( WP_MEMORY_LIMIT, '64' ) !== false ) {
	define( 'WP_MEMORY_LIMIT', '128M' );
	define( 'WP_MAX_MEMORY_LIMIT', '256M' );
}

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
 * Enhanced for compatibility with Hostinger and GoDaddy
 */
function europet_enqueue_scripts() {
	$theme_uri = get_template_directory_uri();
	$theme_dir = get_template_directory();
	$version = wp_get_theme()->get( 'Version' );

	// Check if we're in admin or frontend
	$is_admin = is_admin();

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

	// Enqueue main JavaScript (defer loading for performance)
	wp_enqueue_script( 
		'europet-main', 
		$theme_uri . '/assets/js/main.js', 
		array( 'jquery' ), 
		$version, 
		true 
	);

	// Localize script for AJAX
	wp_localize_script( 'europet-main', 'europetData', array(
		'ajaxUrl'        => admin_url( 'admin-ajax.php' ),
		'nonce'          => wp_create_nonce( 'europet_nonce' ),
		'siteUrl'        => site_url(),
		'themeUrl'       => $theme_uri,
		'isDev'          => defined( 'WP_DEBUG' ) && WP_DEBUG,
	) );

	// Add critical inline CSS as fallback for Hostinger/GoDaddy
	if ( ! $is_admin ) {
		$inline_css = '
		html { background-color: #0a0e1a; margin: 0; padding: 0; }
		body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #0a0e1a; margin: 0; padding: 0; }
		* { box-sizing: border-box; }
		header { background: #0a0e1a; padding: 15px 0; border-bottom: 1px solid #C9A84C; }
		header nav { display: flex; justify-content: center; gap: 20px; }
		header nav a { color: white; text-decoration: none; padding: 10px 15px; transition: color 0.3s; }
		header nav a:hover { color: #C9A84C; }
		.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
		main { padding: 40px 20px; background: white; }
		h1, h2, h3, h4, h5, h6 { color: #0a0e1a; margin: 20px 0; }
		button, .button, input[type="submit"] { background-color: #C9A84C; color: #0a0e1a; padding: 12px 24px; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; transition: background-color 0.3s; }
		button:hover, .button:hover, input[type="submit"]:hover { background-color: #b8960c; }
		input, textarea, select { width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ddd; border-radius: 4px; font-family: inherit; }
		footer { background: #0a0e1a; color: white; padding: 40px 20px; margin-top: 60px; border-top: 1px solid #C9A84C; }
		footer a { color: #C9A84C; text-decoration: none; }
		footer a:hover { text-decoration: underline; }
		@media (max-width: 768px) { 
			header nav { flex-direction: column; gap: 5px; }
			header nav a { display: block; padding: 8px 10px; }
			.container { padding: 0 15px; }
			main { padding: 20px 15px; }
		}
		';
		wp_add_inline_style( 'europet-custom', $inline_css );
	}
}
add_action( 'wp_enqueue_scripts', 'europet_enqueue_scripts' );

/**
 * Add critical CSS to document head
 * Ensures styling appears immediately on page load
 */
function europet_print_critical_css() {
	?>
	<style>
	html { background-color: #0a0e1a; }
	body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; margin: 0; padding: 0; }
	.wp-site-blocks { margin: 0; }
	</style>
	<?php
}
add_action( 'wp_head', 'europet_print_critical_css', 1 );

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
 * Compatible with Hostinger and GoDaddy
 */
function europet_handle_contact_form() {
	// Verify nonce with fallback
	if ( isset( $_POST['nonce'] ) ) {
		if ( ! wp_verify_nonce( sanitize_key( $_POST['nonce'] ), 'europet_nonce' ) ) {
			wp_send_json_error( 'Security check failed' );
		}
	}

	if ( ! isset( $_POST['name'], $_POST['email'], $_POST['message'] ) ) {
		wp_send_json_error( 'Missing required fields' );
	}

	$name    = sanitize_text_field( wp_unslash( $_POST['name'] ) );
	$email   = sanitize_email( wp_unslash( $_POST['email'] ) );
	$message = sanitize_textarea_field( wp_unslash( $_POST['message'] ) );
	$subject = isset( $_POST['subject'] ) ? sanitize_text_field( wp_unslash( $_POST['subject'] ) ) : 'Contact Form Submission';

	// Validate email
	if ( ! is_email( $email ) ) {
		wp_send_json_error( 'Invalid email address' );
	}

	// Validate message length
	if ( strlen( $message ) < 5 ) {
		wp_send_json_error( 'Message too short' );
	}

	// Send email to admin with proper error handling
	$to      = get_option( 'admin_email' );
	$headers = array( 'Content-Type: text/html; charset=UTF-8' );
	$headers[] = "From: " . esc_attr( $name ) . " <" . esc_attr( $email ) . ">";
	$headers[] = "Reply-To: " . esc_attr( $email );

	$body = "
	<html>
		<body style='font-family: Arial, sans-serif; color: #333;'>
			<h2>" . esc_html( $subject ) . "</h2>
			<p><strong>Name:</strong> " . esc_html( $name ) . "</p>
			<p><strong>Email:</strong> " . esc_html( $email ) . "</p>
			<p><strong>Message:</strong></p>
			<p>" . nl2br( esc_html( $message ) ) . "</p>
		</body>
	</html>";

	// Use wp_mail with error handling
	$sent = wp_mail( $to, esc_attr( $subject ), wp_kses_post( $body ), $headers );

	if ( $sent ) {
		wp_send_json_success( array(
			'message' => 'Thank you for your message. We will be in touch soon!',
			'status'  => 'success',
		) );
	} else {
		// Log the error for debugging
		error_log( 'EuroPet Contact Form Email Failed: To: ' . $to . ', Subject: ' . $subject );
		wp_send_json_error( 'Failed to send message. Please contact us directly.' );
	}
}
add_action( 'wp_ajax_europet_contact_form', 'europet_handle_contact_form' );
add_action( 'wp_ajax_nopriv_europet_contact_form', 'europet_handle_contact_form' );

/**
 * Handle quote form submission
 * Compatible with Hostinger and GoDaddy
 */
function europet_handle_quote_form() {
	// Verify nonce with fallback
	if ( isset( $_POST['nonce'] ) ) {
		if ( ! wp_verify_nonce( sanitize_key( $_POST['nonce'] ), 'europet_nonce' ) ) {
			wp_send_json_error( 'Security check failed' );
		}
	}

	if ( ! isset( $_POST['name'], $_POST['email'], $_POST['from'], $_POST['to'] ) ) {
		wp_send_json_error( 'Missing required fields' );
	}

	$name   = sanitize_text_field( wp_unslash( $_POST['name'] ) );
	$email  = sanitize_email( wp_unslash( $_POST['email'] ) );
	$phone  = isset( $_POST['phone'] ) ? sanitize_text_field( wp_unslash( $_POST['phone'] ) ) : '';
	$from   = sanitize_text_field( wp_unslash( $_POST['from'] ) );
	$to     = sanitize_text_field( wp_unslash( $_POST['to'] ) );
	$type   = isset( $_POST['type'] ) ? sanitize_text_field( wp_unslash( $_POST['type'] ) ) : 'Standard Transport';

	if ( ! is_email( $email ) ) {
		wp_send_json_error( 'Invalid email address' );
	}

	$admin_email = get_option( 'admin_email' );
	$subject     = 'Quote Request from ' . esc_attr( $name );
	$headers     = array( 'Content-Type: text/html; charset=UTF-8' );
	$headers[]   = "From: " . esc_attr( $name ) . " <" . esc_attr( $email ) . ">";
	$headers[]   = "Reply-To: " . esc_attr( $email );

	$body = "
	<html>
		<body style='font-family: Arial, sans-serif; color: #333;'>
			<h2>New Quote Request</h2>
			<p><strong>Name:</strong> " . esc_html( $name ) . "</p>
			<p><strong>Email:</strong> " . esc_html( $email ) . "</p>
			<p><strong>Phone:</strong> " . esc_html( $phone ) . "</p>
			<p><strong>From:</strong> " . esc_html( $from ) . "</p>
			<p><strong>To:</strong> " . esc_html( $to ) . "</p>
			<p><strong>Transport Type:</strong> " . esc_html( $type ) . "</p>
		</body>
	</html>";

	$sent = wp_mail( $admin_email, esc_attr( $subject ), wp_kses_post( $body ), $headers );

	if ( $sent ) {
		wp_send_json_success( array(
			'message' => 'Quote request received! We will contact you shortly.',
			'status'  => 'success',
		) );
	} else {
		error_log( 'EuroPet Quote Form Email Failed: To: ' . $admin_email . ', From: ' . $email );
		wp_send_json_error( 'Failed to send quote request. Please try again or contact us directly.' );
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

/**
 * Theme activation hook - create default pages
 */
function europet_theme_activation() {
	// Flush rewrite rules
	europet_register_services_cpt();
	europet_register_service_taxonomy();
	flush_rewrite_rules();

	// Create default pages if they don't exist
	$pages = array(
		array(
			'title'   => 'Home',
			'slug'    => '',
			'content' => '<h2>Welcome to EuroPet Express</h2><p>Professional pet transportation and rescue services.</p>',
		),
		array(
			'title'   => 'About Us',
			'slug'    => 'about',
			'content' => '<h2>About EuroPet Express</h2><p>We provide professional and compassionate pet transportation services across Europe.</p>',
		),
		array(
			'title'   => 'Services',
			'slug'    => 'services',
			'content' => '<h2>Our Services</h2><p>Pet Transport | Rescue Operations | Adoption Support</p>',
		),
		array(
			'title'   => 'Routes',
			'slug'    => 'routes',
			'content' => '<h2>Our Routes</h2><p>We operate throughout Europe with dedicated routes for safe pet transportation.</p>',
		),
		array(
			'title'   => 'Rescue a Dog',
			'slug'    => 'rescue',
			'content' => '<h2>Rescue a Dog</h2><p>Help us rescue dogs in need. Fill out the form below to get started.</p>',
		),
		array(
			'title'   => 'Contact',
			'slug'    => 'contact',
			'content' => '<h2>Contact Us</h2><p>Get in touch with us for quotes or more information.</p>',
		),
		array(
			'title'   => 'Compliance',
			'slug'    => 'compliance',
			'content' => '<h2>Licensing & Compliance</h2><p>We comply with all international pet transportation regulations.</p>',
		),
		array(
			'title'   => 'Privacy Policy',
			'slug'    => 'privacy',
			'content' => '<h2>Privacy Policy</h2><p>Your privacy is important to us.</p>',
		),
	);

	foreach ( $pages as $page_data ) {
		// Check if page already exists
		$existing = get_page_by_path( $page_data['slug'] );
		if ( ! $existing ) {
			wp_insert_post( array(
				'post_type'    => 'page',
				'post_title'   => $page_data['title'],
				'post_name'    => $page_data['slug'],
				'post_content' => $page_data['content'],
				'post_status'  => 'publish',
			) );
		}
	}

	// Set homepage if not already set
	$home = get_page_by_path( '' );
	if ( $home ) {
		update_option( 'page_on_front', $home->ID );
		update_option( 'show_on_front', 'page' );
	}

	// Create main menu if not exists
	if ( ! term_exists( 'Main Navigation', 'nav_menu' ) ) {
		$menu_id = wp_create_nav_menu( 'Main Navigation' );

		// Get pages to add to menu
		$menu_pages = get_pages();
		foreach ( $menu_pages as $page ) {
			wp_update_nav_menu_item( $menu_id, 0, array(
				'menu-item-title'   => $page->post_title,
				'menu-item-url'     => get_page_link( $page->ID ),
				'menu-item-status'  => 'publish',
				'menu-item-type'    => 'post_type',
				'menu-item-object'  => 'page',
				'menu-item-object-id' => $page->ID,
			) );
		}

		// Assign menu to location
		$locations = get_theme_mod( 'nav_menu_locations' );
		$locations['primary'] = $menu_id;
		set_theme_mod( 'nav_menu_locations', $locations );
	}
}
add_action( 'after_switch_theme', 'europet_theme_activation' );

/**
 * Clear cache helper function
 */
function europet_clear_all_caches() {
	// WordPress cache
	wp_cache_flush();
	
	// W3 Total Cache
	if ( function_exists( 'w3tc_flush_all' ) ) {
		w3tc_flush_all();
	}
	
	// WP Super Cache
	if ( function_exists( 'wp_cache_clear_cache' ) ) {
		wp_cache_clear_cache();
	}
	
	// LiteSpeed Cache
	if ( class_exists( '\LiteSpeed\Purge' ) ) {
		do_action( 'litespeed_purge_all' );
	}
}

/**
 * Add admin notice on theme activation
 */
function europet_activation_notice() {
	if ( get_transient( 'europet_activation_notice' ) ) {
		?>
		<div class="notice notice-success is-dismissible">
			<p><strong><?php esc_html_e( 'EuroPet Express Theme Activated!', 'europet-theme' ); ?></strong></p>
			<p><?php esc_html_e( 'Default pages have been created. Please check the page editing panel and customize them with your content.', 'europet-theme' ); ?></p>
			<p><a href="<?php echo esc_url( admin_url( 'edit.php?post_type=page' ) ); ?>" class="button button-primary"><?php esc_html_e( 'View Pages', 'europet-theme' ); ?></a></p>
		</div>
		<?php
		delete_transient( 'europet_activation_notice' );
	}
}
add_action( 'admin_notices', 'europet_activation_notice' );

/**
 * Set transient on activation
 */
function europet_set_activation_transient() {
	set_transient( 'europet_activation_notice', 1, 10 );
}
add_action( 'after_switch_theme', 'europet_set_activation_transient' );

?>
