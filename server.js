const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/', function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post('/', function(req,res){
    console.log(req.body);
    let height=Number(req.body.height);
    let weight=Number(req.body.weight);
    let result = (weight/(height*height)).toFixed(2);
    let bmi = `Your BMI is: ${result}<br>`;
    if(result<=19){
        res.send(`${bmi} Underweight.`);
    }
    else if(result<=24.9){
        res.send(`${bmi} Normal weight.`);
    }
    else if(result<=29.9){
        res.send(`${bmi} Overweight.`);
    }
    else{
        res.send(`${bmi} Obese.`);
    }
});
app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});