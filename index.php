<?php 

$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);

if ($lang === "de") {
    header("Location: en/");
} else {
    header("Location: en/");
}


