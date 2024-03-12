import express from 'express';
import log from '@ajar/marker';
import morgan from 'morgan';
import bodyParser from "body-parser";


const { PORT, HOST } = process.env;

// console.log(process.env);

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan("dev"));


// app.get('/',  (req, res, next) => {
//     res.status(200).send('Hello Express!')
// });

// app.get('/users', (req, res, next) => {
//     res.status(200).send('Get all Users')
// });

// app.get("/sharks", (req, res, next) => {
//     const {species, clases, family} = req.query;
//     res.status(200).send(`species: ${species}, clases: ${clases}, family: ${family}`)
// });

// app.get("/fish/:name", (req, res, next) => {
//     res.status(200).send(req.params.name)
// });

// app.post("/series", (req, res, next) => {
//     res.status(200).send(req.body.name)
// });

app.get("/", (req, res, next) => {
    const markup = `<h1>hola</h1>
                    <p>this exercise is boring</p>`
    res.status(200).set("Content-Type", "text/html").send(markup)
});

app.use((req, res, next) => {
    res.status(404).send(`404 ${req.url} was not found`)
});





// '/search?food=burger&town=ashdod'


app.listen(PORT, HOST,  ()=> {
    log.magenta(`🌎  listening on`,`http://${HOST}:${PORT}`);
});


//------------------------------------------
//         Express Echo Server
//------------------------------------------
/*
### Challenge instructions

1. Install the `morgan` 3rd party middleware  
use the middleware in your app:  
         `app.use( morgan('dev') );`

2.  Define more routing functions that use
    - `req.query` - access the querystring part of the request url
    - `req.params` - access dynamic parts of the url
    - `req.body` - access the request body of a **POST** request
        
        in each routing function you want to pass some values to the server from the client
        and echo those back in the server response

3. return api json response
4. return html markup response
5. return 404 status with a custom response to unsupported routes


*/
