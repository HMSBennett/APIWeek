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

let mySchema = new mongoose.Schema({ name : "string" });
let myModel = mongoose.model('Users', mySchema);

myModel.findByIdAndRemove(req.params.myModel, (err, myModel) => {
    if(err) {
        return res.status(500).send(err);
    }

    const response = {
        message: "Done the do",
        id: myModel.id
    }

    return res.status(200).send(response);
});


//---------------------------------------------------------------------

var user = "Bobby"

// myModel.create ({ name : user }, function (err) {
//     if (err){
//         return handlerError(err);
//     }
// });

// myModel.deleteOne({ name : user }, function (err) {
//     if(err){
//         return handlerError(err);
//     }
// });

//---------------------------------------------------------------------

// const router = express.Router();

// router.delete('/userDelete', mySchema.myModel);

// app.delete = function (req,res) {
//     myModel.findByIdAndDelete(req.params.id, function (err) {
//         if(err){
//             return next(err);
//         }
//         res.send("Deleted Well");
//     });
// }

//---------------------------------------------------------------------

// app.delete('/deleteUser', async (req, res) => {
//     // console.log(req.body);
//     try{
//         const currentUser = mySchema.myModel(req.body);
//         // const currentUser = "bazz";
//         const userDoc = await currentUser.delete();
//         return res.status(201).send(userDoc);
//     }catch (ex){
//         console.log(ex);
//         return res.status(501).send(ex);
//     }
// });

// app.post('/createUser', async => {
//     myModel.create ({ name : user }, function (err) {
//         if (err){
//             return handlerError(err);
//         }
//     });
// });