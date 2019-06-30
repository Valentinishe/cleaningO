const serverless = require('serverless-http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

import routes from '@config/routes';
import DB from '@Services/PostgresSQL';

DB.init();



const app = express();


// copy the incoming body into a Buffer instead of JSON.parse
app.use(bodyParser.raw({ type: 'application/json' }));
// parse body params and attache them to req.body
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.urlencoded({ extended: true }));

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

app.use('/', routes);




module.exports.handler = serverless(app);