const express = require("express");
const URL = require("../models/url");
const shortid = require('shortid');

async function handleRedirect(req, res){
    const givenShortURL = req.params.id;
    const result = await URL.findOne({ shortID: givenShortURL });
    const result2 = await URL.findOneAndUpdate({givenShortURL}, 
        {
            $push: {
                history:{
                    timestapm: Date.now() ,
                },
            }
        }
    );
    //console.log(result.redirectoryURL);
    res.redirect(result.redirectoryURL);
}

async function handleGenShortId(req, res){
    const generatedID = shortid.generate();
    const body = req.body;
    if(!body)
    {
        //console.log("Error in controler"); 
    }

    const result = await URL.create({
        shortID: generatedID,
        redirectoryURL: body.redirectoryURL,
    });
    return res.json({Short_URL: generatedID});
}

async function getAllUrl(req, res){
    const urls = await URL.find({});
    console.log(urls);
    return res.json({all : urls});
}

module.exports = {
    handleGenShortId,
    handleRedirect,
    getAllUrl,
};