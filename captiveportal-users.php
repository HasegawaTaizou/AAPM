<?php

function deleteCpf($cpf) {

    $fileContent = file_get_contents('captiveportal-contribuintes.txt');

    $fileContent = str_replace("$cpf,", "", $fileContent);

    // Removes the blank line that will appear after removal
    $fileContent = preg_replace('/^\h*\v+/m', '', $fileContent);

    file_put_contents('captiveportal-contribuintes.txt', $fileContent);

}

?>