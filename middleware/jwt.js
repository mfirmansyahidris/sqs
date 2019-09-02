const express = require('express')
const app = express()
const port = 3000

const jwt = require('jsonwebtoken')
const fs = require('fs')

app.get('/', (req, res) => res.send("Hello world!"))


// let's first add a /secret api endpoint that will be protecting
app.get('/secret', isAuthorized, (req, res) => {
    res.json({
        "message" : "THIS IS SUPERSECRET, DO NOT SHARE!"
    })
})

// and a /readme endpoint which will be open for the world to see
app.get('/readme', (req, res) => {
    res.json({
        "message" : "This is open to the world!"
    })
})

app.get('/jwt', (req, res) => {
    let privateKey = fs.readFileSync('./private.pem', 'utf8');
    let token = jwt.sign({ "body": "stuff" }, privateKey, { algorithm: 'HS256'});
    res.send(`jwt ${token}`);
})


function isAuthorized(req, res, next){
    if (typeof req.headers.authorization !== 'undefined'){
        // retrieve the authorization header and parse out the
        // JWT using the split function
        let token  = req.headers.authorization.split(" ")[1]

        let privateKey = fs.readFileSync('./private.pem', 'utf8')

        // Here we validate that the json web token is valid and has been
        // created using the same private pass pharse
        jwt.verify(token, privateKey, { algorithm: "HS256" }, (err, user) => {

            //if create has been error
            if(err){
                // if there has been an error...
                res.status(500).json({
                    error : "Not Authorized"
                })
                throw new Error("Not Authorized")
            }
            // if the JWT is valid, allow them to hit
            // the intended endpoint
            return next()
        })
    }else{
        // No authorization header exists on the incoming
        // request, return not authorized and throw a new error
        res.status(500).json({
            error : "Not Authorized"
        })
        throw new Error("Not Authorized")
    }
}


app.listen(port, 
    () => console.log(`Simple Express app listening on port ${port}!`))