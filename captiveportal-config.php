<?php
// Config file for captive portal

DEFINE("DEBUG", false);
DEFINE("DBHOST", "localhost");
DEFINE("DBUSER", "radius");
DEFINE("DBPASS", "senai127");
DEFINE("DBNAME", "radius");

// When set to true, all successful user logins are written to database
// When set to false, only the last successful user login is written to database
$UPDATE = false;

// Language function
//TODO: function showErrorText approach of assigning all strings is not very effective (all strings assigned on every run!)
function showErrorText($string) {

// UI language strings
$macAdressErrorMessage_string = "Your device doesn't provide all necessary data for connection.";
$databaseConnectErrorMessage_string = "Cannot connect to the database. ";
$databaseRegisterErrorMessage_string = "Cannot register your user account.";
$databaseCheckErrorMessage_string = "Cannot check database for user.";
$incorrectInput_string = "The input you provided is incorrect.";
$incorrectConfirmationCode_string = "The code is incorrect.";
// $noScript_string = "Please click on Continue if your browser doesn't support JavaScript.";
  
return $$string;
}

?>
