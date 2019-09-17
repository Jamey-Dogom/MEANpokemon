const express = require('express')
const app = express()

app.use(express.json());

app.use(express.static(__dirname + '/public/dist/public'));

app.listen(3333, () => console.log("we lit on 3333"))