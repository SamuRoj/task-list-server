// Imports
require('dotenv').config();
const jwt = require('jsonwebtoken');

// Variables
const secret = process.env.SECRET; 

const JWTValidation = function(req, res, next) {
    try {
        if(req.headers.authorization === undefined){
            res.status(401).send({ error: "JWT Token not found" });
        }
        else{
            const token = req.headers.authorization.split(" ")[1];
            jwt.verify(token, secret);
            next();
        }
    } catch (error) {
        res.status(401).send({ error: error.message });
    }
};

module.exports = { JWTValidation };