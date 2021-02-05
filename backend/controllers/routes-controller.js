// const homeModel = require('../models/home-model')
// const mongoose = require('mongoose')

exports.submit_route_query = (req, res) => {
  console.log('server recieved ' + req.body)
  res.json({ message: req.body })
}
