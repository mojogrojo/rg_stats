import React, { Component, useState } from 'react';
import '../../App.css';
import '../Editions.js';
import '../../App.js';


function getMatchGagnes(scores, idJoueur){
    var resultats =    {
            nombreVictoire : 0,
            nombreDefaite : 0
        }      

    for (var score in scores){
        if (scores[score].IDJ1 === idJoueur || scores[score].IDJ2 === idJoueur){
            if (scores[score].VAINQ === idJoueur){
                resultats.nombreVictoire++;
            }
            else{
                resultats.nombreDefaite++; 
            }
        }
    }

   return resultats

}
export default getMatchGagnes

