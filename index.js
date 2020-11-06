const express = require('express')
const db = require('./dbConnectExec.js')
const config = require('./config.js')

const app = express();

app.get("/hi",(req,res)=>{
    res.send("Hello World")
})

app.get("/customers", (req,res)=>{
    //get data from database
    db.executeQuery(`SELECT TOP (1000) [CustomerID]
    ,[NameFirst]
    ,[NameLast]
    ,[Email]
    ,[PhoneNumber]
    ,[EmailPassword]
    ,[Token]
    ,[RewardsIDFK]
FROM [dbo].[Customer]`)
    .then((result)=>{
        res.status(200).send(result)
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send()
    })
})



app.listen(5000,()=>{console.log("app is running on port 5000")})