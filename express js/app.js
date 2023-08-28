const express=require('express')
const app=express()
const PORT=3000;

//end points/routes
//http method-get, post, put etc

//app.anyMethod(pathname, (req,res)=>{})

app.get('/',(req,res)=>{
    res.send("Welcome to root URL of server")
})

app.listen(PORT,(error)=>{
    if (!error){
        console.log("Server successfully listening on port 3000");

    }else{
        console.log("Error occured, Server cant start",error);
    }
})

//how to send data to server

app.use(express.json())
app.post("/validateUser",(req,res)=>{
    console.log(req.body)
    const {username,password}=req.body; //from clint request

    //db connection and fetch use and pass
    if(username==="Ramesh"&& password==="ram123"){
        res.send("Login successful...")
    }else{
        res.send("Invalid username or password..")
    }
})

