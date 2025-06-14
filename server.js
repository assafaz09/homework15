const db = require("mongoose");
const express = require("express");
  const app = express();
  const path = require("path");

  
  db.connect("mongodb+srv://assafaz09:passforsv@cluster0.abyvdvl.mongodb.net/users")
  .then(() => {
      console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
 app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "project") });
});

  app.use(express.static(path.join(__dirname, "project")));

  const UserSchema = new db.Schema({
      userName: String,
      email: String,
      password: String
    })
    
    const User = db.model("User", UserSchema);
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    
    app.post("/register", async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const user = new User({ userName, email, password });
    await user.save();
    res.status(201).sendFile("thx.html", { root: __dirname });
    console.log("User saved successfully:", user);
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).send("Error registering user");
  }
});


  const port = 4000;
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
