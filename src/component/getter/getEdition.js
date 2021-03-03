import React, { Component, useState } from 'react';
import '../../App.css';
import '../Editions.js';
import '../../App.js';
import Tours from '../Tours.js';
import Edition from '../Editions.js';
import RechercheJoueurs from '../RechercheJoueurs.js';
import Confrontations from '../Confrontation.js';

function getEdition(editions, idedition){

  for (var edition in editions){
    if(parseInt(editions[edition].IDEDITION) === parseInt(idedition)){
      return editions[edition].ANNEE
    }
} 
}
export default getEdition;