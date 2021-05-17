const app = require( './app');
const mongoose = require('mongoose');

require('dotenv').config();

const PORT = process.env.PORT || 9999;
const serverURI = 'http://localhost:' + PORT 
const mongoURI = 'mongodb+srv://Ayat:Hashimzaki82@cluster0.4dcsf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.listen(PORT, () => console.log('Weserver: ' + serverURI));

mongoose
.set('useCreateIndex', true)
.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log('connected to database'))