<?php 

header("Content-Type: text/html; charset=utf-8");
$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);

if ($lang === "de") {
    header("Location: de/");
} else {
    header("Location: en/");
}


