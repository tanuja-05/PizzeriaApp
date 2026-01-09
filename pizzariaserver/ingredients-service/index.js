let express=require('express');
let app=express();
app.use(express.json());
let mongoose = require('mongoose');
require('dotenv').config();
let cors=require('cors');
const { ingredientsRouter } = require('./routes/ingredientsRouter');
app.use(cors());
mongoose.connect(process.env.DBURL).then(()=>{
    console.log("Connected to Database");
    app.listen(process.env.PORT || 3004 , ()=>{
       console.log("Server is running");
       
    })
}).catch((err)=>{
    console.log("Error connecting to Database",err);
})

app.use('/api/ingredients',ingredientsRouter);
//http://localhost:3003/api/ingredients