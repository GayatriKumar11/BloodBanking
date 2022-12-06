const express =  require('express')
const morgan =  require('morgan')
const bodyParser =  require('body-parser')
const cors =  require('cors')
const mongoose =  require('mongoose')
var cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const formidable = require('formidable');
const fs = require('fs')
require('dotenv').config()

const app = express()

//DB:
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(() =>console.log('DB connected for Blood Donation Project'))
.catch(err =>console.log(err))

//MIDDLEWARES
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(cookieParser());
app.use(expressValidator()); //friendly error msgs
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('Unauthorized. Seems a problem with your token.');
    }
  });

//ROUTES
const authRoutes = require('./Routes/authRoute.js')

//ROUTES MIDDLEWARE
app.use('/api/auth', authRoutes);

//Routes Sumarizing:
app.get('/api/', (req, res) => {
  fs.readFile('_docs/apiDocs.json', (err, data) => {
    if(err){ res.status(404).json({ error: err})}
    const docs = JSON.parse(data)
    res.json(docs)
  })
})

// app.get('/', (req, res) => {
//     res.send('test backend')
// })

//LISTEN:
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`App is listen on port ${port}`))