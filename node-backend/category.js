const express = require('express')
const app = express()
app.use(express.json())

const categories = [ {id: 1, name: "Men"}, {id: 2, name: "Women"} ]

app.get('/',(req,res) => {
  res.send('Welcome To New Shoe Store Database')
})

app.get('/categories', (req,res) => {
  res.send(categories)
})

app.get('/categories/:id', (req,res) => {
  let category = categories.find(category => category.id === parseInt(req.params.id))
  if (!category) {
    return res.status(404).send('The category given ID not found.')
  }
  res.send(category)
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})

export default categories