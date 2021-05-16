const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://singh:2zGoPDhWqdfOP0LB@cluster0.inigt.mongodb.net/registration?retryWrites=true&w=majority",
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
