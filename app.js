const express = require("express");
const app = express();
const db = require('./config/keys_dev').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 5000;
const users = require("./routes/api/users");
const tasks = require("./routes/api/tasks");


// const express = require("express");
// const app = express();
// const db = require("./config/keys").mongoURI;
// const mongoose = require('mongoose');
// const bodyParser = require("body-parser");
// const passport = require('passport');
// const path = require('path');
// const users = require("./routes/api/users");
// const jobs = require("./routes/api/jobs");
// const { seedJobs } = require('./seeds/scripts');
// const cors = require('cors')

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));


app.listen(port, () => console.log(`Server is running on port ${port}`));
app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/users", users);
app.use("/api/tasks", tasks);

app.use(bodyParser.json());
