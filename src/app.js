const express = require("express");
const app = express();

app.use((req, res)=>{
    res.send("Hello from server!");
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});

// console.log("Starting the new project");
