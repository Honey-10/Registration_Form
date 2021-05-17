const mongoose = require("mongoose");

mongoose
  .connect(
    "localhost:800/form",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log(" db is connected");
  })
  .catch((e) => {
    console.log(" db not connected");
  });
