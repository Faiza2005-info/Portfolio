const jwt = require('jsonwebtoken');

const adminMiddleware = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token){
     return res.status(401).json({ message: 'No token' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (req.user.role !== 'admin')
       return res.status(403).json({ message: 'Admin only' });
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Token not valid' });
  }
  }else{
     res.status(403).json({ message: 'Token not valid' });  
  }
};

module.exports = adminMiddleware;
