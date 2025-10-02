const express = require("express")
const app=express()
const port=3000

const inventoryroutes=require("./Routes/InventoryRoutes")

// Middleware
app.use((req,res,next)=>{
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`)
    next();
})
// 

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Inventory API is Running")
})

app.get('/health', (req, res) => {
    res.json({
        status: "OK",
        message: "Server is running perfectly",
        timestamp: new Date().toISOString()
    });
});
app.use('/inventory',inventoryroutes)


// Middleware
app.use('*',(req,res)=>{
    res.status(404).json({
        error:"Route not found",
        message:`The route ${req.originalUrl} does not exist`

    })
})
// 

app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})
