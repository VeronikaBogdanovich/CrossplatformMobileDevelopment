let express = require("express");
let bodyparser = require("body-parser");

let app = express();

// чтение json-ов
let dirPath = "./../assets/";
// КОНСТАНТЫ
let books = require(dirPath + "books" + ".json");
let shops = require(dirPath + "shops" + ".json");
let shoes = require(dirPath + "shoes" + ".json");
let souv = require(dirPath + "souv" + ".json");
let jev = require(dirPath + "jev" + ".json");
let cloths = require(dirPath + "cloths" + ".json");
let kids = require(dirPath + "kids" + ".json");
let tech = require(dirPath + "tech" + ".json");
let hud = require(dirPath + "hud" + ".json");
let cosm = require(dirPath + "cosm" + ".json");
// здесь прописываешь сами файлы
// let aabJson = require('./assets/aab.json');
// тут в зависимости от имени запроса выдается тот или иной json
app.all('/getShops', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});
app.all('/getShoes', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});
app.all('/getKids', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});
app.all('/getSouv', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});
app.all('/getJev', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});
app.all('/getHud', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});
app.all('/getBooks', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});
app.all('/getCloths', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});
app.all('/getCosm', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});
app.all('/getTech', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});

app.get("/getBooks", (req, res) => {
    res.send(books);
});
app.get("/getShops", (req, res) => {
    res.send(shops);
});
app.get("/getShoes", (req, res) => {
    res.send(shoes);
});
app.get("/getCloths", (req, res) => {
    res.send(cloths);
});
app.get("/getCosm", (req, res) => {
    res.send(cosm);
});
app.get("/getHud", (req, res) => {
    res.send(hud);
});
app.get("/getJev", (req, res) => {
    res.send(jev);
});
app.get("/getKids", (req, res) => {
    res.send(kids);
});
app.get("/getSouv", (req, res) => {
    res.send(souv);
});
app.get("/getTech", (req, res) => {
    res.send(tech);
});
// req = {name: ...}
// app.post("/getJson", (req, res) => {
//     if (req.name) {
//     let jsonName = req.name;
//     req.send(require(dirPath + jsonName + ".json"));
// } else {
//     res.sendStatus(500);
// }
// });
// app.get("/getAabJson", (req, res) => {
//     res.send(aabJson);
// });

app.listen(3000, ()=> {
    console.log("Server started");
});
