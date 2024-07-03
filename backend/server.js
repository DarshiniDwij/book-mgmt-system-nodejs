const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config/config.js")

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./models");

db.sequelize.sync().then(() => {
    // initial(); 
  });

  // simple route
app.get("/", (req, res) => {
    res.json({ message: "Hi there, welcome to book management system" });
  });


  // Routes
app.use('/api/books', require("./routes/book.routes"));
app.use('/api/author', require("./routes/author.routes"));
app.use('/api/genre', require("./routes/genre.routes"));


  // // api routes
  // require("./routes/book.routes")(app)
  // require("./routes/author.routes")(app)
  // require("./routes/genre.routes")(app)


// set port, listen for requests
const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
