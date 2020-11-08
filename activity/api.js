const express = require("express")
const userRouter = require('./routers/userRouter')
const app = express();

app.use(express.static("view"));
app.use(express.json());

// creating middlewares
app.use("/api/v1/users",userRouter);




app.listen(3000,function(){
    console.log("server is listening to port 3000")
})