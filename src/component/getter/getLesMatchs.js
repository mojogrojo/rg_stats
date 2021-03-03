import React, { Component, useState } from 'react';
import '../../App.css';
import '../Editions.js';
import '../../App.js';
import getIdJoueur from './getIdJoueur';
import getLesNoms from './getLesNoms';
import getEdition from './getEdition.js';
import getNbSets from './getNbSets.js';
import getLesTours from './getLesTours';

function getLesMatchs(idJoueur, idBeteNoire, joueurs, scores, editions){

    var lesSets; 
    var resultats=[];

   for (var score in scores){
    if (scores[score].VAINQ === idBeteNoire && scores[score].IDJ1 === idJoueur || scores[score].VAINQ === idBeteNoire && scores[score].IDJ2 === idJoueur){
        var edition = getEdition(editions, scores[score].IDEDITION); 
        if (scores[score].IDJ1 === idJoueur){
            lesSets = [scores[score].set1l,scores[score].set1w,scores[score].set2l,scores[score].set2w,scores[score].set3l,
            scores[score].set3w,scores[score].set4l,scores[score].set4w,scores[score].set5l,scores[score].set5w]
            resultats.push(<div className='BM'><span className='anneeBM'> {edition} </span><span className='tourBM'> {getLesTours(scores[score].Tour)} </span><span className='scoreBM'> {getNbSets(lesSets)} </span></div>)
          
        }
        else{
            lesSets = [scores[score].set1w,scores[score].set1l,scores[score].set2w,scores[score].set2l,scores[score].set3w,
            scores[score].set3l,scores[score].set4w,scores[score].set4l,scores[score].set5w,scores[score].set5l]
            resultats.push(<div className='BM'><span className='anneeBM'> {edition} </span><span className='tourBM'> {getLesTours(scores[score].Tour)} </span><span className='scoreBM'> {getNbSets(lesSets)} </span></div>)
            
        }       
    }   
   }
   return resultats
}
export default getLesMatchs

