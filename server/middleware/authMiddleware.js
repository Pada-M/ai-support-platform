import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    // Token is expected in Authorization header: "Bearer <token>"
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token, authorization denied" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach decoded user info (business id) to the request
    req.businessId = decoded.id;
    next();
  } catch (err) {
    console.error("JWT Error:", err.message);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
