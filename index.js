//https://blog.logrocket.com/build-rest-api-node-express-mysql/
//npm i express
/*
npm i mysql2
npm i cors  -save
Adding a package.json file
https://www.youtube.com/watch?v=_eRwjuIDJ2Y
To add a package.json file to your node.js project
Type:
npm init
It will ask you a series of questions, just take some defaults
Then you have to do an npm install on all of the dependencies you installed before but using the -save
keyword. I:e
npm install mysql -save
*/


const express = require("express");

//wire up cors
var cors = require('cors')

const app = express();
app.use(cors())
const port = 4051;

//make reference to your router
const router = require("./routes/route");


app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//this is your default route /
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

//with your router helper, create a /programming-languages  (route)
/* MY ROUTES
http://localhost:4051/hisdnutritionalservices
http://localhost:4051/hisdnutritionalservices/fetchschoollisting
http://localhost:4051/hisdnutritionalservices/fetchtblfoodstobeommited
http://localhost:4051/hisdnutritionalservices/fetchtblmilksub
http://localhost:4051/hisdnutritionalservices/fetchtblsupplementname
http://localhost:4051/hisdnutritionalservices/fetchtbltrainingtype
http://localhost:4051/hisdnutritionalservices/fetchnotes
*/
app.use("/hisdnutritionalservices", router);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

//create the port listener
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});