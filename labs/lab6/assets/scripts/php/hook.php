<?php
$directory = '../../images/gallery_images';

$allowed_extensions=array('jpg', 'jpeg', 'gif', 'png');

$file_parts=array();

$response = "";

$dir_handle= opendir($directory);

$i=0;

while($file = readdir($dir_handle))
{
    $file_components = explode('.', $file);
    $extension = strtolower(array_pop($file_components));
    if(in_array($extension, $allowed_extensions)){
        $response .= $directory.'/'.$file.'~';
        $i++;
    }
}
closedir($dir_handle);

echo substr_replace($response ,"", -1);
?>