const express = require('express');
const app = express();

console.log("Server file loaded");

app.use(express.json());
app.use((req, res, next)=>{
  console.log('${req.method} ${req.url}');
  next();
});

// CORRECT ROUTE
const userRoutes = require("./routes/userRoutes"); 
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  console.log("GET / request received");
  res.send("Server is running!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
