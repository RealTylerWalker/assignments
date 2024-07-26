const express = require("express");

function middleware(req, res, next){
    console.log(req.method, req.url, new Date())
    req.newProperty = {
        name: "Tyler",
        age: 20
    }
    next()
}

module.exports = middleware