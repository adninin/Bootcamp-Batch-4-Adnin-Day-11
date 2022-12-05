//Require express
const express = require('express')

const app = express()
const port = 3000

//Require view engine ejs
app.set('view engine', 'ejs')

//Menghubungkan ke index html (tampilan awal)
app.get('/', (req, res) => {
  res.render('index', 
  //value yang dikirim ke index.ejs
  { nama: 'Anin', 
  title: 'Home Page'}) 
})

//Menghubungkan ke about.html
app.get('/about', (req, res) => {
  res.render('about')

})

//Menghubungkan ke contact html
app.get('/contact', (req, res) => {
  res.render('contact')

})

app.get('/product/:id', (req, res) => {
  res.send(`product id : ${req.params.id} <br> category id : ${req.query.category}`)
})

app.use('/', (req, res) => {
  res.status(404)
  res.send('Error : Page not found!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})