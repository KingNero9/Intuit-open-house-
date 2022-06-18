const Cinema = require('../models/Cinema');
const { createCustomError } = require('../errors/custom-error')


const getAllMoviesWithGivenDate = async (req, res) => {// '/where_movie'
  const { name, date, theatre } = req.params;
  const queryObject = {};
  if (queryObject.date === date) {
    return res.status(200).send(`The movie with the name: ${name} on the date: ${date} is shown in the theatres: ${theatre}`)
  }
  if (!date) {
    return next(createCustomError(`No movie with date : ${date}`, 200))
  }
}


const getAllMoviesFromTheatre = async (req, res) => { // 'which_movie'
  const { name, date, theatre } = req.query;
  const queryObject = {};
  if (queryObject.date === date) {
    return res.status(200).send(`The movie with the name: ${name} on the date: ${date} is shown in the theatres: ${theatre}`)
  }
  if (!date) {
    return next(createCustomError(`No movie in theatre : ${theatre}`, 404))
  }
}

const createTicket = async (req, res) => { // 'purchase_ticket'
  const ticket = await Cinema.create(req.body);
  return res.status(201).send(`New ticket has been created ${ticket}`)
}

const validateTicket = async (req, res, next) => { // 'ticket_validation'
  const { payment_details } = req.query;
  if (payment_details.not().isEmpty()) {
    return res.status(201).send(`Ticket is valid`)
  }
}


module.exports = {
  getAllMoviesWithGivenDate,
  getAllMoviesFromTheatre,
  createTicket,
  validateTicket,
}

