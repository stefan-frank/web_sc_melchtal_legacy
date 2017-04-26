<?php

if ($_POST["recipient"] == null) {
	return;
}

$to = "claudia.voser@bluewin.ch";
$headers = "From: no-reply@sc-melchtal.ch" . "\r\n" . "CC: sfrank@bluewin.ch";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["Name"]);
  $email = test_input($_POST["Email"]);
  $adresse = test_input($_POST["Adresse"]);
  $ort = test_input($_POST["Ort"]);
  $telefon = test_input($_POST["Tel-Fax"]);
  $betreff = test_input($_POST["Betreff"]);
  $mitteilung = test_input($_POST["Mitteilung"]);
}


$txt = 
	"Name: 		" . $name . "\n" .
	"eMail: 	" . $email . "\n" .
	"Adresse: 	" . $adresse  . "\n" .
	"Ort: 		" . $ort  . "\n" .
	"Telefon: 	" . $telefon . "\n" .
	"\n" . 
	$mitteilung;
	
$betreff = "Kontaktanfrage von www.sc-melchtal.ch: " . $betreff;

mail($to,$betreff,$txt,$headers);

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>

<h1>Vielen Dank für Ihre Kontakt-Anfrage</h1>
