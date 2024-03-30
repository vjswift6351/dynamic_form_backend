const express = require('express');
const router = express.Router();
require('dotenv').config();
require('mongoose');

const formsModel = require('../../../../models/v1/forms');

router.get('/getforms/:id', async function(req, res, next){
        let forms = await formsModel.find({"_id": req.params.id},{new:true})
        res.status(200).json({'message':forms});        
});

router.get('/getforms', async function(req, res, next){
    let forms = await formsModel.find({})
    res.status(200).json({'message':forms});        
});

router.post('/addforms', async function(req, res, next){
    let FormsModel = new formsModel();
    FormsModel.forms= req.body.forms
    const newForm =  await FormsModel.save();
    res.status(200).json({'message': "form added","data": newForm});
});


router.delete('/deleteforms/:id', async function(req, res, next){
    let deleteform = await formsModel.findOneAndDelete({"_id": req.params.id},{new:true})
    res.status(200).json({'message':"Form Deleted","data":deleteform});
});

router.put('/updateforms', async function(req, res, next){
    let updateform = await formsModel.findOneAndUpdate({"_id": req.body.id} , {
        $set: {"forms": req.body.forms}
    },{new:true})
    res.status(200).json({'message': "Form Updated","data": updateform});
});

module.exports = router;