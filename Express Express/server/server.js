const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

let app = express();

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// app.get('/css/styles.css', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/css/styles.css'));
// });

// app.use((req, res, next) => {
//     fs.appendFileSync('log.txt', `${req.ulr}\n`);
//     next();
// });

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/formsubmissions', (req, res) => {
    let obj = {
        name: req.body.name,
        email: req.body.email
    };

    
})


// app.post('/contact-form', (req, res) => {
//     console.log(req.body.email);
//     console.log(req.body.name);
//     res.send("Thank you for submitting your contact form!")
// });

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3001);