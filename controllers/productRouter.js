const productsRouter = require('express').Router();


productsRouter.get('/', (req, res) => {
  const body = req.body;
  console.log(body);
  res.send('Sickle-cell');
});

module.exports = productsRouter;
