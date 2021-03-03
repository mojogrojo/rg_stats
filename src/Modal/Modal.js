import React, { Component, useState } from 'react';
import '../App.css';
import GetAllInfos from '../component/getter/getAllInfos.js';
import getBeteNoire from '../component/getter/getBeteNoire.js'
import getLesMatchs from '../component/getter/getLesMatchs.js';
// import chairCanon from '../component/getter/getchairCanon.js'
import $ from 'jquery';
import {findDOMNode} from 'react-dom';
import * as jquery from 'jquery';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/selectable.css';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/selectable';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
import jqueryui from 'jquery-ui'


function Modal(props){

    const [annee, setAnnee] = useState('');
    const [joueur, setJoueur] = useState('');
    const [adversaire, setAdversaire] = useState('');    
    const [valTour, setvalTour] = useState('0')
    const [beteNoire, setbeteNoire] = useState('');
    const [chairCanon, setchairCanon] = useState('')
    const joueurs = props.joueurs; 
    const editions = props.editions; 
    const scores = props.scores;  

    var fetchinfos = true;

      const onChange1 = (value) => {
        setJoueur(document.getElementsByClassName('nomJoueur')[0].innerHTML);
        setbeteNoire('');
        setlaBeteNoire('');
      }

      const onChange2 = (value) => {
        setJoueur('');
        setbeteNoire(value);
        setvalTour('0');
        setAnnee('');
        setlaBeteNoire('');
        document.getElementById('tourPicked').selectedIndex = '0';
      }
      const onChange3 = (value) => {
        setAnnee(value); 
        setbeteNoire('');
        setlaBeteNoire('');
      }
      const onChange4 = (value) => {
        setvalTour(value);
        setbeteNoire('');
        setlaBeteNoire('');
      }

      const fonctionJS = () => {  
        let resultats = [];
        joueurs.forEach(joueur => {
        resultats.push(joueur.NOM + " " + joueur.PRENOM);})
        $('#autoComplete').autocomplete({
          source: resultats,
          autoFocus: true,
          source : resultats,
          delay: 0,
          minLength: 0, 
          select: function(event, ui) {
            setJoueur(ui.item.label)}
          })
    }

    const fonctionJS2 = () => {  
      let resultats = [];
      joueurs.forEach(joueur => {
      resultats.push(joueur.NOM + " " + joueur.PRENOM);})
      $('#autoComplete2').autocomplete(    
        {autoFocus: true,
        source : resultats,
        delay: 0,
        minLength: 0,
        select: function(event, ui) {
        setbeteNoire(ui.item.label.split(' ')[0])}
        })}

    const [laBeteNoire, setlaBeteNoire] = useState('');
    return(<center>
    <div className='Modal'
    style={{
        transform: props.visible ? 'translateY(0vh' : 'translateY(-100vh)',
        display: props.visible ? 'block' : 'none'
    }}
    >
      <img src={require('../medias/iconMain/resetSite.png')} onClick={props.hide} style={{
        float:'right',
        width:'3%', 
        height:'3%',
        cursor:'pointer',

        }}/>
 <br></br>
{/* boutons recherche RechercheJoueurs */}
<div className='form-row'>Nom du joueur recherché :
  <input type='text' id='autoComplete' className='form-control col-12 nomJoueur' placeholder="Joueur..."  onChange={(event) => { 
    // onChange1(event.target.value); 
   fonctionJS() 
  }}
    
    // e => setJoueur(e.target.value) && setbeteNoire('')}
    
    />
</div>
{/* Boutons ANNEEs */}
       <div className='form-row'>
  <input type='text' className='form-control col-6' placeholder="Selectionnez l'année..." name="year" value={annee} onChange={(event) => onChange3(event.target.value)}/>
{/* </div> */}
{/* boutons recherche Tour*/}  
{/* <div className='form-row'> Selectionnez le tour cherché :
  <input type='text' autocomplete="off" list='browsers' id='Participation' className='form-control col-12' placeholder="Tour..." name='nom' value={tour} onChange={e => setTour(e.target.value)} />
  </div> */}
<select placeholder="Tour..." id='tourPicked' onChange={(event) => onChange4(event.target.value)}>
<option value="0" selected="selected"></option>
<option value="1"  >Tour 1</option>
<option value="2" >Tour 2</option>
<option value="3" >Tour 3</option>
<option value="4">Tour 4</option>
<option value="5">Quart de finale</option>
<option value="6">Demi-finale</option>
<option value="7">Finale</option></select></div>

  {/* boutons recherche Adversaire */}

        <button className='btn-danger' onClick={props.hide}>Quitter la recherche croisée</button>

        <div className='form-row'>   Chercher la bête noire d'un joueur... :
  <input type='text' id='autoComplete2' className='form-control col-12 autoComplete2' placeholder="Bête noire..." value={beteNoire} onChange={(event) => {onChange2(event.target.value);
  fonctionJS2()}}/>
{/* <input type='text' id='chairCanon' className='form-control col-12' placeholder="chair à canon..." value={chairCanon} onChange={e => setchairCanon(e.target.value)}/>  */}
</div>
<div className='form-row'>
    <button className='btn-danger'
    onClick={()=> setlaBeteNoire(getBeteNoire(beteNoire, joueurs, scores, editions)
                  )
    }
  >Bête noire</button>
    {/* <button className='btn-primary'
    onCLick={getChairCanon(chairCanon)}>Chair à canon</button> */}
</div>
<div style={{display:(beteNoire === '' || laBeteNoire === '') ? 'none' : 'block'}}>{laBeteNoire}</div>
{/* <getBeteNoire beteNoire={beteNoire} joueurs={joueurs} scores={scores} /> */}
<div style={{display:(beteNoire != '') ? 'none' : 'block'}}>
<table id="dtBasicExample" className="table table-striped table-bordered table-sm tableFM" cellspacing="100" width="140%">
<thead>
  <tr>
    <th className="th-sm sortresultats">Résultats<img src={require('../medias/iconMain/sort.png')} value='IDVAINQ'style={{float:'right',
    height:'21px',
    width:'21px',
    marginRight:'6%'}}
   />
    </th>
    <th className="th-sm sortannée">Année<img src={require('../medias/iconMain/sort.png')} style={{float:'right',
    height:'21px',
    width:'21px',
    marginRight:'6%'}}/>
    </th>
    <th className="th-sm sorttour">Tour<img src={require('../medias/iconMain/sort.png')} style={{float:'right',
    height:'21px',
    width:'21px',
    marginRight:'6%'}}/>
    </th>
    <th className="th-sm sortadversaire">Adversaire<img src={require('../medias/iconMain/sort.png')} style={{float:'right',
    height:'21px',
    width:'21px',
    marginRight:'6%'}}/>
    </th>
    <th className="th-sm sortscore">Score<img src={require('../medias/iconMain/sort.png')} style={{float:'right',
    height:'21px',
    width:'21px',
    marginRight:'6%'}}/>
    </th>
  </tr>
</thead>
</table><GetAllInfos
joueur={joueur} annee={annee} tour={valTour} joueurs={joueurs} editions={editions} scores={scores}/></div>
</div></center>
)}

export default Modal