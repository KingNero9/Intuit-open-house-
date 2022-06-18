const mongoose = require('mongoose')

const CinemaSchema = new mongoose.Schema({
  movie: {
    name: {
      type: String,
      required: [true, 'must provide name'],
      maxlength: [20, 'name can not be more than 20 characters'],
    },
    theatre: {
      type: Array,
      required: [true, 'must provide name'],
      maxlength: [20, 'name can not be more than 20 characters'],
    },
    date: {
      type: Date,
      required: [true, 'must provide date']
    }
  },
})

const TicketSchema = new mongoose.Schema({
  ticket: {
    payment_details: String,
    valid: Boolean
  }, 
})

module.exports = mongoose.model('Cinema', CinemaSchema)
module.exports = mongoose.model('Ticket', TicketSchema)
