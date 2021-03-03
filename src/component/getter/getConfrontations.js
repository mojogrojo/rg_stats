import React, { Component, useState } from 'react';
import '../../App.css';
import '../Editions.js';
import '../../App.js';
import Tours from '../Tours.js';
import Edition from '../Editions.js';
import Confrontations from '../Confrontation.js';

function getConfrontations(joueurs, IDJ1, IDJ2){
    var info=[];
    for (var joueur in joueurs){   
        if(joueurs[joueur].NOM === IDJ1){
        info[0] = joueurs[joueur].IDJOUEUR;
        info[1] = joueurs[joueur].PRENOM + " " + joueurs[joueur].NOM;
        }
        else if(joueurs[joueur].NOM === IDJ2){
        info[2] = joueurs[joueur].IDJOUEUR;
        info[3] = joueurs[joueur].PRENOM + " " + joueurs[joueur].NOM;
        }
    }
return info
}

export default getConfrontations