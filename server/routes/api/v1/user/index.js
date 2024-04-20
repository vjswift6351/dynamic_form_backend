const express = require('express');
const router = express.Router();
require('dotenv').config();
require('mongoose');

const userModel = require('../../../../models/v1/user');

router.get('/getuser/:id', async function(req, res, next){
        let user = await userModel.find({"_id": req.params.id})
        res.status(200).json({'message':user});        
});

router.get('/getuser', async function(req, res, next){
    let user = await userModel.find({})
    res.status(200).json({'message':user});        
});

router.post('/adduser', async function(req, res, next){
    console.log(req)
    let UserModel = new userModel();
    UserModel.username= req.body.username
    UserModel.email= req.body.email
    UserModel.password= req.body.password
    UserModel.isadmin= false 
    const newUser =  await UserModel.save();
    res.status(200).json({'message': "User added","data": newUser});
});


router.delete('/deleteUser/:id', async function(req, res, next){
    let deleteUser = await userModel.findOneAndDelete({"_id": req.params.id},{new:true})
    res.status(200).json({'message':"User Deleted","data":deleteUser});
});

router.put('/updateuser/:id', async function(req, res, next){
    console.log(req.body.id)
    let updateUser = await userModel.findOneAndUpdate({"_id": req.params.id} , {
        $set: {"username": req.body.username, "email": req.body.email, "password": req.body.password, "isadmin": false},
    },{new:true})
    console.log(updateUser)
    res.status(200).json({'message': "User Updated","data": updateUser});
});

module.exports = router;