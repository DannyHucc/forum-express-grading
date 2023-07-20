const { Restaurant } = require('../models')

const adminController = {
  getRestaurants: async (req, res, next) => {
    try {
      const restaurants = await Restaurant.findAll({ raw: true })
      return res.render('admin/restaurants', { restaurants })
    } catch (error) {
      return next(error)
    }
  },
  createRestaurant: async (req, res, next) => {
    try {
      return res.render('admin/create-restaurant')
    } catch (error) {
      return next(error)
    }
  },
  postRestaurant: async (req, res, next) => {
    try {
      const { name, tel, address, openingHours, description } = req.body
      if (!name) throw new Error('Restaurant name is required!')

      await Restaurant.create({
        name,
        tel,
        address,
        openingHours,
        description
      })

      req.flash('success_messages', 'restaurant was successfully created')
      return res.redirect('/admin/restaurants')
    } catch (error) {
      return next(error)
    }
  },
  getRestaurant: async (req, res, next) => {
    try {
      const restaurant = await Restaurant.findByPk(req.params.id, { raw: true })
      if (!restaurant) throw new Error("Restaurant didn't exist!")

      return res.render('admin/restaurant', { restaurant })
    } catch (error) {
      return next(error)
    }
  },
  editRestaurant: async (req, res, next) => {
    try {
      const restaurant = await Restaurant.findByPk(req.params.id, { raw: true })
      if (!restaurant) throw new Error("Restaurant didn't exist!")

      return res.render('admin/edit-restaurant', { restaurant })
    } catch (error) {
      return next(error)
    }
  },
  putRestaurant: async (req, res, next) => {
    try {
      const { name, tel, address, openingHours, description } = req.body
      if (!name) throw new Error('Restaurant name is required!')

      const restaurant = await Restaurant.findByPk(req.params.id)
      if (!restaurant) throw new Error("Restaurant didn't exist!")

      await restaurant.update({
        name,
        tel,
        address,
        openingHours,
        description
      })

      req.flash('success_messages', 'restaurant was successfully to update')
      return res.redirect('/admin/restaurants')
    } catch (error) {
      return next(error)
    }
  },
  deleteRestaurant: async (req, res, next) => {
    try {
      const restaurant = await Restaurant.findByPk(req.params.id)
      if (!restaurant) throw new Error("Restaurant didn't exist!")

      await restaurant.destroy()
      return res.redirect('/admin/restaurants')
    } catch (error) {
      return next(error)
    }
  }
}

module.exports = adminController
