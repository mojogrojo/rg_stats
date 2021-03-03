import React, { Component, useState, useEffect, Fragment } from 'react';
import './App.css';
import Participation from './component/Participation.js';
import Confrontations from './component/Confrontation.js';
import Modal from './Modal/Modal.js';
import ModalJoueurs from './Modal/ModalJoueurs.js'
import Tours from './component/Tours'
import getTableau from './component/getter/getTableau';
import $ from 'jquery';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/selectable.css';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/selectable';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';

class App extends Component{

constructor() {
  super(); 
  this.state={ 
    editions:[],
    joueurs:[], 
    scores:[],
    participe:[],
    nomJoueur:[],
    prenomJoueur:[],
    Tableau:'',
    Participation:'',
    RechercheJoueurs:'',
    ConfrontationsJ1:'', 
    ConfrontationsJ2:'',
    visible:false,
    onReclick : '',
    EditionsOK: true,
    visibleJoueurs:false,
    handleIdJoueur:'',
    handleClickHam : false,
    clicRetour : false, 
    nomJoueur : {nom: '',
                joueur:''},
  }
}

  componentDidMount(){
    fetch('http://localhost:4000/edition')
    .then(response => response.json())
    .then(response => this.setState({ editions: response.data}))
    .catch(err => console.error(err))

    fetch('http://localhost:4000/joueurs')
    .then(response => response.json())
    .then(response => this.setState({ joueurs: response.data}))
    .catch(err => console.error(err))

    fetch('http://localhost:4000/scores')
    .then(response => response.json())
    .then(response => this.setState({ scores: response.data}))
    .catch(err => console.error(err))

    fetch('http://localhost:4000/participe')
    .then(response => response.json())
    .then(response => this.setState({ participe: response.data}))
    .catch(err => console.error(err))

    fetch('http://localhost:4000/nomJoueur')
    .then(response => response.json())
    .then(response => this.setState({ nomJoueur: response.data}))
    .catch(err => console.error(err))
    
    fetch('http://localhost:4000/prenomJoueur')
    .then(response => response.json())
    .then(response => this.setState({ prenomJoueur: response.data}))
    .catch(err => console.error(err))

    this.DisplayAll(null);
  }

clicRetour(){
    this.setState({clicRetour : true})
  }

  async handler(value){
    await this.setState({Tableau : value})
    this.DisplayAll('Editions')
  }
  handleVisibleJoueurs() {
    this.setState({visibleJoueurs : !this.state.visibleJoueurs})
  }
  handleIdJoueur(value) {
    var nom = value.split(' ')
    this.setState({handleIdJoueur : value})
  }

  show = () => {
    this.setState({visible:true})
  }
 
  hide = () => {
    this.setState({visible:false})
  }

  hideJoueurs = () => {
    this.setState({visibleJoueurs : false})
  }
 

  handleChangeTableau = event => {
    const value1=event.target.value;
    this.setState({Tableau:value1});
    this.DisplayAll('');
  };

  handleChangeNom = event => {
    const value2=event.target.value;
    this.setState({Participation:value2});
    this.DisplayAll('');
  };

  handleChangeRechercheJoueurs= event => {
    const value3=event.target.value;
    this.setState({RechercheJoueurs:value3});
    this.DisplayAll('');
  };

  handleChangeConfrontationsJ1= event => {
    const value4=event.target.value;
    this.setState({ConfrontationsJ1:document.getElementsByClassName('rechercheconfrontation1').innerHTML});
    this.DisplayAll('');
  };

  handleChangeConfrontationsJ2= event => {
    const value5=event.target.value;
    this.setState({ConfrontationsJ2:document.getElementsByClassName('rechercheconfrontation2').innerHTML});
    this.DisplayAll('');
  };

  fonctionJS2 = () => {  
    let resultats = [];
    this.state.joueurs.forEach(joueur => {
    resultats.push(joueur.NOM + " " + joueur.PRENOM);})
    $('#rechercheAutoComplete2').autocomplete(    
      {autoFocus: true,
      source : resultats,
      delay: 0,
      minLength: 0}
    )}
    fonctionJS3 = () => {  
      let resultats = [];
      this.state.joueurs.forEach(joueur => {
      resultats.push(joueur.NOM + " " + joueur.PRENOM);})
      $('#rechercheAutoComplete3').autocomplete(    
        {autoFocus: true,
        source : resultats,
        delay: 0,
        minLength: 0}
      )}

  fonctionJS = () => {  
      let resultats = [];
      this.state.joueurs.forEach(joueur => {
      resultats.push(joueur.NOM + " " + joueur.PRENOM);})
      $('#rechercheAutoComplete').autocomplete(    
        {autoFocus: true,
        source : resultats,
        delay: 0,
        minLength: 0}
      )
  }

   async DisplayAll(value, test){
    if(value==='Editions' && this.state.Tableau < 1968 || this.state.Tableau > 2019){    
      document.getElementsByClassName('Confrontations')[0].style.display='none';
      document.getElementsByClassName('Editions')[0].style.display='none';
      document.getElementsByClassName('Participation')[0].style.display='none';
      document.getElementsByClassName('PhaseFinale')[0].style.display='none';
      document.getElementsByClassName('errorEditions')[0].style.display='none';
      var div = document.getElementsByClassName('errorEditions')

      for (var i = 0; i<div.length; i++){
        div[i].style.display='block';
      }
    }
    else{
      document.getElementsByClassName('Confrontations')[0].style.display='none';
      document.getElementsByClassName('Editions')[0].style.display='none';
      document.getElementsByClassName('Participation')[0].style.display='none';
      document.getElementsByClassName('PhaseFinale')[0].style.display='none';
      document.getElementsByClassName('errorEditions')[0].style.display='none';
      var div = document.getElementsByClassName(value)

      for (var i = 0; i<div.length; i++){
        div[i].style.display='block';
      }
    }
    
}

DeleteHistory = () => {
  document.getElementsByClassName('rechercheEditions')[0].value='';
  document.getElementsByClassName('rechercheParticipation')[0].value='';
  document.getElementsByClassName('rechercheconfrontation1')[0].value='';
  document.getElementsByClassName('rechercheconfrontation2')[0].value='';
  this.setState({Tableau:''});
  this.setState({Participation:''});
  this.setState({RechercheJoueurs:''});
  this.setState({ConfrontationsJ1:'', });
  this.setState({ConfrontationsJ2:''});
  this.DisplayAll(null);
}


// TournerlesBurgers() {
//   if (!this.state.handleClickHam){
//   document.getElementsByClassName('burger1')[0].style.transformOrigin = "center, center";
//   document.getElementsByClassName('burger1')[0].style.transform = 'rotate(45deg) translate(2px, -9px)';
//   document.getElementsByClassName('burger2')[0].style.disabled = "true";
//   document.getElementsByClassName('burger2')[0].style.opacity = "0";
//   document.getElementsByClassName('burger3')[0].style.transformOrigin = "center, center";
//   document.getElementsByClassName('burger3')[0].style.transform = 'rotate(-45deg) translate(2px, -1px)';}
//   else{
//     document.getElementsByClassName('burger1')[0].style.transformOrigin = "center, center";
//     document.getElementsByClassName('burger1')[0].style.transform = 'rotate(0deg) translate(0px, 0px)';
//     document.getElementsByClassName('burger2')[0].style.disabled = "false";
//     document.getElementsByClassName('burger2')[0].style.opacity = "1";
//     document.getElementsByClassName('burger3')[0].style.transformOrigin = "center, center";
//     document.getElementsByClassName('burger3')[0].style.transform = 'rotate(0deg) translate(0px,0px)';
//   }
// }

retour = () => {
    document.getElementById('fPage').click(() => this.setState({visible:false}));
  }

  render(){
    var handler = this.handler;
    var handleVisibleJoueurs = this.handleVisibleJoueurs
    var handleIdJoueur = this.handleIdJoueur
    var clicRetour = this.clicRetour
    return (
  
  <html> 
    <head>
    <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Roboto:ital@1&display=swap" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet"></link>
    <link href="http://code.jquery.com/ui/1.10.2/themes/smoothness/jquery-ui.css" rel="Stylesheet"></link>
    <link href="https://code.jquery.com/ui/1.10.2/themes/smoothness/jquery-ui.min.css" rel="stylesheet"></link>
    <script src="https://code.jquery.com/ui/1.10.2/jquery-ui.min.js"></script>
    <script async src="//code.jquery.com/ui/1.10.1/jquery-ui.min.js"></script>
    <script src='https://cdn.rawgit.com/pguso/jquery-plugin-circliful/master/js/jquery.circliful.min.js'></script>
    <script src="http://code.jquery.com/ui/1.10.2/jquery-ui.js" ></script>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <link href = "https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css"
      rel = "stylesheet"/>
    <script src = "https://code.jquery.com/jquery-1.10.2.js"></script>
    <script src = "https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
    <script src='./component/db/fonctionJS.js'></script>
    <script src="jquery-3.5.1.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>npm
    </head>


          <ModalJoueurs 
            visibleJoueurs={this.state.visibleJoueurs}
            participations = {this.state.participe}
            hideJoueurs={this.hideJoueurs}
            handleIdJoueur = {this.state.handleIdJoueur}
            editions={this.state.editions}
            scores={this.state.scores}
            joueurs={this.state.joueurs}
            ></ModalJoueurs>
  
    <header>
    <nav role="navigation">
  <div id="menuToggle">
  </div>
</nav>
      <div className='App-header row' onClick={() => {this.hide();this.hideJoueurs()}}><div class='titre1 row'>ROLLAND GARROS <br/> STATISTIQUES </div><div class='titre2' style={{marginTop:'2%'}}>
        Tous les matchs et les tableaux masculins <br/>du French Open depuis 1962</div>
      <img className='logoRG' src={require('./medias/logoRG.png')}
      style={{ 
        cursor:'pointer',
      }} onClick={() => {this.DeleteHistory();{if (this.state.handleClickHam) {this.setState({handleClickHam : false}); this.TournerlesBurgers()}}}}/>
      <img src={require('./medias/rg.gif')} className='gif'/></div>
    </header>
    <body style={{opacity: this.state.visible || this.state.visibleJoueurs ? '50%' : '100%',}}onClick={() => { if (this.state.visible){this.hide();}else if(this.state.visibleJoueurs){this.hideJoueurs();}
  {if (this.state.handleClickHam) {this.setState({handleClickHam : false}); this.TournerlesBurgers()}}}}>  
      <div className='fPage container col-8'>
        <center>        
           <div className='Main' style={{pointerEvents:this.state.visible || this.state.visibleJoueurs ? 'none':''}}>
            <div className='form-row'>
              <input type='text' id='Editions' className='form-control col-8 rechercheEditions' placeholder="Tableau d'une année spécifique..." name="year" value={this.state.Tableau} onChange={this.handleChangeTableau}/>
                <button type='submit' className='btn-success OK col-2 OKTableau' value={this.state.Tableau} onClick={() => 
                  {this.DisplayAll("Editions", document.getElementsByClassName('OKTableau')[0].value);}}>OK
                </button>
                <div className='deleteHistory' data-toggle="tooltip" title="Supprimer les recherches..."
                onClick={() => this.DeleteHistory()}>
              </div>
              <div className='resetSite' data-toggle="tooltip" title="Réinitialiser les résultats..."
                onClick={() => this.DisplayAll()}>                 
              </div>
            </div>
            <div className='form-row'>
              <input type='text'className='form-control col-8 rechercheParticipation' placeholder="Participation d'un joueur..." name='rechercheAutoComplete' id='rechercheAutoComplete' value={this.state.Participation}
              onChange={(event) => {this.handleChangeNom(event);
              this.fonctionJS()}}/>
                <button type='submit'className='btn-success OK col-2' value="OK" onClick={() => {this.DisplayAll("Participation", this.state.Participation);
              this.setState({Participation : document.getElementsByClassName('rechercheParticipation')[0].value})
              }}>OK
                </button>  
            </div>

            <div className='form-row'>       
              <input type='text' id='rechercheAutoComplete2' name='rechercheAutoComplete2' className='form-control col-4 confront rechercheconfrontation1' placeholder="Nom du joueur 1..." value={this.state.ConfrontationsJ1} 
              onChange={(event) => {this.handleChangeConfrontationsJ1(event);
              this.fonctionJS2();
              }}/> 
              <input type='text' id='rechercheAutoComplete3' name='rechercheAutoComplete3' className='form-control col-4 confront rechercheconfrontation2' placeholder="Nom du joueur 2..." value={this.state.ConfrontationsJ2} 
              onChange={(event) => {this.handleChangeConfrontationsJ2(event);
              this.fonctionJS3();
              }}/>
                <button type='submit' className='btn-success OKC col-3'value="OK" onClick={() => { this.setState({ConfrontationsJ1:document.getElementsByClassName('rechercheconfrontation1')[0].value});
                this.setState({ConfrontationsJ2:document.getElementsByClassName('rechercheconfrontation2')[0].value});this.DisplayAll("Confrontations")}}>Confrontation !
                </button> 
            </div>

            <div className='form-row RC'>
              <button type='submit' className='btn-primary BRC col-6' onClick={this.show}>Effectuer une recherche avancée
              </button>
            </div>

          </div>


          <div className='alert alert-danger errorEditions' style={{ display:'none'}}>Veuillez rentrez une année correcte
          </div>

          <div className='Editions Resultats'>
            <div className='side' style={{display: this.state.Tableau >= 1968 && this.state.Tableau <= 2019 ? 'block' : 'none'}}>
              <h4>{this.state.Tableau} <br></br>Finale</h4>
            </div>
            <div className='next' style={{ display: this.state.Tableau >= 1968 && this.state.Tableau <= 2019 ? 'block' : 'none'}}onClick={() => this.DisplayAll('PhaseFinale')}>            
            </div>
            <div className='retourTableau' style={{display:this.state.clicRetour ? 'block' : 'none'}}onClick={() => {this.DisplayAll('Participation'); this.setState({clicRetour : false})}}>Retour aux éditions</div>

               <div className='container fondTableau'>

          <div className='row'>
              <Tours handleVisibleJoueurs={handleVisibleJoueurs.bind(this)} handleIdJoueur={handleIdJoueur.bind(this)} nmtr='nmtr1' tour="1" nomTour='1er Tour' Year={getTableau(this.state.editions, this.state.Tableau)}  scores={this.state.scores} joueurs={this.state.joueurs} col='td1 tr1'/>
              <Tours handleVisibleJoueurs={handleVisibleJoueurs.bind(this)} handleIdJoueur={handleIdJoueur.bind(this)} nmtr='nmtr2' tour="2" nomTour='2eme Tour' Year={getTableau(this.state.editions, this.state.Tableau)}  scores={this.state.scores} joueurs={this.state.joueurs} col='td2 tr2'/>  
              <Tours handleVisibleJoueurs={handleVisibleJoueurs.bind(this)} handleIdJoueur={handleIdJoueur.bind(this)} nmtr='nmtr3' tour="3" nomTour='3eme Tour' Year={getTableau(this.state.editions, this.state.Tableau)}  scores={this.state.scores} joueurs={this.state.joueurs} col='td3 tr3'/> 
              <Tours handleVisibleJoueurs={handleVisibleJoueurs.bind(this)} handleIdJoueur={handleIdJoueur.bind(this)} nmtr='nmtr4' tour="4" nomTour='4eme Tour' Year={getTableau(this.state.editions, this.state.Tableau)}  scores={this.state.scores} joueurs={this.state.joueurs} col='td4 tr4'/> 
          </div>
          </div></div>
          <div className='PhaseFinale Resultats'>
            <div className='offside' style={{display: this.state.Tableau >= 1968 && this.state.Tableau <= 2019 ? 'block' : 'none'}}>
              <h4>{this.state.Tableau} <br></br> Premiers tours</h4>
            </div>
            <div className='previous' style={{display: this.state.Tableau >= 1968 && this.state.Tableau <= 2019 ? 'block' : 'none'}} onClick={() => this.DisplayAll('Editions')}>              
            </div>
            <div className='container fondTableau'>
              <div className='row'>
              <Tours handleVisibleJoueurs={handleVisibleJoueurs.bind(this)} handleIdJoueur={handleIdJoueur.bind(this)} nmtr='nmtr1' tour="5" nomTour="Quart de finale" Year={getTableau(this.state.editions, this.state.Tableau)} scores={this.state.scores} joueurs={this.state.joueurs} col='td1 tr1'/>
              <Tours handleVisibleJoueurs={handleVisibleJoueurs.bind(this)} handleIdJoueur={handleIdJoueur.bind(this)}s nmtr='nmtr2' tour="6" nomTour="Demi-finale" Year={getTableau(this.state.editions, this.state.Tableau)}  scores={this.state.scores} joueurs={this.state.joueurs} col='td2 tr2'/>
              <Tours handleVisibleJoueurs={handleVisibleJoueurs.bind(this)} handleIdJoueur={handleIdJoueur.bind(this)} nmtr='nmtr3' tour="7" nomTour="Finale" Year={getTableau(this.state.editions, this.state.Tableau)}  scores={this.state.scores} joueurs={this.state.joueurs} col='td3 tr3'/>  
              </div>
            </div>
            </div>
          <div className='Participation Resultats'>
            <div className='profilJoueur'onClick={() => {this.setState({handleIdJoueur : this.state.Participation}); this.setState({visibleJoueurs : true})}}>Profil de {this.state.Participation}
            </div>
            <Participation clicRetour={clicRetour.bind(this)}
            scores={this.state.scores} editions={this.state.editions} joueurs={this.state.joueurs} participe={this.state.participe} nom={this.state.Participation} handler={handler.bind(this)}/>
          </div> 
          <div className='Confrontations Resultats'>
            <Confrontations scores={this.state.scores} editions={this.state.editions} joueurs={this.state.joueurs} IDJ1={this.state.ConfrontationsJ1}  IDJ2={this.state.ConfrontationsJ2}/>
          </div>
        </center>
      </div>
    </body>
    <Modal
            editions={this.state.editions}
            hide={this.hide}
            scores={this.state.scores}
            joueurs={this.state.joueurs}
            joueur={this.state.idJoueur}
            visible={this.state.visible}
            ></Modal>
    <footer className='myfooter' onClick={() => {if (this.state.handleClickHam) {this.setState({handleClickHam : false}); this.TournerlesBurgers()}}}></footer>
    <div className='prefooter' onClick={() => {if (this.state.handleClickHam) {this.setState({handleClickHam : false}); this.TournerlesBurgers()}}}>
      <div class="container">
        <div class="row">
         <div class="col-sm" style={{
           marginTop:'2.5%',
           boxSizing: 'border-box',
           width: '100%',
           height:'500px',
           borderLeft:'0.05em ridge white',
           height:'100%'
         }}>
         Tous les resultats du French Open <p style={{color:'white', fontWeight:'light', zIndex:'1000000'}}>RG-STATS © 2020 || MojoGrojo</p>
         Tous les resultats du French Open <p style={{color:'white', fontWeight:'light', zIndex:'1000000'}}>RG-STATS © 2020 || MojoGrojo</p>
         Tous les resultats du French Open<p style={{color:'white', fontWeight:'light', zIndex:'1000000'}}>RG-STATS © 2020 || MojoGrojo</p>
         Tous les resultats du French Open <p style={{color:'white', fontWeight:'light', zIndex:'1000000'}}>RG-STATS © 2020 || MojoGrojo</p>
         Tous les resultats du French Open<p style={{color:'white', fontWeight:'light', zIndex:'1000000'}}>RG-STATS © 2020 || MojoGrojo</p>
          </div>
          <div class="col-sm" style={{
           marginTop:'2.5%',
           boxSizing: 'border-box',
           width: '100%',
           height:'500px',
           borderLeft:'0.05em ridge white',
           height:'100%'
         }}>
          Tous les resultats du French Open <p style={{color:'white', fontWeight:'light', zIndex:'1000000'}}>RG-STATS © 2020 || MojoGrojo</p>
          Tous les resultats du French Open <p style={{color:'white', fontWeight:'light', zIndex:'1000000'}}>RG-STATS © 2020 || MojoGrojo</p>
          Tous les resultats du French Open <p style={{color:'white', fontWeight:'light', zIndex:'1000000'}}>RG-STATS © 2020 || MojoGrojo</p>
          Tous les resultats du French Open <p style={{color:'white', fontWeight:'light', zIndex:'1000000'}}>RG-STATS © 2020 || MojoGrojo</p>
          Tous les resultats du French Open<p style={{color:'white', fontWeight:'light', zIndex:'1000000'}}>RG-STATS © 2020 || MojoGrojo</p>
          </div>
          <div class="col-sm" style={{
           marginTop:'2.5%',
           boxSizing: 'border-box',
           width: '100%',
           height:'500px',
           borderLeft:'0.05em ridge white',
           height:'100%'
         }}>
          Tous les resultats du French Open <p style={{color:'white', fontWeight:'light', zIndex:'1000000'}}>RG-STATS © 2020 || MojoGrojo</p>
          Tous les resultats du French Open <p style={{color:'white', fontWeight:'light', zIndex:'1000000'}}>RG-STATS © 2020 || MojoGrojo</p>
          Tous les resultats du French Open <p style={{color:'white', fontWeight:'light', zIndex:'1000000'}}>RG-STATS © 2020 || MojoGrojo</p>
          Tous les resultats du French Open<p style={{color:'white', fontWeight:'light', zIndex:'1000000'}}>RG-STATS © 2020 || MojoGrojo</p>
          Tous les resultats du French Open <p style={{color:'white', fontWeight:'light', zIndex:'1000000'}}>RG-STATS © 2020 || MojoGrojo</p>
          </div>
      </div>
    </div>
     </div>
  </html>

      );
  }
}

export default App;
