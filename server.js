const express = require('express')
const cors = require('cors')
const app = express();


//const todosRouter = require('./routes/todos');
const halamanutamarouter = require('./routes/halamanutama.js')
const petarouter = require('./routes/peta.js')
const tipsrouter = require('./routes/tips.js')
const kalkulatorrouters = require('./routes/kalkulator.js')
// set Application PORT
const port = 5000;


app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get('/', (req, res) => {
res.send('Hello World');
})

//app.use('/api/todos', todosRouter);
app.use('/halamanutama',halamanutamarouter)
app.use('/peta',petarouter)
app.use('/tips',tipsrouter)
app.use('/kalkulator',kalkulatorrouters)
app.listen(port, () =>{
    console.log('aplikasi telah berjalan pada http://localhost:' + port);
})