// Imports
const express = require('express') 
	
// Instantiations
const app = express() 
	
// Routes
app.get('/', (req, res)=>{
  res.send('hello world')
})

module.exports = app