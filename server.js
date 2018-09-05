const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const bcryptjs = require('bcryptjs')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const multer = require('multer')
const fs = require('fs')

var upload = multer({dest: 'public/uploads'})

app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({limit: '2mb'}))
app.use(cors())
app.use(cookieParser())
app.use(morgan('dev'))



app.get('*', (req, res, next) => {
			res.redirect('/#' + req.originalUrl)
		})

app.listen(8080, () => {
	console.log('Сервер слушает порт 8080');
})

