'use strict'

const express = require('express'),
    router = express.Router();
const languagesModel = require('../models/languagesModel');

router.get('/', async (req, res) => {
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

module.exports = router;