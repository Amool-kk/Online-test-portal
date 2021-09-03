const express = require('express');
const router = express.Router();
const fs = require('fs');
const dir = './data'
const dir2 = './data';

let paperlocation = "";

// const data = require('../data/Neet Q1/NeetQ1.json')
// console.log(data)

router.get('/api', (req, res) => {
    fs.readdir(dir, (err, file) => {
        console.log(file)
        res.json({ msg: file })
    })
})

router.post('/getPaper', (req, res) => {
    paperlocation = dir + '/' + req.body.paperName
    console.log(req.body, paperlocation)
})

router.get('/get', (req, res) => {
    let pathB1
    let pathB2
    let pathP
    let pathC
    fs.readdir(paperlocation, (err, file) => {
        pathB1 = `.${paperlocation}/${file[0]}`
        pathB2 = `.${paperlocation}/${file[1]}`
        pathC = `.${paperlocation}/${file[2]}`
        pathP = `.${paperlocation}/${file[3]}`
        console.log(pathB1, "test", file)
        let dataB1 = require(pathB1)
        let dataB2 = require(pathB2)
        let dataP = require(pathP)
        let dataC = require(pathC)
        res.json({ msgC: dataC,msgP: dataP,msgB1:dataB1,msgB2:dataB2})
    })
})

module.exports = router