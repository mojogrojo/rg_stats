import React, { Component, useState} from 'react';
import '../App.css';
import './Editions.js';
import '../App.js';
import getLesNoms from './getter/getLesNoms.js'
import getLeFlag from './getter/getLeFlag.js';

function Tours(props) {
    const joueurs = props.joueurs
    const NumberTour = props.tour;
    const YearPicked = props.Year;
    const scores = props.scores;
    var resultats = [];
    var visibleJoueurs = false;
    const [idJoueur, setidJoueur] = useState('');

    var handleClickJoueurs = props.handleVisibleJoueurs;
    var handleIdJoueur = props.handleIdJoueur;

    const higherScore = (score1, score2) => {
      if (score1 > score2 && score1<60){
        return true;
      }
      else return false;
    }

    for (var score in scores){
        if(parseInt(scores[score].IDEDITION) === parseInt(YearPicked) && parseInt(scores[score].Tour) === parseInt(NumberTour)) {

          var nat1 = getLeFlag(joueurs, scores[score].IDJ1);
          var nat2 = getLeFlag(joueurs, scores[score].IDJ2);

            resultats.push([
              <div className={props.col}>
                <tr>
                  <img className='flag' style={{
                    height:'2vh',
                    width:'1vw',
                    marginRight:'1vh',
                    index:10000,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}src={require('../medias/flags/'+nat1+'.png')}/>
              
                  <td className='tdJoueurs'
                    style={{
                    fontWeight: scores[score].VAINQ === scores[score].IDJ1 ? 'bolder' : 'none',
                    cursor:'pointer',
                   }}
                    onClick={(event) => {handleClickJoueurs(true);handleIdJoueur(event.target.innerHTML)}}>

                    {getLesNoms(joueurs, scores[score].IDJ1)}

                  </td>

                  <td className='tdScores' style={{fontWeight: higherScore(scores[score].set1w,scores[score].set1l) === true ? 'bold' : 'normal'}}>{scores[score].set1w}</td>
                  <td className='tdScores' style={{fontWeight: higherScore(scores[score].set2w,scores[score].set2l) === true ? 'bold' : 'normal'}}>{scores[score].set2w}</td>
                  <td className='tdScores' style={{fontWeight: higherScore(scores[score].set3w,scores[score].set3l) === true ? 'bold' : 'normal'}}>{scores[score].set3w}</td> 
                  <td className='tdScores' style={{fontWeight: higherScore(scores[score].set4w,scores[score].set4l) === true ? 'bold' : 'normal'}}>{scores[score].set4w}</td>
                  <td className='tdScores' style={{fontWeight: higherScore(scores[score].set5w,scores[score].set5l) === true ? 'bold' : 'normal'}}>{scores[score].set5w}</td>
                </tr>

                <tr>
                  <img className='flag' style={{
                   height:'2vh',
                   width:'1vw',
                   marginRight:'1vh',
                    backgroundImage: "url(.../medias/flags/"+{nat2}+".png)",
                    index:10000,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                    }} src={require('../medias/flags/'+nat2+'.png')}/>

                  <td className='tdJoueurs'
                    style={{
                    fontWeight: scores[score].VAINQ === scores[score].IDJ2 ? 'bolder' : 'none', 
                    cursor:'pointer'}}
                    onClick={(event) => {handleClickJoueurs(true);handleIdJoueur(event.target.innerHTML)}}>

                 {getLesNoms(joueurs, scores[score].IDJ2)}
                 
                 </td>
                  <td className='tdScores' style={{fontWeight: higherScore(scores[score].set1l,scores[score].set1w) === true ? 'bold' : 'normal'}}>{scores[score].set1l} </td>
                  <td className='tdScores' style={{fontWeight: higherScore(scores[score].set2l,scores[score].set2w) === true ? 'bold' : 'normal'}}>{scores[score].set2l}</td>
                  <td className='tdScores' style={{fontWeight: higherScore(scores[score].set3l,scores[score].set3w) === true ? 'bold' : 'normal'}}>{scores[score].set3l}</td>
                  <td className='tdScores' style={{fontWeight: higherScore(scores[score].set4l,scores[score].set4w) === true ? 'bold' : 'normal'}}>{scores[score].set4l}</td>
                  <td className='tdScores'style={{fontWeight: higherScore(scores[score].set5l,scores[score].setw) === true ? 'bold' : 'normal'}}>{scores[score].set5l}</td>
              </tr>
            </div>])         
        }
    }
    return (
     <div className='col'>
          <div className='tour' className={props.nmtr}>

                    {props.nomTour}

                  </div>

                <div style={{overflow:'hidden'}}>

                  {resultats}

                
                  </div>
                  </div>
      
       );}

export default Tours



