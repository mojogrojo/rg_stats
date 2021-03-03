import React, { Component, useState } from 'react';
import '../../App.css';
import '../Editions.js';
import '../../App.js';
import Tours from '../Tours.js';
import Edition from '../Editions.js';
import Confrontations from '../Confrontation.js';
import getIdJoueur from './getIdJoueur';
import getNbSets from './getNbSets'
import getLesNoms from './getLesNoms'
import getEdition from './getEdition';
import getConfrontations from './getConfrontations';


function getMatchEdition(idJoueur, nomJoueur, scores, joueurs, editions, idEdition, tour){
    
var resultats = [];
var lesSets= '';
var Sets= "";
var classGreen ='';
var tours='';

    if (idEdition === null && tour === '0'){
        for (var score in scores){
            if (scores[score].IDJ1 === idJoueur){
                if (scores[score].VAINQ === idJoueur){
                
                classGreen='green'
                lesSets = [scores[score].set1w,scores[score].set1l,scores[score].set2w,scores[score].set2l,scores[score].set3w,
                scores[score].set3l,scores[score].set4w,scores[score].set4l,scores[score].set5w,scores[score].set5l]
                Sets = getNbSets(lesSets)
                switch(scores[score].Tour){
                    case 5:
                        tours = 'Quart de finale';
                    break;
                    case 6:
                        tours = 'Demi-finale';
                    break;
                    case 7:
                        tours = 'Finale';
                    break;
                    default:
                        tours="tour " + scores[score].Tour
                }
                resultats.push(<div className={classGreen}><div className='VDM'>VICTOIRE !</div>  <div className='anneeM'>{getEdition(editions, scores[score].IDEDITION)}
                 </div> <div className='tourM'>{tours}</div>  <div className='adversaireM'> {getLesNoms(joueurs, scores[score].IDJ2)} </div> 
                 <div className='resultatsM'>{getNbSets(lesSets)}</div></div>
                )               
                }
                else{
                classGreen = 'red'
                lesSets = [scores[score].set1l,scores[score].set1w,scores[score].set2l,scores[score].set2w,scores[score].set3l,
                scores[score].set3w,scores[score].set4l,scores[score].set4w,scores[score].set5l,scores[score].set5w]
                Sets = getNbSets(lesSets)
                switch(scores[score].Tour){
                    case 5:
                        tours = 'Quart de finale';
                    break;
                    case 6:
                        tours = 'Demi-finale';
                    break;
                    case 7:
                        tours = 'Finale';
                    break;
                    default:
                        tours="tour " + scores[score].Tour
                }
                resultats.push(<div className={classGreen}><div className="VDM">DEFAITE ! </div>  <div className='anneeM'>{getEdition(editions, scores[score].IDEDITION)}
                </div>  <div className='tourM'>{tours} </div>  <div className='adversaireM'>{getLesNoms(joueurs, scores[score].IDJ2)} </div> 
                <div className='resultatsM'>{getNbSets(lesSets)}</div></div>
                )   
                }
            }
            else if (scores[score].IDJ2 === idJoueur){
                if (scores[score].VAINQ === idJoueur){
                    classGreen='green'
                    lesSets = [scores[score].set1l,scores[score].set1w,scores[score].set2l,scores[score].set2w,scores[score].set3l,
                    scores[score].set3w,scores[score].set4l,scores[score].set4w,scores[score].set5l,scores[score].set5w]
                    Sets = getNbSets(lesSets)
                    switch(scores[score].Tour){
                        case 5:
                            tours = 'Quart de finale';
                        break;
                        case 6:
                            tours = 'Demi-finale';
                        break;
                        case 7:
                            tours = 'Finale';
                        break;
                        default:
                            tours="tour " + scores[score].Tour
                    }
                    resultats.push(<div className={classGreen}><div className='VD'>VICTOIRE ! </div>  <div className='anneeM'>{getEdition(editions, scores[score].IDEDITION)} 
                    </div>   <div className='tourM'> {tours} </div>  <div className='adversaireM'> {getLesNoms(joueurs, scores[score].IDJ1)} </div> 
                    <div className='resultatsM'> {getNbSets(lesSets)}</div></div>
                    )   
                    }
                    else{
                    classGreen = 'red'
                    lesSets = [scores[score].set1w,scores[score].set1l,scores[score].set2w,scores[score].set2l,scores[score].set3w,
                    scores[score].set3l,scores[score].set4w,scores[score].set4l,scores[score].set5w,scores[score].set5l]
                    Sets = getNbSets(lesSets)
                    switch(scores[score].Tour){
                        case 5:
                            tours = 'Quart de finale';
                        break;
                        case 6:
                            tours = 'Demi-finale';
                        break;
                        case 7:
                            tours = 'Finale';
                        break;
                        default:
                            tours="tour " + scores[score].Tour
                    }
                    resultats.push(<div className={classGreen}><div className='VD'>DEFAITE ! </div>  <div className='anneeM'> {getEdition(editions, scores[score].IDEDITION)}
                    </div>  <div className='tourM'>{tours}</div>  <div className='adversaireM'> {getLesNoms(joueurs, scores[score].IDJ1)}</div> 
                    <div className='resultatsM'> {getNbSets(lesSets)}</div></div>
                    )            
                    }
                    }
            
    }}
    else if (tour === '0'){
    for (var score in scores){
        if (scores[score].IDEDITION === idEdition && scores[score].IDJ1 === idJoueur){
            if (scores[score].VAINQ === idJoueur){
                classGreen='green'
            lesSets = [scores[score].set1w,scores[score].set1l,scores[score].set2w,scores[score].set2l,scores[score].set3w,
            scores[score].set3l,scores[score].set4w,scores[score].set4l,scores[score].set5w,scores[score].set5l]
            Sets = getNbSets(lesSets)
            switch(scores[score].Tour){
                case 5:
                    tours = 'Quart de finale';
                break;
                case 6:
                    tours = 'Demi-finale';
                break;
                case 7:
                    tours = 'Finale';
                break;
                default:
                    tours="tour " + scores[score].Tour
            }
            resultats.push(<div className={classGreen}><div className='VDM'>VICTOIRE !</div>  <div className='anneeM'>{getEdition(editions, scores[score].IDEDITION)}
            </div> <div className='tourM'>{tours}</div>  <div className='adversaireM'> {getLesNoms(joueurs, scores[score].IDJ2)} </div> 
            <div className='resultatsM'>{getNbSets(lesSets)}</div></div>
            )               
            }
            else{
                classGreen = 'red'
            lesSets = [scores[score].set1l,scores[score].set1w,scores[score].set2l,scores[score].set2w,scores[score].set3l,
            scores[score].set3w,scores[score].set4l,scores[score].set4w,scores[score].set5l,scores[score].set5w]
            Sets = getNbSets(lesSets)
            switch(scores[score].Tour){
                case 5:
                    tours = 'Quart de finale';
                break;
                case 6:
                    tours = 'Demi-finale';
                break;
                case 7:
                    tours = 'Finale';
                break;
                default:
                    tours="tour " + scores[score].Tour
            }
            resultats.push(<div className={classGreen}><div className="VDM">DEFAITE ! </div>  <div className='anneeM'>{getEdition(editions, scores[score].IDEDITION)}
            </div>  <div className='tourM'>{tours} </div>  <div className='adversaireM'>{getLesNoms(joueurs, scores[score].IDJ2)} </div> 
            <div className='resultatsM'>{getNbSets(lesSets)}</div></div>
            )               
            }
        }
        else if (scores[score].IDEDITION === idEdition && scores[score].IDJ2 === idJoueur){
            if (scores[score].VAINQ === idJoueur){
                classGreen='green'
                lesSets = [scores[score].set1l,scores[score].set1w,scores[score].set2l,scores[score].set2w,scores[score].set3l,
                scores[score].set3w,scores[score].set4l,scores[score].set4w,scores[score].set5l,scores[score].set5w]
                Sets = getNbSets(lesSets)
                switch(scores[score].Tour){
                    case 5:
                        tours = 'Quart de finale';
                    break;
                    case 6:
                        tours = 'Demi-finale';
                    break;
                    case 7:
                        tours = 'Finale';
                    break;
                    default:
                        tours="tour " + scores[score].Tour
                }
                resultats.push(<div className={classGreen}><div className='VD'>VICTOIRE ! </div>  <div className='anneeM'>{getEdition(editions, scores[score].IDEDITION)} 
                </div>   <div className='tourM'> {tours} </div>  <div className='adversaireM'> {getLesNoms(joueurs, scores[score].IDJ1)} </div> 
                <div className='resultatsM'> {getNbSets(lesSets)}</div></div>                )   
                }
                else{
                    classGreen = 'red'
                lesSets = [scores[score].set1w,scores[score].set1l,scores[score].set2w,scores[score].set2l,scores[score].set3w,
                scores[score].set3l,scores[score].set4w,scores[score].set4l,scores[score].set5w,scores[score].set5l]
                Sets = getNbSets(lesSets)
                switch(scores[score].Tour){
                    case 5:
                        tours = 'Quart de finale';
                    break;
                    case 6:
                        tours = 'Demi-finale';
                    break;
                    case 7:
                        tours = 'Finale';
                    break;
                    default:
                        tours="tour " + scores[score].Tour
                }
                resultats.push(<div className={classGreen}><div className='VD'>DEFAITE ! </div>  <div className='anneeM'> {getEdition(editions, scores[score].IDEDITION)}
                </div>  <div className='tourM'>{tours}</div>  <div className='adversaireM'> {getLesNoms(joueurs, scores[score].IDJ1)}</div> 
                <div className='resultatsM'> {getNbSets(lesSets)}</div></div>                )            
                }
                }
        }}
        else if(idEdition === null){
            for (var score in scores){
                if (scores[score].IDJ1 === idJoueur && scores[score].Tour  === parseInt(tour)){
                    if (scores[score].VAINQ === idJoueur){
                        classGreen='green'
                    lesSets = [scores[score].set1w,scores[score].set1l,scores[score].set2w,scores[score].set2l,scores[score].set3w,
                    scores[score].set3l,scores[score].set4w,scores[score].set4l,scores[score].set5w,scores[score].set5l]
                    Sets = getNbSets(lesSets)
                    switch(scores[score].Tour){
                        case 5:
                            tours = 'Quart de finale';
                        break;
                        case 6:
                            tours = 'Demi-finale';
                        break;
                        case 7:
                            tours = 'Finale';
                        break;
                        default:
                            tours="tour " + scores[score].Tour
                    }
                    resultats.push(<div className={classGreen}><div className='VDM'>VICTOIRE !</div>  <div className='anneeM'>{getEdition(editions, scores[score].IDEDITION)}
                    </div> <div className='tourM'>{tours}</div>  <div className='adversaireM'> {getLesNoms(joueurs, scores[score].IDJ2)} </div> 
                    <div className='resultatsM'>{getNbSets(lesSets)}</div></div>                    )               
                    }
                    else{
                        classGreen = 'red'
                    lesSets = [scores[score].set1l,scores[score].set1w,scores[score].set2l,scores[score].set2w,scores[score].set3l,
                    scores[score].set3w,scores[score].set4l,scores[score].set4w,scores[score].set5l,scores[score].set5w]
                    Sets = getNbSets(lesSets)
                    switch(scores[score].Tour){
                        case 5:
                            tours = 'Quart de finale';
                        break;
                        case 6:
                            tours = 'Demi-finale';
                        break;
                        case 7:
                            tours = 'Finale';
                        break;
                        default:
                            tours="tour " + scores[score].Tour
                    }
                    resultats.push(<div className={classGreen}><div className="VDM">DEFAITE ! </div>  <div className='anneeM'>{getEdition(editions, scores[score].IDEDITION)}
                    </div>  <div className='tourM'>{tours} </div>  <div className='adversaireM'>{getLesNoms(joueurs, scores[score].IDJ2)} </div> 
                    <div className='resultatsM'>{getNbSets(lesSets)}</div></div>                    )   
                    }
                }
                else if (scores[score].IDJ2 === idJoueur && scores[score].Tour  === parseInt(tour)){
                    if (scores[score].VAINQ === idJoueur){
                        classGreen='green'
                        lesSets = [scores[score].set1l,scores[score].set1w,scores[score].set2l,scores[score].set2w,scores[score].set3l,
                        scores[score].set3w,scores[score].set4l,scores[score].set4w,scores[score].set5l,scores[score].set5w]
                        Sets = getNbSets(lesSets)
                        switch(scores[score].Tour){
                            case 5:
                                tours = 'Quart de finale';
                            break;
                            case 6:
                                tours = 'Demi-finale';
                            break;
                            case 7:
                                tours = 'Finale';
                            break;
                            default:
                                tours="tour " + scores[score].Tour
                        }
                        resultats.push(<div className={classGreen}><div className='VD'>VICTOIRE ! </div>  <div className='anneeM'>{getEdition(editions, scores[score].IDEDITION)} 
                        </div>   <div className='tourM'> {tours} </div>  <div className='adversaireM'> {getLesNoms(joueurs, scores[score].IDJ1)} </div> 
                        <div className='resultatsM'> {getNbSets(lesSets)}</div></div>                                  )   
                        }
                        else{
                            classGreen = 'red'
                        lesSets = [scores[score].set1w,scores[score].set1l,scores[score].set2w,scores[score].set2l,scores[score].set3w,
                        scores[score].set3l,scores[score].set4w,scores[score].set4l,scores[score].set5w,scores[score].set5l]
                        Sets = getNbSets(lesSets)
                        switch(scores[score].Tour){
                            case 5:
                                tours = 'Quart de finale';
                            break;
                            case 6:
                                tours = 'Demi-finale';
                            break;
                            case 7:
                                tours = 'Finale';
                            break;
                            default:
                                tours="tour " + scores[score].Tour
                        }
                        resultats.push(<div className={classGreen}><div className='VD'>DEFAITE ! </div>  <div className='anneeM'> {getEdition(editions, scores[score].IDEDITION)}
                        </div>  <div className='tourM'>{tours}</div>  <div className='adversaireM'> {getLesNoms(joueurs, scores[score].IDJ1)}</div> 
                        <div className='resultatsM'> {getNbSets(lesSets)}</div></div>                             )            
                        }
                        }
                }
        }
        else{
            for (var score in scores){
                if (scores[score].IDEDITION === idEdition && scores[score].IDJ1 === idJoueur && scores[score].Tour  === parseInt(tour)){
                    if (scores[score].VAINQ === idJoueur){
                        classGreen='green'
                    lesSets = [scores[score].set1w,scores[score].set1l,scores[score].set2w,scores[score].set2l,scores[score].set3w,
                    scores[score].set3l,scores[score].set4w,scores[score].set4l,scores[score].set5w,scores[score].set5l]
                    Sets = getNbSets(lesSets)
                    switch(scores[score].Tour){
                        case 5:
                            tours = 'Quart de finale';
                        break;
                        case 6:
                            tours = 'Demi-finale';
                        break;
                        case 7:
                            tours = 'Finale';
                        break;
                        default:
                            tours="tour " + scores[score].Tour
                    }
                    resultats.push(<div className={classGreen}><div className='VDM'>VICTOIRE !</div>  <div className='anneeM'>{getEdition(editions, scores[score].IDEDITION)}
                    </div> <div className='tourM'>{tours}</div>  <div className='adversaireM'> {getLesNoms(joueurs, scores[score].IDJ2)} </div> 
                    <div className='resultatsM'>{getNbSets(lesSets)}</div></div>                            )               
                    }
                    else{
                        classGreen = 'red'
                    lesSets = [scores[score].set1l,scores[score].set1w,scores[score].set2l,scores[score].set2w,scores[score].set3l,
                    scores[score].set3w,scores[score].set4l,scores[score].set4w,scores[score].set5l,scores[score].set5w]
                    Sets = getNbSets(lesSets)
                    switch(scores[score].Tour){
                        case 5:
                            tours = 'Quart de finale';
                        break;
                        case 6:
                            tours = 'Demi-finale';
                        break;
                        case 7:
                            tours = 'Finale';
                        break;
                        default:
                            tours="tour " + scores[score].Tour
                    }
                    resultats.push(<div className={classGreen}><div className="VDM">DEFAITE ! </div>  <div className='anneeM'>{getEdition(editions, scores[score].IDEDITION)}
                    </div>  <div className='tourM'>{tours} </div>  <div className='adversaireM'>{getLesNoms(joueurs, scores[score].IDJ2)} </div> 
                    <div className='resultatsM'>{getNbSets(lesSets)}</div></div>                                   )   
                    }
                }
                else if (scores[score].IDEDITION === idEdition && scores[score].IDJ2 === idJoueur && scores[score].Tour  === parseInt(tour)){
                    if (scores[score].VAINQ === idJoueur){
                        classGreen='green'
                        lesSets = [scores[score].set1l,scores[score].set1w,scores[score].set2l,scores[score].set2w,scores[score].set3l,
                        scores[score].set3w,scores[score].set4l,scores[score].set4w,scores[score].set5l,scores[score].set5w]
                        Sets = getNbSets(lesSets)
                        switch(scores[score].Tour){
                            case 5:
                                tours = 'Quart de finale';
                            break;
                            case 6:
                                tours = 'Demi-finale';
                            break;
                            case 7:
                                tours = 'Finale';
                            break;
                            default:
                                tours="tour " + scores[score].Tour
                        }
                        resultats.push(<div className={classGreen}><div className='VD'>VICTOIRE ! </div>  <div className='anneeM'>{getEdition(editions, scores[score].IDEDITION)} 
                        </div>   <div className='tourM'> {tours} </div>  <div className='adversaireM'> {getLesNoms(joueurs, scores[score].IDJ1)} </div> 
                        <div className='resultatsM'> {getNbSets(lesSets)}</div></div>                                                   )   
                        }
                        else{
                            classGreen = 'red'
                        lesSets = [scores[score].set1w,scores[score].set1l,scores[score].set2w,scores[score].set2l,scores[score].set3w,
                        scores[score].set3l,scores[score].set4w,scores[score].set4l,scores[score].set5w,scores[score].set5l]
                        Sets = getNbSets(lesSets)
                        switch(scores[score].Tour){
                            case 5:
                                tours = 'Quart de finale';
                            break;
                            case 6:
                                tours = 'Demi-finale';
                            break;
                            case 7:
                                tours = 'Finale';
                            break;
                            default:
                                tours="tour " + scores[score].Tour
                        }
                        resultats.push(<div className={classGreen}><div className='VD'>DEFAITE ! </div>  <div className='anneeM'> {getEdition(editions, scores[score].IDEDITION)}
                        </div>  <div className='tourM'>{tours}</div>  <div className='adversaireM'> {getLesNoms(joueurs, scores[score].IDJ1)}</div> 
                        <div className='resultatsM'> {getNbSets(lesSets)}</div></div>                               )            
                        }
                        }
                }
            }
            return resultats; 
            }
               
export default getMatchEdition

