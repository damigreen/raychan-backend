const productsRouter = require('express').Router();


productsRouter.get('/', (req, res) => {

  res.send('Sickle-cell');
});

module.exports = productsRouter;
