const express =require("express");
const dotenv=require("dotenv");
const morgan=require("morgan");
const connectDB=require("./config/connectDB");
const traineesRoute=require("./routes/traineesRoute");


dotenv.config();


const app=express()

connectDB()

//middlewares
app.use(morgan("dev"))
app.use(express.json())


//routes
app.use("/api/v1/trainees",traineesRoute);

//home route
app.get("/", (req,res)=>{
    res.send("<h1>welcome to our traineese API<h1>")
});

const port=process.env.PORT||5000

app.listen(port, ()=>console.log(`server started on port ${port}`))
