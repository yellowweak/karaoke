import express from 'express';
import path from 'path';
import AI from '../raw_data/fistia-ai.json';
// import DbCfg from '../config/database';
// const sequelize = new Sequelize(DbCfg.database, DbCfg.username, DbCfg.password, {
//     host: 'localhost',
//     dialect: 'mariadb'
// });

const app = express();
// TODO: make nodemon be able to detect environment
const port = (process.env.NODE_ENV==='production')? 5000:3000;

app.use(express.static(path.resolve(process.cwd(), './.bundle')));

app.get('/aaa', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set("Content-Type", "text/html");
    console.log('/app triggerred');
    console.log(path.resolve(process.cwd(), './.bundle/index.html'));
    res.sendFile(path.resolve(process.cwd(), './.bundle/index.html'));
    // res.send(res);
    // res.send("<html> <head>server Response</head><body><h1> This page was render direcly from the server <p>Hello there welcome to my website</p></h1></body></html>");
});
// app.get('/*', (req, res) => {
//     res.set('Access-Control-Allow-Origin', '*');
//     const { results } = AI;
//     const ten = results[0];
//     res.send({ten});
//     // res.send(AI);
// });


app.listen(port, ()=> {
    console.log('server running at: '+process.env.NODE_ENV+' mode');
    // console.log(process.cwd());
});