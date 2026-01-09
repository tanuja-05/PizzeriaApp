let express=require('express')
let mongoose=require('mongoose')
require('dotenv').config();
let cors=require('cors');
const { pizzaRouter } = require('./routers/pizzaRouter');

let app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DBURL).then(()=>{
    console.log("Connected to DataBase");
    app.listen(process.env.PORT || '8000',()=>{
        console.log("Server is running");
    })
    
}).catch((err)=>{
    console.log("Error connecting to Database",err);
    
})

app.use('/api/pizza',pizzaRouter)

//http://localhost/api/pizza