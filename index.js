const express = require('express') ; 
const app = express() ; 

app.get('/' , (req , res)=> {
    return res.status(200).json({
        data :'server is working fine'
    })
}) ; 

const PORT = 8000 ; 

app.listen(PORT , () => {
    console.log(`server is listing port : ${PORT}`) ; 
})