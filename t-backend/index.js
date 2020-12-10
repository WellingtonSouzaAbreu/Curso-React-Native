const app = require('express')()
const db = require('./config/db.js')
const consign = require('consign')

app.db = db


consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => console.log('Server running in port 3000...'))