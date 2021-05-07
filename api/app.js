const express = require('express');
const db = require('./db');

const app = express();
// const router = require('./router');

const port = 3002;

app.use(express.json());

// app.use(router);

db.authenticate().then(()=>{
    console.log('DB is connected')
    app.listen(port, () => {
        console.log(`I am ready in http://localhost:${port}`);
    })

}).catch(console.log);