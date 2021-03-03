import React, { Component, useState } from 'react';
import '../../App.css';
import '../Editions.js';
import '../../App.js';


function getIdJoueur(joueurs, Joueur,prenomJoueur){

  console.log(Joueur, joueurs)
    for (var joueur in joueurs){
        if(joueurs[joueur].NOM === Joueur && joueurs[joueur].PRENOM === prenomJoueur){
          return joueurs[joueur].IDJOUEUR
        }
      }
}
export default getIdJoueur;