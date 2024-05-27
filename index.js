const express = require("express")
	const app = express()
	const PORT = 3000

	app.listen (PORT, () => {
		console.log("Is it working? ${PORT}")
	});

    // Middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
  };
  
  module.exports = logger;
