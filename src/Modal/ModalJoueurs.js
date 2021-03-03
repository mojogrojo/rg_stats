import React, { Component, useState } from 'react';
import '../App.css';
import GetAllInfos from '../component/getter/getAllInfos.js';
import getBeteNoire from '../component/getter/getBeteNoire.js'
import getLesMatchs from '../component/getter/getLesMatchs.js';
import getIdJoueur from '../component/getter/getIdJoueur';
import getLeFlag from '../component/getter/getLeFlag';
import getLesNoms from '../component/getter/getLesNoms'; 
import getCarriere from '../component/getter/getCarriere'
import getMatchGagnes from '../component/getter/getMatchGagnes'
import getMeilleurTour from '../component/getter/getMeilleurTour'
import $ from 'jquery';
import node from '../webpack.config.js'
import { pathToFileURL } from 'url';
import * as fs from 'fs';
import { createRequire } from 'module';

function ModalJoueurs(props){

    const joueurs=props.joueurs; 
    const scores= props.scores; 
    const joueur = props.joueur; 
    const editions = props.editions;
    const participations = props.participations;
    const leJoueur = props.handleIdJoueur.split(' ');
    const nomJoueur = leJoueur[0];
    const prenomJoueur = leJoueur[1];
    const idJoueur = getIdJoueur(joueurs, nomJoueur, prenomJoueur);

    var flag = 'France';
    var nat = getLeFlag(joueurs, idJoueur)

    
    function getPhotos(fullName){
        try{
            if(fs.existsSync('C:/Users/Jonathan/Desktop/myLittleProject/REACT_APP/src/photos/'+fullName+'.png')){
                return "C:/Users/Jonathan/Desktop/myLittleProject/REACT_APP/src/photos/"+fullName+".png"
            }
        }catch{
            return '../medias/defaultPicture.jpg'
        }
    }   


    if (props.handleIdJoueur){
         flag = nat;
    }
    var resultats = getMatchGagnes(scores, idJoueur);
    var lesTours = getMeilleurTour(scores, idJoueur, editions);

    var ratio = Math.round(resultats.nombreVictoire / resultats.nombreDefaite*100)/100;
    var PourcentageVictoire =  Math.round((((resultats.nombreVictoire) / (resultats.nombreVictoire + resultats.nombreDefaite)) * 100)*100)/100;
    var fullName = getLesNoms(joueurs, idJoueur);
    if (idJoueur != undefined){
    var Name = getLesNoms(joueurs, idJoueur).split(' ')[0];
    var Prenom = getLesNoms(joueurs, idJoueur).split(' ')[1]
    }
    return(
    
    <div className='ModalJoueurs'
    style={{
        transform: props.visibleJoueurs === true ? 'translateY(0vh' : 'translateY(-100vh)',
        display: props.visibleJoueurs === true ? 'block' : 'none'
    }}
    >

<img src={require('../medias/iconMain/resetSite.png')} onClick={props.hideJoueurs} style={{
        float:'right',
        width:'4.5%', 
        height:'4.5%',
        cursor:'pointer',

        }}/>
        <br></br>
        <div className='photo'><img src={getPhotos(Name + " " + Prenom)} style={{        
            width:'120',
            height:'300',
            backgroundPosition:'center',
            backgroundSize:'contain',
            contain:'content',
            zIndex : '100000'
        }}/>
        </div>
        <div className='fullName'>{Name} <div className='fullNamePrenom'>{Prenom}</div></div><img style={{
            height:'16%',
            width:'16%',
            float:'right',
            marginTop:'-14%',
            marginRight:'8%'
        }}src={require('../medias/flags/'+flag+'.png')} />
        <div className='Nationalite'>{getLeFlag(joueurs, idJoueur)}</div>
    <div className='carriere'><b>Participation :</b> <br></br>Première participation : <b>{getCarriere(participations, idJoueur, editions)[1]}</b>
     <br></br> Dernière participation : <b>{getCarriere(participations, idJoueur, editions)[0]}</b></div>
        <div className='MatchsGagnes row'>{resultats.nombreVictoire} Victoire(s) / {resultats.nombreDefaite} Défaite(s) <br></br>{PourcentageVictoire}% de victoires (ratio : {ratio})
        </div>
        <div className='MatchsPerdus'>Meilleur performance : <div className='lesTours'>{lesTours.meilleurTour} en {lesTours.anneeMeilleurTour}<img style={{
            display: lesTours.meilleurTour === 'Demi-finale' || lesTours.meilleurTour === 'Finale' || lesTours.meilleurTour === 'Vainqueur' ? 'inline' : 'none',
            width:'10%',
            height:'10%',
            float:'right'
        }}
        // src={require('../medias/iconMain/'+lesTours.meilleurTour+'.png')}
        /></div>
       Pire performance : <div className='lesTours'>{lesTours.pireTour} en {lesTours.anneePireTour}</div>
        </div></div>
    )}

export default ModalJoueurs