
const router = require('express').Router();
const axios = require('axios');
// //aa

// // define the home page route
router.get('/', async function(req, res) {
  try {
    const data = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log('data' ,data.data);
    res.status(200).json(data.data);
  } catch(e) {
    console.log(e.stack)
    res.status(500).send({error: e.message})
  }
});

export default router;