const express = require('express')
const router = express.Router()

const {
  getAllMoviesWithGivenDate,
  getAllMoviesFromTheatre,
  createTicket,
  validateTicket,
} = require('../controllers/cinema')


router.route('/where_movie').get(getAllMoviesWithGivenDate)
router.route('/which_movie').get(getAllMoviesFromTheatre)
router.route('/purchase_ticket').post(createTicket)
router.route('/ticket_validation').get(validateTicket)

module.exports = router
