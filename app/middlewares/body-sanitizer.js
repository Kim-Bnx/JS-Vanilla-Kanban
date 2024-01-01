const sanitizer = require('sanitizer');

// To prevent XSS vulnerabilities in body request
const bodySanitizer = (req, _, next) => {
  if (req.body) {
    for (const key in req.body) {
      req.body[key] = sanitizer.escape(req.body[key]);
    } 
    next();
  }
};

module.exports = bodySanitizer;