const mongoose  = require('mongoose');
const mongoUrl = 'mongodb://localhost:27017/hotels'; 
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
// const passport = require('./models/auth');
app.use(bodyParser.json());


const logrequest = ((req,res,next)=>{
    console.log('request received');
    next();
})

app.get('/api', logrequest , (req, res) => {
    res.send(`${new Date().toLocaleDateString()} request made to : ${req.url}`);
});

// app.use(passport.initialize());
// const localauthmiddleware = passport.authenticate('local',{session:false})


const pesonRoutes = require('./routes/personRouter');
app.use('/person', pesonRoutes);

const menuRouter = require('./routes/menuroutes');
app.use('/menu', menuRouter);

app.listen(3000, () => {
    console.log('server is running on port 3000');
 
    
});


// const mongoUrl = 'mongodb://localhost:27017/hotels'; // Use this if you have MongoDB running locally
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
    
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('connected', () => {
        console.log('MongoDB connection established');
    });
 db.on('disconnected', () => {
        console.log('MongoDB connection disconnected');
    });

    module.exports = db;

