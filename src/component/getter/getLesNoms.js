import React, { Component, useState } from 'react';
import '../../App.css';
import '../Editions.js';
import '../../App.js';
import Tours from '../Tours.js';
import Edition from '../Editions.js';

function getLesNoms(joueurs, idJoueur){
    for(var joueur in joueurs){
    if(joueurs[joueur].IDJOUEUR === idJoueur){
      return joueurs[joueur].NOM +" "+ joueurs[joueur].PRENOM
    }
  }
}
export default getLesNoms;