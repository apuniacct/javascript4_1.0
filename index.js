'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {
  // 4_1.1
  const radius = req.params.r;
  if(!radius) {
    const errorMessage = "Missing Required GET parameters: r";
    return res.status(400).send(errorMessage);
  }
  var obj = {
    area: Math.pow(radius, 10) * Math.PI,
    circumference: Math.PI * radius * 2.0,
  }

  res.json(obj);
});

//TODO2


//TODO3


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});