const express = require('express')
const path = require('path');
const exhbs= require('express-handlebars');
const port = 3000;
const app = express()

app.engine('handlebars', exhbs.engine());
app.set('view engine', 'handlebars');
// app.set('views', './views');

app.use(express.static( path.join(__dirname, 'static')));
//Middleware : -IDK completely what is it but i thing it is a middleware.
app.use('/', require(path.join(__dirname, 'routes/additional.js')));





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
