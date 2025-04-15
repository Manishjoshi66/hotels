const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menu');

router.post('/',(req,res)=>{
    const data = req.body;
    const newMenu  = new MenuItem(data);
    newMenu.save()
        .then(()=>res.status(201).send('Menu created'))
        .catch(err=>res.status(400).send(err));
})
router.get('/', async (req,res)=>{
    try{
    const data = await MenuItem.find();
    console.log('data fatched from db', data);
    res.status(200).json(data);
    }
    catch(err){
        console.error('Error fetching data from DB', err);
        res.status(500).send('Error fetching data from DB');
        

    }
})

router.get('/:id', async (req,res)=>{
    try{
        const id= req.params.id;
        if(id === 'sweet' || id === 'spicy' || id === 'sour' || id === 'salty' || id === 'bitter'){
            
            const data = await MenuItem.find({taste:id});
                console.log('data fatched from db', data);
                res.status(200).json(data);
        }
        else{
            res.status(400).send('Invalid id');
         }
        
        }
        catch(err){
            console.error('Error fetching data from DB', err);
            res.status(500).send('Error fetching data from DB');
        }
        
    
   
})
module.exports = router;