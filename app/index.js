const express = require('express');
// const path = require('path');
const AiScoreRecord = require('../models').AiScoreRecord;
const Op = require('../models').Sequelize.Op;

const app = express();
// TODO: make nodemon be able to detect environment
const port = (process.env.NODE_ENV==='production')? 5000:3000;

// app.use(express.static(path.resolve(process.cwd(), './.bundle')));

// TODO: check prod behavior
app.get('/api', (req, res)=>{
    res.set('Access-Control-Allow-Origin', '*');
    res.set("Content-Type", "text/json");
    AiScoreRecord.findAll({
        where: {
            id: {
                [Op.lte]: 50
            }
        }
    }).then(record=>{
        res.send(record);
    });
});

app.listen(port, ()=> {
    console.log('server running at: '+process.env.NODE_ENV+' mode');
    // console.log(process.cwd());
});