const { Router } = require('express');
const newRouter = Router();

newRouter.get('/', (req, res) => {
    res.send('Ads');
})

module.exports = newRouter;
