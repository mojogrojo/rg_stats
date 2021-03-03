<?php
$nom = $_POST['nom'];
$informations = [];
 
$db = new mysqli('127.0.0.1', 'root', '' ,'mlp');

if ($db->connect_errno) {
    printf("Échec de la connexion : %s\n", $mysqli->connect_error);
    exit();
}
 
if ($result = $db->query("SELECT * FROM joueur WHERE NOM='$nom'")) {
 
    while ($row = $result->fetch_array(MYSQLI_NUM))
    {
        $informations[] = $row;
    }
     
    /* Libération du jeu de résultats */
    $result->close();
}
else
{
    printf("Message d'erreur : %s\n", $db->error);
}
 
$informations = $informations[0];
 
var_dump($informations);
echo json_encode($informations);
?>