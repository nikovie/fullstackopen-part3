require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const Person = require('./models/person')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

morgan.token('body', function (req, res) {
  if (req.method === "POST") {
    return JSON.stringify(req.body)
  }
})
app.use(morgan(':method :url :status :response-time ms :body'))

app.get('/', (req, res) => {
  res.send('<h1>Nothing here</h1>')
})

app.get('/info', async (req, res) => {
  const contacts = await Person.find({})

  res.send(`
    <p>Phonebook has info for ${contacts.length} people</p>
    <p>${new Date}</p>
  `)
})

/*
* API
*/
app.post('/api/persons', (req, res, next) => {
  const body = req.body
  // console.log(body)

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: 'required fields missing'
    })
  }

  const person = new Person({
    "name": body.name,
    "number": body.number,
    "id": randomId(999)
  })

  person.save().then(savedPerson => {
    res.json(savedPerson)
  })
  .catch(error => next(error))
})

app.get('/api/persons', (req, res, next) => {
  Person.find({})
    .then(contacts => {
      res.json(contacts.map(contact => contact.toJSON()))
    })
    .catch(error => next(error))
})

app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then(person => {
      if (person) {
        res.json(person.toJSON())
      } else {
        res.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
  const body = req.body
  // console.log(body)

  const person = {
    number: body.number,
  }

  Person.findByIdAndUpdate(req.params.id, person, { new: true })
    .then(updatedPerson => {
      res.json(updatedPerson.toJSON())
    })
    .catch(error => next(error))
})


app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error))
})
/*
* end of API
*/

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'Oops, unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) => {
  console.log(error)

  console.error(error.message)

  if (error.name === 'CastError' && error.kind == 'ObjectId') {
    return res.status(400).send({ error: 'Oops, requested id not found' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

function randomId(max) {
  return Math.floor(Math.random() * Math.floor(max))
}