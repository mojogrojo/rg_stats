//Import lbirairies
const express = require("express");
const cors = require('cors');
const mysql = require('mysql');
const app = express();
app.use(cors());

//Connection DB
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mlp'
});
connection.connect(err=>{
    if(err){
        return err;
    }
});
app.listen(4000, () => {
    console.log('Listening on port 4000')
})

//Déclarations variabels
const SELECT_ALL_NAME = 'select * FROM joueur';
const SELECT_EDITION = "SELECT * FROM EDITION";
const SELECT_ALL_SCORES = "SELECT * FROM SCORE";
const SELECT_ALL_PARTICIPE = 'SELECT * from PARTICIPE';
const SELECT_ALL_NOM = 'SELECT NOM FROM joueur';
const SELECT_ALL_PRENOM = 'SELECT PRENOM from joueur'





//Déclarations des routes
app.get('/participe', (req, res) => {
    connection.query(SELECT_ALL_PARTICIPE, (err ,results)=>{
        if(err){
            return res.send
        }
        else{
            return res.json({
                data:results
            })
        }
    });  
});

app.get('/joueurs', (req, res) => {
    connection.query(SELECT_ALL_NAME, (err ,results)=>{
        if(err){
            return res.send
        }
        else{
            return res.json({
                data:results
            })
        }
    });  
});

app.get('/edition', (req, res) => {
    connection.query(SELECT_EDITION, (err ,results)=>{
        if(err){
            return res.send
        }
        else{
            return res.json({
                data:results
            })
        }
    });  
});

app.get('/nomJoueur', (req, res) => {
    connection.query(SELECT_ALL_NOM, (err ,results)=>{
        if(err){
            return res.send
        }
        else{
            return res.json({
                data:results
            })
        }
    });  
});

app.get('/prenomJoueur', (req, res) => {
    connection.query(SELECT_ALL_PRENOM, (err ,results)=>{
        if(err){
            return res.send
        }
        else{
            return res.json({
                data:results
            })
        }
    });  
});


app.get('/scores', (req, res) => {
    connection.query(SELECT_ALL_SCORES, (err, results) =>{
        if(err){
            return res.send
        }
        else{
            return res.json({
                data:results
            })
        }
    });
});


