import React, { Component, useState } from 'react';
import '../App.css';
import './Editions.js';
import '../App.js';
import getIdJoueur from './getter/getIdJoueur.js';

function Participation(props){

  const participes = props.participe; 
  const joueurs = props.joueurs; 
  const editions = props.editions;
  const scores = props.scores;

  var fullNameJoueur = props.nom.split(' '); 
  var nomJoueur = fullNameJoueur[0];
  var prenomJoueur = fullNameJoueur[1];

  var participation=[];
  var idJoueur = getIdJoueur(joueurs, nomJoueur, prenomJoueur);
  var handleToUpdate = props.handler;
  var handleClicRetour = props.clicRetour;

 const handleClick = (value) => {
  document.getElementsByClassName('rechercheEditions')[0].value = value
  document.getElementsByClassName('OKTableau')[0].value = value
  document.getElementsByClassName('OKTableau')[0].click();
 }

    for (var participe in participes){
      if(participes[participe].IDJOUEUR === idJoueur){
        var idEdition = participes[participe].IDEDITION
        for (var edition in editions){
          if (editions[edition].IDEDITION === idEdition){               
            {participation.push(<div className='participationJoueur' key={editions[edition].IDEDITION} value={editions[edition].ANNEE}
            onClick={(event) => {
              handleToUpdate(event.target.innerHTML);
            handleClicRetour(true)}}
           ><h5>{editions[edition].ANNEE}</h5></div>)}
          }
        }
      }
    }

    if (idJoueur === undefined){
      return <div className='errorParticipation alert alert-danger'>Veuillez rentrer un joueur existant...</div>
    }
    else{
    return(
      <div className='participations'>
              <div className='alert alert-info'> <h3>{props.nom} a participé aux éditions suivantes : </h3>
              <br></br>
              <div className='row'>
                  {participation}
                  </div>         
              </div><div className='FetchTableau'></div></div>
               );
}}

export default Participation;