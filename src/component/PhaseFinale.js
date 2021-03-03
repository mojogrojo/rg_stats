import React, { Component, useState } from 'react';
import '../App.css';
import '../App.js';
import Tours from './Tours.js'
import getEdition from './getter/getEdition.js';
import getTableau from './getter/getTableau.js';

function phaseFinale(props){
  const joueurs = props.joueurs;
  var year = props.year;
  const editions = props.editions;
  const scores = props.scores;

  var EditionPicked = getTableau(editions, year)   

    return (   
      <div className='container'>
      <div className='row'>
<Tours tour="5" nomTour="Quart de finale" Year={EditionPicked}  scores={scores} joueurs={props.joueurs} col='td1 tr1'/>
<Tours tour="6" nomTour="Demi-finale" Year={EditionPicked}  scores={scores} joueurs={props.joueurs} col='td2 tr2'/>
<Tours tour="7" nomTour="Finale" Year={EditionPicked}  scores={scores} joueurs={props.joueurs} col='td3 tr3'/>      
</div></div>
    );
}
export default phaseFinale;