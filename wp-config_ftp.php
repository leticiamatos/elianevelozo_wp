<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link http://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'eliane5_wp80');

/** MySQL database username */
define('DB_USER', 'eliane5_wp80');

/** MySQL database password */
define('DB_PASSWORD', 'P[99k89!4S');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '8tftailsqjfxn68ume9iqebftaavd1xtwxsrc4ldl12z16fibsmtkfhk3al7hyqf');
define('SECURE_AUTH_KEY',  'ugpxcnlmr1bbeuzstzgy09vuxzbihmpwdfvzrt3qoyjujomg81conp9xj1rqvz1t');
define('LOGGED_IN_KEY',    '0u8cebtk2osidr8s99nbal2fkyta7r2rpowrvvarjna2vacqrabwo4f07ttt81cm');
define('NONCE_KEY',        '2j6sagkqrcyyip3awidu5edqccxuicpvrt4lyhdpsaj3yfkv0oqmd936tt7ghikd');
define('AUTH_SALT',        'nag1lo5evasmnydfnjabn7hfnjaprfsv0rue7oxdmploofrdox4owm2xywj9oeuo');
define('SECURE_AUTH_SALT', 'p2s83ys4yu2z9itod8aimqr8gsueojtysimmyf3ek4rbeyi2p4pn4jsgkhfupvyk');
define('LOGGED_IN_SALT',   'ofsp6dbnuswnliyw4ffxmvjsikglfwf3eqvjb60wmuhgn9qjgzpb0tcy00vjjsjj');
define('NONCE_SALT',       'uxsdaqnu4wzdjzcg0a8jec0nqnko8p5c2lhwhl5veoike7ehm16bkm5q76yptmha');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
