'use strict'

const express = require('express'),
    router = express.Router();
const languagesModel = require('../models/languagesModel');

router.get("/", async (req, res) => {
    const languagesData = await languagesModel.getAll();
    res.render("template", {
        locals: {
            title: "Languages",
            data: languagesData
        },
        partials: {
            partial: "partial-languages"
        }
    })
});

router.post("/", async (req, res) => {
    console.log(req.body);
    const dbResponse = await languagesModel.updateStatus(6, "HTML");
    console.log(dbResponse);
    res.status(200).send("Ok").end();
})

module.exports = router;