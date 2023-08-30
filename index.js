const express = require('express');
const router = require('./routes/router');
const docs = require('./routes/docs');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', router);
app.use('/docs', docs)

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb://127.0.0.1:27017/UIStorage?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Server is connecting on MongoDB");
    app.listen(3333, () => {
      console.log("Server is running on port 3333");
    })
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
