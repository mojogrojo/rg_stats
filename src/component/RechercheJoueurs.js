import React, { Component, useState } from 'react';
import '../App.css';
import './Editions.js';
import '../index.css';
import '../App.js'
import getEdition from './getter/getEdition.js';
import getNbSets from './getter/getNbSets.js';
import getIdJoueur from './getter/getIdJoueur';
import getLesNoms from './getter/getLesNoms.js';

function RechercheJoueurs(props){

  console.log(joueurs);
  console.log(joueurs.PRENOM)
  const editions = props.editions;
  const scores = props.scores; 
  const joueurs = props.joueurs; 
  const joueur = props.joueur;
  console.log(joueur)

  console.log(joueurs, joueur)
  var idJoueur = getIdJoueur(joueurs, joueur);
  console.log(idJoueur);
  var Sets = '';
  var classGreen = '';
  var lesSets = '';
  var resultats = [];

    for (var score in scores){
      if(scores[score].VAINQ === idJoueur){
        classGreen = 'green';
        if(scores[score].IDJ1 === idJoueur){
          lesSets = [scores[score].set1w,scores[score].set1l,scores[score].set2w,scores[score].set2l,scores[score].set3w,
          scores[score].set3l,scores[score].set4w,scores[score].set4l,scores[score].set5w,scores[score].set5l]
          Sets = getNbSets(lesSets)
          resultats.push(<div className={classGreen}>
            Edition : {getEdition(editions, scores[score].IDEDITION)} - Tour : {scores[score].Tour} VS {getLesNoms(joueurs, scores[score].IDJ2)} - 
            Résultats : {Sets}
          </div>)
        }
        else{
          lesSets = [scores[score].set1l,scores[score].set1w,scores[score].set2l,scores[score].set2w,scores[score].set3l,
          scores[score].set3w,scores[score].set4l,scores[score].set4w,scores[score].set5l,scores[score].set5w]
          Sets = getNbSets(lesSets)
          resultats.push(<div className={classGreen}>
            Edition : {getEdition(editions, scores[score].IDEDITION)} - Tour : {scores[score].Tour} VS {getLesNoms(joueurs, scores[score].IDJ1)} - 
            Résultats : {Sets}
          </div>)
        }
      }
      else{
        classGreen= 'red';
        if(scores[score].IDJ1 === idJoueur){
        lesSets = [scores[score].set1w,scores[score].set1l,scores[score].set2w,scores[score].set2l,scores[score].set3w,
        scores[score].set3l,scores[score].set4w,scores[score].set4l,scores[score].set5w,scores[score].set5l]
        Sets = getNbSets(lesSets)
        resultats.push(<div className={classGreen}>
          Edition : {getEdition(editions, scores[score].IDEDITION)} - Tour : {scores[score].Tour} VS {getLesNoms(joueurs, scores[score].IDJ2)} - 
          Résultats : {Sets}
        </div>)
        }
        else if(scores[score].IDJ2 === idJoueur){
        lesSets = [scores[score].set1l,scores[score].set1w,scores[score].set2l,scores[score].set2w,scores[score].set3l,
        scores[score].set3w,scores[score].set4l,scores[score].set4w,scores[score].set5l,scores[score].set5w]
        Sets = getNbSets(lesSets)
        resultats.push(<div className={classGreen}>
            Edition : {getEdition(editions, scores[score].IDEDITION)} - Tour : {scores[score].Tour} VS {getLesNoms(joueurs, scores[score].IDJ1)} - 
            Résultats : {Sets}
        </div>)
      }
    }
  }

    return (
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div> Matchs : {resultats}
              </div>
            </div>           
          </div>
        </div>
     
    );
}

export default RechercheJoueurs;
