import React, { Component, useState } from 'react';
import '../App.css';
import './Editions.js';
import '../index.css';
import '../App.js'
import getEdition from './getter/getEdition.js'
import getNbSets from './getter/getNbSets.js'
import getConfrontations from './getter/getConfrontations.js';
import getLesTours from './getter/getLesTours'

function Confrontations(props){
  
  const editions = props.editions;
  const scores = props.scores; 
  const joueurs = props.joueurs; 
  const participe = props.participe;
  var IDJ1='';
  var IDJ2='';
  
  try {
  const fullNameJ1 = props.IDJ1.split(' '); 
  const nomJoueur1 = fullNameJ1[0];
  const prenomJoueur1 = fullNameJ1[1];

  const fullNameJ2 = props.IDJ2.split(' '); 
  const nomJoueur2 = fullNameJ2[0];
  const prenomJoueur2 = fullNameJ2[1];

   IDJ1 = nomJoueur1
   IDJ2 = nomJoueur2
  
  } catch (error) {
    
  }

  var J1 = 'red';
  var J2 = 'red';
  
  var lesConfrontations=[];

  var lesSets;
  var Sets;

  var info = getConfrontations(joueurs, IDJ1, IDJ2);

  for(var score in scores){
    if(scores[score].IDJ1 === info[0] && scores[score].IDJ2 === info[2]){
      var edition = getEdition(editions, scores[score].IDEDITION)
      if(scores[score].VAINQ === info[0]){
        lesSets = [scores[score].set1w,scores[score].set1l,scores[score].set2w,scores[score].set2l,scores[score].set3w,
        scores[score].set3l,scores[score].set4w,scores[score].set4l,scores[score].set5w,scores[score].set5l]
        Sets = getNbSets(lesSets)
        lesConfrontations.push(
        <div className='row col-12 divConfrontation'>
          <div className='col-sm'>{info[1]}</div>
          <div className='col-sm'>{Sets}</div>          
          <div className='col-sm'>{info[3]}</div> 
          <div className='col-sm'>{edition} </div>
          <div className='col-sm'>{getLesTours(scores[score].Tour)}</div>        
        </div>
        )    
      }
      if(scores[score].VAINQ === info[2]){
        lesSets = [scores[score].set1l,scores[score].set1w,scores[score].set2l,scores[score].set2w,scores[score].set3l,
        scores[score].set3w,scores[score].set4l,scores[score].set4w,scores[score].set5l,scores[score].set5w]
        Sets = getNbSets(lesSets)
        lesConfrontations.push(
          <div className='row col-12 divConfrontation'>
          <div className='col-sm'>{info[3]}</div> 
          <div className='col-sm'>{Sets}</div>   
          <div className='col-sm'>{info[1]}</div>    
          <div className='col-sm'>{edition} </div>
          <div className='col-sm'>{getLesTours(scores[score].Tour)}</div>      
          </div>
        )    
      }
    }
    if(scores[score].IDJ2 === info[0] && scores[score].IDJ1 === info[2])
    {
      var edition = getEdition(editions, scores[score].IDEDITION)
      if(scores[score].VAINQ === info[0]){
        lesSets = [scores[score].set1l,scores[score].set1w,scores[score].set2l,scores[score].set2w,scores[score].set3l,
        scores[score].set3w,scores[score].set4l,scores[score].set4w,scores[score].set5l,scores[score].set5w]
        Sets = getNbSets(lesSets)
        lesConfrontations.push(
          <div className='row col-12 divConfrontation'>
          <div className='col-sm'>{info[1]}</div>
          <div className='col-sm'>{Sets}</div>          
          <div className='col-sm'>{info[3]}</div> 
          <div className='col-sm'>{edition} </div>
          <div className='col-sm'>{getLesTours(scores[score].Tour)}</div>    
        </div>
        )    
      }
      if(scores[score].VAINQ === info[2]){
        lesSets = [scores[score].set1w,scores[score].set1l,scores[score].set2w,scores[score].set2l,scores[score].set3w,
        scores[score].set3l,scores[score].set4w,scores[score].set4l,scores[score].set5w,scores[score].set5l]
        Sets = getNbSets(lesSets)
        lesConfrontations.push(
          <div className='row col-12 divConfrontation'>
          <div className='col-sm'>{info[3]}</div> 
          <div className='col-sm'>{Sets}</div>   
          <div className='col-sm'>{info[1]}</div>    
          <div className='col-sm'>{edition} </div>
          <div className='col-sm'>{getLesTours(scores[score].Tour)}</div>    
          </div>
        )    
      }
    }
  }
    return (
      

     
              <div className='confrontationParent'>{lesConfrontations}

           
        </div>
  
    );
}

export default Confrontations;
