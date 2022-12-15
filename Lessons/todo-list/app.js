const express = require("express");
const app = express();
const PORT = 4000;
const practiceController = require("./controllers/practice.controller");
const auth = require("./controllers/auth");
const routes = require("./controllers/routes")
const cors = require("cors")

function logTime(req, res, next) {
  let date = new Date()
  console.log(date.toLocaleDateString())

  next()
}

app.use(express.json());
app.use(express.urlencoded());
// This will serve the static html page that is inside the public folder
app.use(express.static(`${__dirname}/public`));

// ! any traffic coming in that is has the practice in the url ex: localhost:4000/practice will go to the practiceController for more routing options.
app.use(logTime)
app.use("/practice", practiceController);
app.use("/auth", auth)
app.use("/todo", routes)
app.use(cors())
console.log(__dirname);
app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});


