const facebook = require("./passportAuth");
const standard = require("./standardAuth");

module.exports = {

  authenticate (req, res, next) {
    // did we get access-token or facebook-token?
      if (req.headers['facebook-token']) {
        return facebook.authenticate();
      } else {
        return standard.authenticate();
      }
  }
}
