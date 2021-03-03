import React, { Component, useState } from 'react';
import '../../App.css';
import '../Editions.js';
import '../../App.js';
import Tours from '../Tours.js';
import Edition from '../Editions.js';
import Confrontations from '../Confrontation.js';
import getIdJoueur from './getIdJoueur';
import getTableau from './getTableau';
import getMatchEdition from './getMatchEdition';
import Modal from '../../Modal/Modal.js';

function GetAllInfos(props){
  let fullName = props.joueur.split(' ');
  let nomJoueur = fullName[0]
  console.log(fullName[1]);
    var idJoueur = getIdJoueur(props.joueurs, nomJoueur);
    if (props.annee === ''){
        idEdition = null;
    }
    else{
    var idEdition = getTableau(props.editions, props.annee);
    }
    var Matchs = getMatchEdition(idJoueur, nomJoueur, props.scores, props.joueurs, props.editions, idEdition, props.tour)
  

return (
<div className="container">
          <div className="row">
            <div className="col-sm">
             {Matchs}           
          </div>
        </div>
        </div>
        )
}

export default GetAllInfos

