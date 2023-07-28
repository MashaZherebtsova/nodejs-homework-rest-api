const jwt = require("jsonwebtoken");
const { User } = require("../models/user");

const { HttpError } = require("../helpers");
const dotenv = require("dotenv");
const { SECRET_KEY } = process.env;
dotenv.config(`${process.env.SECRET_KEY}`);

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(HttpError(401));
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    console.log(SECRET_KEY);
    const user = await User.findById(id);
    if (!user || !user.token || user.token !== token) {
      next(HttpError(401));
    }
    req.user = user;
    next();
  } catch {
    next(HttpError(401));
  }
};

module.exports = authenticate;
