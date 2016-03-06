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
define('AUTH_KEY',         'wXdCh`+YAscxr}c|1^a~)&#y;|AZ&$EG-$3n3NqaQ78krJzs!7#-9-DL+m<V=<sQ');
define('SECURE_AUTH_KEY',  'jL&z4CHU(XehCZ]bI-mHC]bbu.rKSh-rIM]zu.uTjbyC3%`DPvQpe?3tUK[OvQkr');
define('LOGGED_IN_KEY',    'GK9EDOm`d<efOOI/o>u-&I0hh0}[ITOU@e`~:FcLp1l9NeF7zjU0+]T|+or^!f`)');
define('NONCE_KEY',        'Vgti2aG.%H{+,6]Tv*A/(wHQZ&-Xk|BH;.Nb2O{C]5b1NI^a{r(#vRPTO;/z_D.-');
define('AUTH_SALT',        'q9+,2Dy`$On90]1[<^$c$S&WZ.EW||n`Kk@X,cL7|hc-LD_w}@BeV53T$(H>?wuF');
define('SECURE_AUTH_SALT', '9</uS%c;h=n%*Rv}.S2bgN+3 L:MC+Q`4[5sP-~u?-,1s6}gf6-PTfD*: s4CO`k');
define('LOGGED_IN_SALT',   '4-kYc|E?$ty2h5|.>:=G<q_#X1xYW`NXlf7LSVNwpnDaV}5M#!&)2{=-n,12t| +');
define('NONCE_SALT',       'ks2;r}p!Q{|+sr+goLKl-KR$%w8Q/.-pY#aOAMitrEl,3Cos|E2b}<??%pKkl}?x');

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
