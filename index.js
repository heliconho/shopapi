const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');

app.use(express.json());

dotenv.config();
mongoose
  .connect(process.env.MONGOURL)
  .then(() => console.log("db connection success"))
  .catch((err) => {
    console.log(err)
  });

app.use('/api/auth',authRoute);
app.use('/api/user',userRoute);
app.use('/api/product',productRoute);



app.listen(process.env.PORT || 5000, () => {
  console.log(`currently listening on port ${process.env.PORT}`)
})