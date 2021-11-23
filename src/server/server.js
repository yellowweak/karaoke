import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.resolve(process.cwd(), './bundle')));

app.get('/api', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send({api: 'test'});
})

app.get('*', function (req, res) {
    res.sendFile(path.resolve(process.cwd(), './bundle/index.html'))
})

app.listen(3000, ()=> {
    console.log('server running');
})