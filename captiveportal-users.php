<?php

function writeUser($ra, $username, $course, $expirationDate) {

    $username = strtolower($username);
    $usernameArray = explode(" ",$username);

    $user = array();
    $user = "$usernameArray[0].";
    $user .= $usernameArray[1];

    $file = "captiveportal-usuarios.txt";

    $course = strtoupper($course);

    $username = ucwords($username);

    $userData = "";
    $userData .= "\n\nUsuário: $user\n";
    $userData .= "Senha: $ra\n";
    $userData .= "Data de Expiração: $expirationDate\n";
    $userData .= "Descrição: $username - $ra - $course\n\n";
    $userData .= "--------------------------";


    $fileOpen = fopen($file, "a+");

    fwrite($fileOpen, $userData);

    fclose($fileOpen);
}

function deleteCpf($cpf) {

    $fileContent = file_get_contents('captiveportal-contribuintes.txt');

    $fileContent = str_replace("$cpf,", "", $fileContent);

    // Removes the blank line that will appear after removal
    $fileContent = preg_replace('/^\h*\v+/m', '', $fileContent);

    file_put_contents('captiveportal-contribuintes.txt', $fileContent);

}

?>