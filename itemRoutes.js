"use strict";
const express = require("express");
const { post, get, patch } = require("superagent");
const { ValueError, NotFoundError } = require("./expressError");
const db = require("./fakeDb");
const router = new express.Router();

router.get("/", (req, res) => {
    console.log("targetting all items")
    let item = db.Item.all()
    return res.json(item)
});

router.post("/", (req, res) => {
    console.log("extracting values from body")
    console.log(req.body)
    if (typeof Number(req.body.price) === "number") {
        let name = req.body.name
        let price = req.body.price
        let item = db.Item.add(name, price)
        return res.json(item)
    }
    else throw new ValueError
});

router.get("/", (req, res) => {
    console.log("tagetting one item")
    let itemName = req.query.iName;
    let item = db.Item.get(itemName)
    if (!item) {
        throw new NotFoundError(`No such item ${itemName} found :(`);
    }
    return res.json(item)
});



// post items


// get items/ :name

// patch items/:name

// delete items/:name



















module.exports = router