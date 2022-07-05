const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const podcastRouter = require("./routes/podcasts");
const episodeRouter = require("./routes/episodes");
const albumRouter = require("./routes/albums");
const trackRouter = require("./routes/tracks");
const contributingArtistRouter = require("./routes/contributingArtists");
const genreRouter = require("./routes/genres");
const hostRouter = require("./routes/hosts");
const buffetRouter = require("./routes/buffet");

const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME, MONGO_PORT, MONGO_DB } =
  process.env;

const mongo_url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

const mongoose = require("mongoose");
mongoose
  .connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    auth: { authSource: "admin" },
    user: MONGO_USERNAME,
    pass: MONGO_PASSWORD,
  })
  .catch((error) => {
    console.log("could not connect to the databse error");
    console.log(mongo_url);
    console.log(error);
  });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("database connected..."));

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/podcasts", podcastRouter);
app.use("/api/episodes", episodeRouter);
app.use("/api/albums", albumRouter);
app.use("/api/tracks", trackRouter);
app.use("/api/artists", contributingArtistRouter);
app.use("/api/genres", genreRouter);
app.use("/api/hosts", hostRouter);
app.use("/api/buffet", buffetRouter);

//set static folder
app.use(express.static(path.join(__dirname, "client", "/build")));
app.use(express.static(path.join(__dirname, "/public")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', "build", 'index.html'));
// });

module.exports = app;
