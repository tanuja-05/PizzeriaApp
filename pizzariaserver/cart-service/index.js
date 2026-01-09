let express=require("express");
let mongoose=require('mongoose')
require('dotenv').config();
let cors=require('cors');
const { cartRouter } = require("./routes/cartRouter");
let app=express();
app.use(express.json());

app.use(cors());

mongoose.connect(process.env.DBURL).then(()=>{
    console.log("Database Connected");
    app.listen(process.env.PORT || 3004 ,()=>{
        console.log("Server is running");
        
    })
    
}).catch((err)=>{
    console.log("Error in connecting to the Database",err);
    
})

app.use('/api/cart',cartRouter);