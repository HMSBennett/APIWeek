let mongoose = require('mongoose');
let express = require('express');

var app = express();

app.listen(8080, () => {
    console.log("listening on 8080");
});

mongoose.connect("mongodb://localhost:27017/UserDB", {
    useNewUrlParser: true
    },
    function (err){
        if(err){
            console.log("Connection Failed");
        }else{
            console.log("Connection Succeeded");
        }
    }
);

app.use(express.json);

// app.delete('/deleteUser', async (req, res) => {
//     console.log(req.body);
//     try{
//         return res.status(201).send(delete);
//     }catch{
//         return res.status(501).send(err);
//     }
// });