import React, { Component, useState } from 'react';
import '../../App.css';
import '../Editions.js';
import '../../App.js';

function getTableau(editions, year){

  for (var edition in editions){
    if(parseInt(editions[edition].ANNEE) === parseInt(year)){
      return editions[edition].IDEDITION
    }
} 
}
export default getTableau;