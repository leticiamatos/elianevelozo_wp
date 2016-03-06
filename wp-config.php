<?php
/** 
 * As configurações básicas do WordPress.
 *
 * Esse arquivo contém as seguintes configurações: configurações de MySQL, Prefixo de Tabelas,
 * Chaves secretas, Idioma do WordPress, e ABSPATH. Você pode encontrar mais informações
 * visitando {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. Você pode obter as configurações de MySQL de seu servidor de hospedagem.
 *
 * Esse arquivo é usado pelo script ed criação wp-config.php durante a
 * instalação. Você não precisa usar o site, você pode apenas salvar esse arquivo
 * como "wp-config.php" e preencher os valores.
 *
 * @package WordPress
 */

// ** Configurações do MySQL - Você pode pegar essas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define('DB_NAME', 'wp_elianevelozo');

/** Usuário do banco de dados MySQL */
define('DB_USER', 'root');

/** Senha do banco de dados MySQL */
define('DB_PASSWORD', '');

/** nome do host do MySQL */
define('DB_HOST', 'localhost');

/** Conjunto de caracteres do banco de dados a ser usado na criação das tabelas. */
define('DB_CHARSET', 'utf8');

/** O tipo de collate do banco de dados. Não altere isso se tiver dúvidas. */
define('DB_COLLATE', '');

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * Você pode alterá-las a qualquer momento para desvalidar quaisquer cookies existentes. Isto irá forçar todos os usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'M=)=s.ybl%`Zux&,]d=%L+69n(YHiU!!`m;29 k53]|4ODdXzaI~2=PT kdJ+{!&');
define('SECURE_AUTH_KEY',  '2yM&>=?aKkmVX3Y_n7Q+-iaVKR)qnqe@YM|z6l=r;#tI*o#x{!p6d|@y5es?aZB4');
define('LOGGED_IN_KEY',    ': G=wcp$zhcT-Q&ApsN]z;Bv$z7HuN,Z|WO/e%L ?2-y|g@k[tCpjuw;3--o-EYJ');
define('NONCE_KEY',        'rKs^!+$-Gn->|D/kjalQ`xtz;^&b(UU<khD_5-Q=w:h.Y?z<uq@]cY/z^{toQezY');
define('AUTH_SALT',        '&yvEPw~|7RsIs{U3;6*lM.r%wO0G$j9EN}lxcuKIG1gxKJnlO^,t1v{b.(c;mgN,');
define('SECURE_AUTH_SALT', '!Nv,Z66*|;|-J!C%7k4h~,!>DfZyXDT>_|<b_;,V5S+Cw`MU[=5oe=r}]LjSxgaD');
define('LOGGED_IN_SALT',   '6{cd+&}(+&yfFC0l<@@%Rxj/W&@eiu$_w,./xlBsAm]}?t.CB3|I IB__jwZ#?q:');
define('NONCE_SALT',       'O&AB[8_|0/SS$DEy|u|,[-?|iw||`AEfaB|nekqYG|CKqG@RTRh*uy(#t0y$^8dx');

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der para cada um um único
 * prefixo. Somente números, letras e sublinhados!
 */
$table_prefix  = 'wp_';


/**
 * Para desenvolvedores: Modo debugging WordPress.
 *
 * altere isto para true para ativar a exibição de avisos durante o desenvolvimento.
 * é altamente recomendável que os desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 */
define('WP_DEBUG', false);

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');
	
/** Configura as variáveis do WordPress e arquivos inclusos. */
require_once(ABSPATH . 'wp-settings.php');
