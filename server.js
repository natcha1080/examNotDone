const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID
const url = "mongodb://login:login1234@ds117866.mlab.com:17866/login"
const dbName = 'login';
const app = express()
const port = 3001
var assert = require('assert')
var db;

app.use(bodyParser.json())
app.use(cors({ origin: true }))


app.get('/login', (req, res) => {
    mongoClient.connect(url, (err, client) => {
        db = client.db(dbName)
        db.collection('checkuser').find({}).toArray(function (err, result) {
            if (err) throw err;
            res.json({ data: result })
            client.close();
        });
    })
})

app.get('/getData', (req, res) => {
    mongoClient.connect(url, (err, client) => {
        db = client.db(dbName)
        db.collection('building').find({}).toArray(function (err, result) {
            if (err) throw err;
            res.json({ data: result })
            client.close();
        });
    })
})







app.listen(port, () => {
    console.log(`App listening on ${port}`)
})