const express = require("express");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const route = require("./routes/route");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

mongoose
  .connect(
    "mongodb+srv://bittushri8224:lyNrXnwy17jk4lFa@cluster0.ii3dqef.mongodb.net/project-instaChamp?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.use((req, res, next) => {
  res.status(400).send({ status: false, error: "Enter proper Url" });
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});