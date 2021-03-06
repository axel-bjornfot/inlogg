const sqlite3 = require("sqlite3");
const Encrypt = require("../Encrypt.js");
const path = require("path");

const db = new sqlite3.Database(path.join(__dirname, "../../db.db"));

const whoami = (req, res) => {
  res.json(req.session.user || null);
};

const login = (req, res) => {
  let query = /*sql*/ `SELECT * FROM users WHERE email = $email`;
  let params = { $email: req.body.email };

  db.get(query, params, (err, userInDB) => {
    if (!userInDB) {
      res.status(401).json({ error: "Bad credentials" });
      return;
    }

    req.body.password = Encrypt.encrypt(req.body.password);
    if (userInDB.password === req.body.password) {
      delete userInDB.password;
      req.session.user = userInDB;
      res.json({ success: "Login successfull", loggedInUser: userInDB });
      return;
    } else {
      res.status(401).json({ error: "Bad credentials" });
      return;
    }
  });
};

const logout = (req, res) => {
  delete req.session.user;
  res.json({ success: "Logout Successfully" });
};

const register = (req, res) => {
  let userToRegister = req.body;

  let query = /*sql*/ `SELECT * FROM users WHERE email = $email`;
  let params = { $email: userToRegister.email };
  db.get(query, params, (err, userExist) => {
    if (userExist) {
      res.status(400).json({ error: "User with that email already exists" });
      return;
    }

    userToRegister.password = Encrypt.encrypt(userToRegister.password);
    query = /*sql*/ `INSERT INTO users (email, password) VALUES ( $email, $password)`;
    params = {
      $email: userToRegister.email,
      $password: userToRegister.password,
    };

    db.run(query, params, function (err) {
      if (err) {
        res.status(400).json({ error: err });
        return;
      }

      res.json({ success: "User register successfull", lastID: this.lastID });
    });
  });
};

module.exports = { whoami, login, logout, register };
