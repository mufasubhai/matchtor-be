const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
const mongoose = require('mongoose');
const db = require('./config/keys_dev').mongoURI;
const bodyParser = require('body-parser');



//routes
const users = require("./routes/api/users");

const tasks = require("./routes/api/tasks");

app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/users", users);
app.use("/api/tasks", tasks);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));