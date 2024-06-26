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
app.get("/", (req, res) => {

}) 
//Post
router.post('/plant-based-recipes', (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }
  });
// Patch
  router.patch('/plant-based-recipes/:id', (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    const updatedRecipe = { id, ...updates };
    res.json(updatedRecipest);
  });
  // Put
  router.put('/plant-based-recipes/:id', (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    res.json({ id, ...newData });
  });
  // Delete
  router.delete('/plant-based/:id', (req, res) => {
    const { id } = req.params;
    
    res.sendStatus(204);
  });
  
  module.exports = router;
// API
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/api/resources', (req, res) => {
    res.json(resources);
  });
  
  
  app.get('/api/resources/:id', (req, res) => {
    const resourceId = req.params.id;
    res.json(resource);
  });
  
 
  