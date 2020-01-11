const express= require('express')
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');

// mongoose.connect('mongodb+srv://admin:'+ process.env.MONGO_ATLAS_PW +'@gdpr-healthcare-4sjvc.mongodb.net/test?retryWrites=true&w=majority',
// { useNewUrlParser: true,
//     useUnifiedTopology: true
// })

mongoose.connect('mongodb://localhost:27017/healthcare_gdpr', {useNewUrlParser: true});

// const productRoutes = require('./api/routes/products')
const patientRoutes = require('./api/routes/patients')
const userRoutes = require('./api/routes/users');
const documentRoutes = require('./api/routes/documents');


app.use(morgan('dev'))
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.use((req,res,next)=>{
 res.header('Access-Control-Allow-Origin','*');
 res.header('Access-Control-Allow-Headers',
 'origin,X-Requested-With,Content-Type,Accept,Authorization')
if(req.method==='OPTIONS'){
res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,GET,DELETE')
return res.status(200).json({})
}
next();
});

// app.use('/products',productRoutes)
app.use('/patients',patientRoutes)
app.use('/user', userRoutes);
app.use('/documents', documentRoutes);


app.use((req,res,next)=>{
    const error = new Error('not Found')
    error.status =404;
    next(error);
})

app.use((error,req,res,next)=>{
  res.status(error.status || 500)
  res.json({
      error:{
          message:error.message
      }
  })
})

module.exports = app;