const express = require('express');
const request = require('request');
const router = require('./router')
var cors = require('cors');    
const app = express();

app.use(express.static('public'))
app.set('views','views')
app.set('view engine', 'ejs')

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.Header('Access-Control-Allow-Origin', 'https://get--media.herokuapp.com');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE"); 
    next();
});        

const corsOptions = {
    origin: [
        '*',
        'http://localhost:5600',
        'https://get--media.herokuapp.com',
        'https://get--media.herokuapp.com/',
        'get--media.herokuapp.com',
        'get--media.herokuapp.com/',
        'https://git.heroku.com/get--media.git',
        'git.heroku.com/get--media.git'
    ],
    credentials: true,
}

app.use(cors(corsOptions));
app.use('/', router);

// app.get('/', (req, res) => {
//     request(
//       {url: 'http://itunes.apple.com/search?term=lew&entity=album' },
//       (error, response, body) => {
//         if (error || response.statusCode !== 200) {
//           return res.status(500).json({ type: 'error', message: err.message });
//         }
//         res.json(JSON.parse(body));
//       }
//     )
//   });

const PORT = process.env.PORT || 5600;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
