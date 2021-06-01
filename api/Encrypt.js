const crypto = require("crypto");

module.exports = class Encrypt {
  static encrypt(password) {
    return crypto

      .createHmac("sha256", "Landskrona BoIS")
      .update(password)
      .digest("hex");
  }
};
