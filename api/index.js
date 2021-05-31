express = require("express");
const session = require("express-session");
const path = require("path");

const userRoutes = require("./routes/userRoutes.js");
const userPrefix = "/api/v1/users";
const port = 3001;

const app = express();
app.use(express.json());

app.use(
  session({
    secret: "Forza Randigt",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: "auto" },
  })
);

app.use(userPrefix, userRoutes);

app.use(express.static(path.join(__dirname, "../build")));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
