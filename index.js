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

let contacts = [
  {
    "name": "Arto Hellas",
    "number": "040-123456",
    "id": 1
  },
  {
    "name": "Ada Lovelace",
    "number": "39-44-5323523",
    "id": 2
  },
  {
    "name": "Dan Abramov",
    "number": "12-43-234345",
    "id": 3
  },
  {
    "name": "Mary Poppendieck",
    "number": "39-23-6423122",
    "id": 4
  },
  {
    "name": "Fake Name",
    "number": "091233321",
    "id": 5
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Nothing here</h1>')
})

app.get('/info', (req, res) => {
  res.send(`
    <p>Phonebook has info for ${contacts.length} people</p>
    <p>${new Date}</p>
  `)
})

/*
* API
*/
app.post('/api/persons', (req, res) => {
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
})

app.get('/api/persons', (req, res) => {
  Person.find({})
    .then(contacts => {
      res.json(contacts.map(contact => contact.toJSON()))
    })
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const contact = contacts.find(contact => contact.id === id)

  if (contact) {
    res.json(contact)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/persons/:id', (req, res) => {
  Person.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => {
      console.log(error)
    })
})
/*
* end of API
*/

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

function randomId(max) {
  return Math.floor(Math.random() * Math.floor(max))
}