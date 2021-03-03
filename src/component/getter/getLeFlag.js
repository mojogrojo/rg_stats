import React, { Component, useState } from 'react';
import '../../App.css';
import '../Editions.js';
import '../../App.js';


function getLeFlag(joueurs, idJoueur){
    
    for (var joueur in joueurs){
        if (idJoueur === joueurs[joueur].IDJOUEUR){
            var nat = joueurs[joueur].NAT
        }
    }
return nat
}

export default getLeFlag

