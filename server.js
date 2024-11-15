const express = require('express')
const cors = require('cors')
const app = express();


//const todosRouter = require('./routes/todos');

// set Application PORT
const port = 5000;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
res.send('Hello World');
})

//app.use('/api/todos', todosRouter);


app.listen(port, () =>{
    console.log('aplikasi telah berjalan pada http://localhost:' + port);
})