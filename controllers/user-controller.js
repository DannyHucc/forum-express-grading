const bcrypt = require('bcryptjs')
const db = require('../models')
const { User } = db

const userController = {
  signUpPage: async (req, res, next) => {
    try {
      return res.render('signup')
    } catch (error) {
      return next(error)
    }
  },
  signUp: async (req, res, next) => {
    try {
      if (req.body.password !== req.body.passwordCheck) throw new Error('Passwords do not match!')

      const user = await User.findOne({ where: { email: req.body.email } })
      if (user) throw new Error('Email already exists!')

      const hash = await bcrypt.hashSync(req.body.password, 10)
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hash
      })
      req.flash('success_messages', 'register success!')
      return res.redirect('/signin')
    } catch (error) {
      return next(error)
    }
  },
  signInPage: async (req, res, next) => {
    try {
      return res.render('signin')
    } catch (error) {
      return next(error)
    }
  },
  signIn: async (req, res, next) => {
    try {
      req.flash('success_messages', '成功登入！')
      return res.redirect('/restaurants')
    } catch (error) {
      return next(error)
    }
  },
  logout: async (req, res, next) => {
    try {
      req.flash('success_messages', '登出成功！')
      req.logout()
      return res.redirect('/signin')
    } catch (error) {
      return next(error)
    }
  }
}

module.exports = userController
