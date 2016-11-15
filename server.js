var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
   

app.get('/', (req, res) => {
     var infos = {
        ipaddress : req.headers["x-forwarded-for"],
        language: req.headers["accept-language"],
        software: req.headers["user-agent"]
    }
    
    res.end(JSON.stringify(infos, null, 2));
})

app.listen(PORT, () => {
   console.log('Listening on : ' + PORT); 
});