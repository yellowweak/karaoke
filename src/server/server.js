import express from 'express';
import path from 'path';

const app = express();
// TODO: make nodemon be able to detect environment
const port = (process.env.NODE_ENV==='production')? 5000:3000;

app.use(express.static(path.resolve(process.cwd(), './bundle')));

app.get('/api', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send({api: 'test'});
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(process.cwd(), './bundle/index.html'));
})

app.listen(port, ()=> {
    console.log('server running at: '+process.env.NODE_ENV+' mode');
    // console.log(process.cwd());
})