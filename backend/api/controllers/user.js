const User = require('../models/user')

exports.create_user = (req, res) => {
  const user = new User({ ...req.body })
  user
    .save()
    .then(() => {
      res.status(201).json({ message: 'Registered successfully' })
    })
    .catch((err) => {
      res.status(500).json({ message: 'Registration failed' })
    })
}

exports.is_user_exist = (req, res) => {
  User.findOne({ phone: req.query.phone })
    .then((user) => {
      if (user) {
        res
          .status(200)
          .json({ message: 'User exists', exist: true, type: user.type })
      } else {
        res.status(400).json({
          message: 'User does not exist',
          exist: false,
        })
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Server error' })
    })
}

exports.find_user_by_phone = (req, res) => {
  User.findOne({ phone: req.query.phone })
    .then((user) => {
      if (user) {
        res.status(200).json({ message: 'User exists', user })
      } else {
        res.status(400).json({ message: 'User does not exist' })
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Server error' })
    })
}

exports.check_credentials = (req, res) => {
  User.findOne({ phone: req.query.phone })
    .then((user) => {
      if (user) {
        //check credentials
        if (user.password == req.query.password) {
          res
            .status(200)
            .json({ message: 'Logged in successfully', valid: true, user })
        } else {
          res.status(401).json({ message: 'Invalid credentials', valid: false })
        }
      } else {
        res.status(400).json({ message: 'User does not exist' })
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Server error' })
    })
}
