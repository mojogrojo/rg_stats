import React, { Component, useState } from 'react';
import '../../App.css';
import '../Editions.js';
import '../../App.js';
import Tours from '../Tours.js';
import Edition from '../Editions.js';

function getNbSets(lesSets){
    var nbSet = 5;
    var Sets;
    if(lesSets[6] === ' ' || lesSets[6] === ''){
        nbSet = 3;
      }
      else if (lesSets[8] === ' ' || lesSets[8] === ''){
        nbSet = 4;
      }
      switch(nbSet){
        case 4: 
          Sets = lesSets[0]+"-"+lesSets[1]+" / "+lesSets[2]+"-"+lesSets[3]+" / "+lesSets[4]+"-"+lesSets[5]+" / "+
          lesSets[6]+"-"+lesSets[7];
          break;
        case 3:
          Sets = lesSets[0]+"-"+lesSets[1]+" / "+lesSets[2]+"-"+lesSets[3]+" / "+lesSets[4]+"-"+lesSets[5];
          break;
        default:
          Sets = lesSets[0]+"-"+lesSets[1]+" / "+lesSets[2]+"-"+lesSets[3]+" / "+lesSets[4]+"-"+lesSets[5]+" / "+
          lesSets[6]+"-"+lesSets[7]+" / "+lesSets[8]+"-"+lesSets[9];
          break;
      }
      return Sets;
    }
export default getNbSets;