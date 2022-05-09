<?php
require 'view/load.php';
require 'model/model.php';
require 'controller/controller.php';

$pageURI = $_SERVER['REQUEST_URI'];
$pageURI = substr($pageURI, strpos($pageURI, 'index.php')+10);
new Controller('home');
// if(!$pageURI)
    
// else    
//     new Controller($pageURI);
?>