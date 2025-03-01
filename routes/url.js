const express = require("express");
const router = express.Router();
const {
    handleRedirect,
    handleGenShortId,
    getAllUrl,
} = require("../controlers/url");

//Routes
router.get('/all', getAllUrl);
router.get('/id/:id', handleRedirect);
router.post('/', handleGenShortId);


module.exports = router;