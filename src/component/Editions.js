import React, { Component, useState } from 'react';
import '../App.css';
import '../App.js';
import Tours from './Tours.js'
import getTableau from './getter/getTableau.js';

function Editions(props){
  const joueurs = props.joueurs;
  var year = props.year;
  const editions = props.editions;
  const scores = props.scores;
  
  var handleVisibleJoueurs = props.handleVisibleJoueurs;

  var EditionPicked = getTableau(editions, year)   

  if (EditionPicked === undefined){
    return (
      <div className='alert alert-danger errorEditions'>Veuillez rentrer une année comprise entre 1968 et 2016</div>
    )
  }
  else{
    return (   
  // <table className='tableau row'>
      
       <div className='container'>

<div className='row'>
<Tours handleVisibleJoueurs={props.handleVisibleJoueurs.bind(this)} tour="1" nomTour='1er Tour' Year={EditionPicked}  scores={scores} joueurs={props.joueurs} col='td1 tr1'/>
<Tours handleVisibleJoueurs={props.handleVisibleJoueurs.bind(this)} tour="2" nomTour='2eme Tour' Year={EditionPicked}  scores={scores} joueurs={props.joueurs} col='td2 tr2'/>  
<Tours handleVisibleJoueurs={props.handleVisibleJoueurs.bind(this)} tour="3" nomTour='3eme Tour' Year={EditionPicked}  scores={scores} joueurs={props.joueurs} col='td3 tr3'/> 
<Tours handleVisibleJoueurs={props.handleVisibleJoueurs.bind(this)} tour="4" nomTour='4eme Tour' Year={EditionPicked}  scores={scores} joueurs={props.joueurs} col='td4 tr4'/> 
</div></div>

    );}
}
export default Editions;