const express = require('express');
const request = require('request');
var cors = require('cors');    
const router = require('./router')
const app = express();

app.use(express.static('public'))
app.set('views','views')
app.set('view engine', 'ejs')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");    
    next();
});        

const corsOptions = {
    origin: [
        '*',
        'localhost:5600',
        'http://localhost:5600',
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
