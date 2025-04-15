const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
// const passport = require('./models/auth');
app.use(bodyParser.json());

const MenuItem = require('./models/menu');

app.get('/api', (req, res) => {
    res.send('welcome to my api app');
});

app.use(passport.initialize());
const localauthmiddleware = passport.authenticate('local',{session:false})


const pesonRoutes = require('./routes/personRouter');
app.use('/person', pesonRoutes);

const menuRouter = require('./routes/menuroutes');
app.use('/menu', menuRouter);

app.listen(3000, () => {
    console.log('server is running on port 3000');
 
    
});
