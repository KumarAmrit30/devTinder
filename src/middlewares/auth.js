const adminAuth = (req, res, next) => {
  const token = "12345";
  const isAuthorized = token === "12345";
  if (!isAuthorized) {
    res.status(401).send("Unauthorized request!");
  } else {
    next();
  }
};

module.exports = { adminAuth };