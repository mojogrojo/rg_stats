import React, { Component, useState } from 'react';
import '../../App.css';
import '../Editions.js';
import '../../App.js';
import Tours from '../Tours.js';
import Edition from '../Editions.js';
import Confrontations from '../Confrontation.js';
import getEdition from './getEdition';

function getCarriere(participations, idJoueur, editions){
    
    var k = 0;
    var participationsJoueur= [];
    var lesEditions = [];



    for (var participation in participations){
        if (participations[participation].IDJOUEUR === idJoueur){
            participationsJoueur.push(participations[participation].IDEDITION)
        }
    }   

    var idEditionMin = Math.min(...participationsJoueur);
    var idEditionMax = Math.max(...participationsJoueur);

    lesEditions[0] = getEdition(editions, idEditionMin); 
    lesEditions[1] = getEdition(editions, idEditionMax); 

    return lesEditions

}

export default getCarriere