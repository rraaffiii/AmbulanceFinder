const Route = require('../models/route')

exports.submit_route_query = (req, res) => {
  res.json({ message: req.body })
}
