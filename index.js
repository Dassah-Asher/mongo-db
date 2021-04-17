const express =require("express");
const dotenv=require("dotenv");
const morgan=require("morgan");
const connectDB=require("./config/connectDB");
const traineesRoute=require("./routes/traineesRoute");
const usersRoute=require("./routes/usersRoute")


dotenv.config();


const app=express()

connectDB()

//middlewares
app.use(morgan("dev"))
app.use(express.json())


//routes
app.use("/api/v1/trainees",traineesRoute);
app.use("/api/v1/users",usersRoute)

//home route
app.get("/", (req,res)=>{
    res.send("<h1>welcome to our traineese API<h1>")
});

const port=process.env.PORT||4000

app.listen(port, ()=>console.log(`server started on port ${port}`))
