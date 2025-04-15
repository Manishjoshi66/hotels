const express = require('express');
const router = express.Router();
const person = require('../models/person');
router.get('/', async (req,res)=>{
    try{
    const data = await person.find();
    console.log('data fatched from db', data);
    res.status(200).json(data);
    }
    catch(err){
        console.error('Error fetching data from DB', err);
        res.status(500).send('Error fetching data from DB');
        

    }
})
router.post('/', (req,res) => {
    const data = req.body;
    const newPerson = new person(data);
    // const newPerson = new person({
    //     name: req.body.name,
    //     age: req.body.age,
    //     email: req.body.email,
    //     phone: req.body.phone
    // });
    newPerson.save()
        .then(() => res.status(201).send('Person created'))
        .catch(err => res.status(400).send(err));
});

router.get('/:id', async (req,res)=>{
    try{
 const id = req.params.id;
 if(id =='cheaf' || id=='waiter' || id=='manager'){
    const data = await person.find({work:id});
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
    
}
)


router.put('/:id', async (req, res) => {
    try {
      const personId = req.params.id;
      const updatedData = req.body;
  
      const response = await person.findByIdAndUpdate(
        personId,
        updatedData,
        { new: true, runValidators: true }
      );
  
      if (!response) {
        return res.status(404).send('Person not found');
      }
  
      console.log('Data updated:', response);
      res.status(200).json(response);
  
    } catch (err) {
      console.error('Error updating person:', err);
      res.status(500).send('Error updating person');
    }
  });
  router.delete('/:id',async(res,res)=>{
    try{
      const personId = req.params.id;
      const response = await person.findByIdAndDelete(personId);
      res.status(200).send('Person deleted successfully');
      if (!response) {
        return res.status(404).send('Person not found');
      }
    }
    catch(err){
      console.error('Error deleting person:', err);
      res.status(500).send("Error deleting person");
    }
  })
  
module.exports = router;