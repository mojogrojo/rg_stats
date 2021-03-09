import React, { Component, useState } from 'react';
import '../../App.css';
import '../Editions.js';
import '../../App.js';
import getIdJoueur from './getIdJoueur';
import getLesNoms from './getLesNoms';
import getLesMatchs from './getLesMatchs.js';
import Modal from '../../Modal/Modal.js';

function getBeteNoire(nomBeteNoire, prenomBeteNoire, joueurs, scores, editions, fetch = 0){
    var k = 0;
   var defaite = [];
   var idJoueur = getIdJoueur(joueurs, nomBeteNoire, prenomBeteNoire);
   
   if (idJoueur === undefined){
       return <div className='alert alert-danger'>Aucun résultat trouvé, assurez-vous d'avoir bien rentré un joueur existant.</div>
   }
   for (var score in scores){
    if (scores[score].IDJ1 === idJoueur && scores[score].VAINQ != idJoueur || scores[score].IDJ2 === idJoueur && scores[score].VAINQ != idJoueur){
        defaite[k] = scores[score].VAINQ;
        k += 1;
    }
   }

var modeMap = {};
var maxEl = defaite[0], maxCount = 1;
for(var i = 0; i < defaite.length; i++)
{
   var el = defaite[i];
   if(modeMap[el] == null)
       modeMap[el] = 1;
   else
       modeMap[el]++;  
   if(modeMap[el] > maxCount)
   {
       maxEl = el;
       maxCount = modeMap[el];
   }
}

var lesResultats = getLesMatchs(idJoueur, maxEl, joueurs, scores, editions)
var laBeteNoire = getLesNoms(joueurs, maxEl);


console.log(laBeteNoire)

return (<div><div className='beteNoire'>{laBeteNoire} <span className='maxCount'>{maxCount} défaite(s)</span></div>  
<br></br><br></br>
{lesResultats}
    {/* <button className='btn btn-success btnBeteNoire'
    onClick={() => {
        document.getElementsByClassName('lesResultats')[0].innerHTML = lesResultats
    }}      
      
    >Voir les résutlats
    </button>
<div className='lesResultats'></div> */}
</div>)
}

export default getBeteNoire

