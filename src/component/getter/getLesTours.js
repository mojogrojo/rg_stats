import React, { Component, useState } from 'react';
import '../../App.css';
import '../Editions.js';
import '../../App.js';

import Editions from '../Editions.js';


function getLesTours(tour){
    let tourConverti;

        switch(tour){
            case 1 : tourConverti = '1er Tour'; 
            break;
            case 2 : tourConverti = '2ème Tour'; 
            break;
            case 3 : tourConverti = '3ème Tour'; 
            break;
            case 4 : tourConverti= '4ème Tour'; 
            break;
            case 5 : tourConverti = 'Quart-de-finale'; 
            break;
            case 6 : tourConverti = 'Demi-finale'; 
            break;
            case 7 : tourConverti = 'Finale'; 
            break; 
            case 8 : tourConverti= 'Vainqueur'; 
            break;
        }
        return tourConverti    
    }
export default getLesTours;