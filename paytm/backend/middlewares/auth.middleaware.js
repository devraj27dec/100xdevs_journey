const jwt = require('jsonwebtoken');
const User = require('../models/user.models');

exports.isAuthenticated = async (req, res, next) => {
  const { accessToken } = req.cookies;
  // console.log(accessToken)

  if (!accessToken) {
    return res.status(403).json({ msg: 'Token not provided' });
  }
  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
    // console.log("decoded token" , decoded)
    const user = await User.findById(decoded?._id).select("+password")
    // console.log(user)
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    req.user = user;
    next();
  } catch (err) {
    console.error('Token verification failed:', err.message);
    return res.status(401).json({ msg: 'Invalid or expired token' });
  }
};
