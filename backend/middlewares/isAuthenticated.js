const jwt = require("jsonwebtoken");

exports.isAuthenticated = (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers.authorization;
  // Check if token is provided
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  // Verify the token
  jwt.verify(token, "jai Shree Ram", (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Unauthorized: Token expired" });
      } else {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
      }
    }
    // Token is valid, set the decoded user on the request object
    req.user = decoded.user;
    next();
  });
};
