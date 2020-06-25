// import {categories}  from './category.js'
const express = require('express')
const app = express()
app.use(express.json())

const shoes = [
  {id: 1, name: "Air Max 97", brand: "Nike", cost: 100, 
    image: "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/5fbf43fd-5f24-47c9-af84-3853ce213fa0/air-max-97-womens-shoe-Fkhxqj.jpg", 
    category: categories[0]
  }
]

app.get('/',(req,res) => {
  res.send('Welcome To New Shoe Store Database')
})

app.get('/shoes', (req,res) => {
  res.send(shoes)
})

app.get('/shoes/:id', (req,res) => {
  let shoe = shoes.find(shoe => shoe.id === parseInt(req.params.id))
  if (!shoe) {
    return res.status(404).send('The shoe given ID not found.')
  }
  res.send(shoe)
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})

export default shoes