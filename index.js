const express = require("express")
	const app = express()
	const PORT = 3000

	app.listen (PORT, () => {
		console.log("Is it working?")
	});

    // Middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
  };
  
  module.exports = logger;
  
const isVegan = (req, res, next) => {
    if (req.body.isVegan !== undefined && req.body.isVegan === false) {
      return res.status(400).json({ message: 'Recipe must be vegan' });
    }
    next();
  };
  
  module.exports = isVegan;

const logger = require('./middleware/logger');
const isVegan = require('./middleware/isVegan');

app.use(express.json());
app.use(logger); 
// Routes
app.use('/api/plant-based-recipes', isVegan, plantBasedRecipesRouter); // Check if recipe is vegan

