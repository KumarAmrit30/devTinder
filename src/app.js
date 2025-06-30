const express = require("express");
const app = express();

const { adminAuth } = require("./middlewares/auth");

// app.get("/user", (req,res)=>{
//     res.send({firstname: "Amrit", lastname: "Kumar"});
// })

// app.post("/user", (req,res)=>{
//     console.log("Data posted to server");
//     res.send("Data saved successfully to database");
// })

// app.delete("/user", (req,res)=>{
//     console.log("Data deleted from server");
//     res.send("Data deleted successfully from database");
// })

// app.use("/user",(req, res)=>{
//     res.send("Hello from server!");
// })

// app.use(
//   "/user",
//   (req, res, next) => {
//     console.log("Request received");
//     res.send("Request received");
//     // next();
//   },
//   (req, res, next) => {
//     console.log("Response sent 2");
//     res.send("Response sent 2");
//     next();
//   },
//   (req, res, next)=>{
//     console.log("Response sent 3");
//     res.send("Response sent 3");
//     next();
//   }
// );

// Handle auth middlewares for all type of requests

app.use("/admin", adminAuth);

app.use("/admin/getAllUsers", (req, res) => {
  res.send("All users sent");
})

app.use("/admin/deleteUser", (req,res)=>{
  res.send("User deleted");
})




app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// console.log("Starting the new project");
