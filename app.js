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
    res.header('Access-Control-Allow-Origin', '$http_origin');
    next();
});        

app.use(cors());
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
