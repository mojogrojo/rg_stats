import React, { Component, useState } from 'react';
import '../../App.css';
import '../Editions.js';
import '../../App.js';
import getEdition from './getEdition.js';
import getLesTours from './getLesTours';

function getMeilleurTour(scores, idJoueur, editions){

        var resultatsMeilleurTour = [{
        }];
        var resultatsPireTour = [{
        }];

    for (var score in scores){
        if (scores[score].IDJ1 === idJoueur || scores[score].IDJ2 === idJoueur){  
            if(scores[score].VAINQ === idJoueur && scores[score].Tour === 7){
                resultatsMeilleurTour.push({tour : scores[score].Tour + 1, annee : getEdition(editions, scores[score].IDEDITION)});
            }
            else if(scores[score].VAINQ === idJoueur){
                resultatsMeilleurTour.push({tour : scores[score].Tour, annee : getEdition(editions, scores[score].IDEDITION)});
            }
            else if(scores[score].VAINQ != idJoueur){
                resultatsPireTour.push({tour : scores[score].Tour, annee : getEdition(editions, scores[score].IDEDITION)});
            }   
        }
    }

    let max = 0;
    let anneeMeilleurTour;
    let anneePireTour=9;

    resultatsMeilleurTour.forEach(resultatsMeilleurTour => {
      if (resultatsMeilleurTour.tour > max) {
        max = resultatsMeilleurTour.tour;
        anneeMeilleurTour = resultatsMeilleurTour.annee
      }
    });

    let min = 8;

    resultatsPireTour.forEach(resultatsPireTour => {
      if (resultatsPireTour.tour < min) {
        min = resultatsPireTour.tour;
        anneePireTour = resultatsPireTour.annee
      }
    });

    resultatsPireTour.forEach(resultatsPireTour => {
        if (resultatsPireTour.tour > max) {
            max = resultatsPireTour.tour;
            anneeMeilleurTour = resultatsPireTour.annee
          }
        });
    
        min = getLesTours(min);
        max = getLesTours(max);


    var lesTours = {
        meilleurTour : max,
        anneeMeilleurTour : anneeMeilleurTour,
        pireTour : min, 
        anneePireTour : anneePireTour
    }
    return lesTours
}
export default getMeilleurTour

