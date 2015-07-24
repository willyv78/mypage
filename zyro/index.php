<?php
error_reporting(E_ALL); @ini_set('display_errors', true);
	$pages = array(
		'0'	=> array('id' => '1', 'alias' => 'Inicio', 'file' => '1.php'),
		'1'	=> array('id' => '2', 'alias' => 'Servicios', 'file' => '2.php'),
		'2'	=> array('id' => '3', 'alias' => 'Contactos', 'file' => '3.php')
	);
	$forms = array(

	);
	$langs = null;
	$def_lang = null;
	$base_dir = dirname(__FILE__);
	$base_url = '/';
	$show_comments = false;
	include dirname(__FILE__).'/functions.inc.php';
	$home_page = '1';
	list($page_id, $lang) = parse_uri();
	$user_key = "4TUJSOpfiIrrRNk8mt3K";
	$user_hash = "52b3a4688a665b1c";
	$comment_callback = "http://uk.zyro.com/es-ES/comment_callback/";
	$preview = false;
	$mod_rewrite = true;
	$page = isset($pages[$page_id]) ? $pages[$page_id] : null;
	if (!is_null($page)) {
		handleComments($page['id']);
		if (isset($_POST["wb_form_id"])) handleForms($page['id']);
	}
	ob_start();
	if (isset($_REQUEST['view']) && $_REQUEST['view'] == 'news')
		include dirname(__FILE__).'/news.php';
	else if (isset($_REQUEST['view']) && $_REQUEST['view'] == 'blog')
		include dirname(__FILE__).'/blog.php';
	else if ($page) {
		$fl = dirname(__FILE__).'/'.$page['file'];
		if (is_file($fl)) {
			ob_start();
			include $fl;
			$out = ob_get_clean();
			$out = str_replace('{{curr_lang}}', ($lang ? "'$lang'" : 'null'), $out);
			$ga_out = '';
			if ($lang) {
				foreach ($langs as $lang => $default) {
					$pageUri = getPageUri($page['id'], $lang);
					$out = str_replace(urlencode('{{lang_'.$lang.'}}'), $pageUri, $out);
				}
			}
			if (is_file($ga_file = dirname(__FILE__).'/ga_code') && $ga_code = file_get_contents($ga_file)) {
				$ga_out = str_replace('{{ga_code}}', $ga_code, file_get_contents(dirname(__FILE__).'/ga.html'));
			}
			$out = str_replace('{{ga_code}}', $ga_out, $out);
			$proto = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? 'https' : 'http';
			$out = str_replace('{{base_url}}', $proto.'://'.$_SERVER['HTTP_HOST'].'/', $out);
			header('Content-type: text/html; charset=utf-8', true);
			echo $out;
		}
	} else {
		header("Content-type: text/html; charset=utf-8", true, 404);
		echo "<!DOCTYPE html>\n";
		echo "<html>\n";
		echo "<head>\n";
		echo "<title>404 Not found</title>\n";
		echo "</head>\n";
		echo "<body>\n";
		echo "404 Not found\n";
		echo "</body>\n";
		echo "</html>";
}
	ob_end_flush();

?>