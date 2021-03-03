function connexionDB(){

    const express = require("express");
    const cors = require('cors');
    const mysql = require('mysql');

    const app = express();

    app.use(cors());

    //

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

    return connection;
}