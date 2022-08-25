const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const port = process.env.PORT || 8080;
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.get('/phaser.min.js', function(req, res) {
  res.sendFile(path.join(__dirname, '/phaser.min.js'));
});

app.get('/game.js', function(req, res) {
  res.sendFile(path.join(__dirname, '/game.js'));
});


app.listen(port);
console.log('http://localhost:' + port);


app.get('/admin', function(req, res) {
  res.sendFile(path.join(__dirname, '/bruh.html'));
});

let books = [];

app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api', (req, res) => {
  const book = req.body;

  
  const anan = book["cark1"]
  console.log(anan);
  let  jsons =[
    {
      degrees: 60,
      startColor: 0xff0000,
      endColor: 0xff8800,
      rings: 3,
      text: `${book["cark1"]}`,
      sliceText: `${book["cark1"]}`,
      sliceTextStyle: {
          fontFamily: "Arial Black",
          fontSize: 12,
          color: "#000077",
          align: "center"
      },
      sliceTextStroke: 8,
      sliceTextStrokeColor: "#ffffff",
      
      
      
      enabled: true
    },
    {
        degrees: 60,
        startColor: 0xff0000,
        endColor: 0xff8800,
        rings: 3,
        text: `${book["cark2"]}`,
        sliceText: `${book["cark2"]}`,
        sliceTextStyle: {
            fontFamily: "Arial Black",
            fontSize: 12,
            color: "#000077",
            align: "center"
        },
        sliceTextStroke: 8,
        sliceTextStrokeColor: "#ffffff",
        
        
        
        enabled: true
    },
    {
        degrees: 60,
        startColor: 0x00ff00,
        endColor: 0x004400,
        rings: 200,
        
        text: `${book["cark3"]}`,
        sliceText: `${book["cark3"]}`,
        sliceTextStyle: {
            fontFamily: "Arial Black",
            fontSize: 12,
            color: "#000077",
            align: "center"
        },
        sliceTextStroke: 8,
        sliceTextStrokeColor: "#ffffff",
        
        enabled: true
    },
    {
        degrees: 60,
        startColor: 0xff00ff,
        endColor: 0x0000ff,
        rings: 10,
        text: `${book["cark4"]}`,
        sliceText: `${book["cark4"]}`,
        sliceTextStyle: {
            fontFamily: "Arial Black",
            fontSize: 12,
            color: "#000077",
            align: "center"
        },
        sliceTextStroke: 8,
        sliceTextStrokeColor: "#ffffff",
        enabled: false
    },
    {
        degrees: 60,
        startColor: 0x666666,
        endColor: 0x999999,
        rings: 200,
       
        text: `${book["cark5"]}`,
        sliceText: `${book["cark5"]}`,
        sliceTextStyle: {
            fontFamily: "Arial Black",
            fontSize: 12,
            color: "#000077",
            align: "center"
        },
        sliceTextStroke: 8,
        sliceTextStrokeColor: "#ffffff",
        
        enabled: true
    },
    {
        degrees: 60,
        startColor: 0x000000,
        endColor: 0xffff00,
        rings: 1,
        text: `${book["cark6"]}`,
        sliceText: `${book["cark6"]}`,
        sliceTextStyle: {
            fontFamily: "Arial Black",
            fontSize: 12,
            color: "#000077",
            align: "center"
        },
        sliceTextStroke: 8,
        sliceTextStrokeColor: "#ffffff",
        enabled: false
    }
]
let data = JSON.stringify(jsons);
fs.writeFile("buba.txt", data,
  {
    encoding: "utf8",
    flag: "w",
    mode: 0o666
  },
  (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      console.log(fs.readFileSync("buba.txt", "utf8"));
    }






});
var a1 = 360-30;
var a2 = 300-30;
var a3 = 240-30;
var a4 = 180-30;
var a5 = 120-30;
var a6 = 60-30;
var adana = null;

if(book["cark1"] ==book["gelcek"]){
  
  adana = a1
}

if(book["cark2"] ==book["gelcek"]){
  adana = a2
  
}

if(book["cark3"] ==book["gelcek"]){
  adana = a3
  
}

if(book["cark4"] ==book["gelcek"]){
  adana = a4
  
}
if(book["cark5"] ==book["gelcek"]){
  adana = a5
  
}
if(book["cark6"] ==book["gelcek"]){
  adana = a6
  
}
  
app.get('/sonuc', function (req, res) {  
  res.sendFile(path.join(__dirname, '/buba.txt'));
});  
app.get('/pin.png', function (req, res) {  
  res.sendFile(path.join(__dirname, '/pin.png'));
}); 
app.get('/giphy.gif', function (req, res) {  
  res.sendFile(path.join(__dirname, '/giphy.gif'));
}); 
app.get('/banko.png', function (req, res) {  
  res.sendFile(path.join(__dirname, '/banko.png'));
}); 
app.get('/sonuc2', function (req, res) {  
  res.send(`${adana}`);
});

app.get('/basarli', function (req, res) {  
  res.send(`Basarili bir şekilde ayarlar yapıldı`);
}); 
});



