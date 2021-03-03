import React, { Component, useState } from 'react';
import '../../App.css';
import '../Editions.js';
import '../../App.js';
import Tours from '../Tours.js';
import Editions from '../Editions.js';
import PhaseFinale from '../PhaseFinale';
import RechercheJoueurs from '../RechercheJoueurs.js';
import Confrontations from '../Confrontation.js';
import Participation from '../Participation.js';

function fetchTableau(scores, joueurs, editions, participes, idedition){

      return (
          <div>
      {/* <div className='Editions Resultats' >
      <div className='side' onClick={() => this.DisplayAll("PhaseFinale")}>   
        <h2>Edition {idedition} <br></br> Phase Finale</h2>
        <div className='next'></div>
      </div> */}
      <Editions scores={scores} editions={editions} joueurs={joueurs} year={idedition}/></div>
    //  <div className='PhaseFinale Resultats'>
    //  <div className='offside' onClick={() => this.DisplayAll("Editions")}>   
    //     <h2>Edition {idedition} <br></br> Premiers tours</h2>
    //     <div className='previous' ></div>
    //   </div>
    //    <PhaseFinale scores={scores} editions={editions} joueurs={joueurs} year={idedition}/>
    // </div>
    // </div>)
      )}
export default fetchTableau;