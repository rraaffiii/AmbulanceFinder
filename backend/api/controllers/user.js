const User = require('../models/user')
const jwt = require('jsonwebtoken')

exports.create_user = (req, res) => {
  const user = new User({ ...req.body })
  user
    .save()
    .then(() => {
      //after valid registration
      const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET)
      res
        .status(201)
        .header('authorization', token)
        .json({ message: 'Registration successful', user })
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
        res.status(200).json({
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
  User.findOne({ phone: req.body.phone })
    .then((user) => {
      if (user) {
        //check credentials
        if (user.password == req.body.password) {
          //after valid login
          const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET)
          res
            .header('authorization', token)
            .status(200)
            .json({ message: 'Log in successful', valid: true, user })
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
exports.login_with_phone = (req, res) => {
  User.findOne({ phone: req.body.phone })
    .then((user) => {
      if (user) {
        const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET)
        res
          .header('authorization', token)
          .status(200)
          .json({ message: 'Log in successful', valid: true, user })
      } else {
        res.status(400).json({ message: 'User does not exist' })
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Server error' })
    })
}
exports.find_user_by_id = (req, res) => {
  User.findOne({ _id: req.userId })
    .then((user) => {
      if (user) {
        res.status(200).send(user)
      } else {
        res.status(400).json({ message: 'Invalid request' })
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Server error' })
    })
}
exports.set_availability = (req, res) => {
  User.updateOne({ _id: req.userId }, { available: req.body.available })
    .then((available) => {
      res.status(200).json({ message: 'Updated successfully', available })
    })
    .catch(() => {
      res.status(500).json({ message: 'Server error' })
    })
}
exports.update_profile = (req, res) => {
  req.file ? (req.body.profile_photo = req.file.filename) : null

  User.updateOne({ _id: req.userId }, { $set: req.body })
    .then((user) => {
      res.status(200).json({ message: 'Updated successfully', user })
    })
    .catch(() => {
      res.status(500).json({ message: 'Server error' })
    })
}
exports.find_vehicles_by_driver = (req, res) => {
  const fields = '_id vehicles first_name rating rating_count'
  User.find({
    city: req.body.pickup,
    available: true,
    approved: true,
  })
    .select(fields)
    .populate('vehicles')
    .then((vehicles) => {
      res.status(200).send({ vehicles })
    })
    .catch(() => {
      res.status(500).json({ message: 'Server error' })
    })
}
