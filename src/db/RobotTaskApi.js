const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require("cors");
const app = express ();

app.use(bodyParser.json());

app.use(cors());

const connection = mysql.createConnection({
    host     : 'road2hire.ninja',
    user     : 'r2hstudent',
    password : 'SbFaGzNgGIE8kfP',
    database : 'tgonzalez'
  });

  connection.connect(err => {
    if(err) throw err;
    console.log("Connected!")
})

//GET
app.get('/tasks',(req,res)=>{
  const queryString = "SELECT * FROM  robotTask"
  connection.query(queryString, (err,rows,fields) => {
    if(err){
        console.log(`Failed to query for Tasks: ${err}`)
        res.sendStatus(500)
        return 
    }
    console.log("We fetched successfully!")
    res.send(rows)
  })
})

// //ADD
app.post("/tasks", (req, res) => {
  const {
    description,
    eta,
  } = req.body;

  const queryString = `INSERT INTO  robotTask (description, eta)
        VALUES ("${description}","${eta}")`;

  connection.query(queryString, (err, rows) => {
      if(err){
          console.log(`Failed to add robots: ${err}`)
          res.sendStatus(500)
          return 
      }
      console.log("We added successfully!")
      res.send(rows)
    })
})

app.listen(3011,()=>{
  console.log('Started on port 3011');
});