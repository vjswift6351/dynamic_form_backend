const express = require('express');
const router = express.Router();
require('dotenv').config();
require('mongoose');

const fieldModel = require('../../../../models/v1/fields');

router.get('/getfields', async function(req, res, next){
        let fields = await fieldModel.find({})
        res.status(200).json({'message':fields});        
});

router.post('/addfields', async function(req, res, next){
    let FieldModel = new fieldModel();
    FieldModel.field= req.body.field
    const newField =  await FieldModel.save();
    res.status(200).json({'message': "field added","data": newField});
});


router.delete('/deletefields/:id', async function(req, res, next){
    let deletefield = await fieldModel.findOneAndDelete({"_id": req.params.id},{new:true})
    res.status(200).json({'message':"Field Deleted","data":deletefield});
});

router.put('/updatefields', async function(req, res, next){
    let updatefield = await fieldModel.findOneAndUpdate({"_id": req.body.id} , {
        $set: {"field": req.body.field}
    },{new:true})
    res.status(200).json({'message': "Field Updated","data": updatefield});
});

module.exports = router;