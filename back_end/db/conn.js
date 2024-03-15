const mongoose = require('mongoose')
const db = process.env.DATABASE;

mongoose.connect(db).then(() => {
    console.log("Connection Success");
  }).catch((e) => {
    console.log(e);
  });
  