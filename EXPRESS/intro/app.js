const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());

const port = 8000;

const categories = [
    {
        id: 1,
        name: 'History'
    },
    {
        id: 2,
        name: 'Technology'
    },
    {
        id: 3,
        name: 'Photo'
    },
]



app.get('/categories', (request, response) => {
    response.status(200);
    response.json(categories);
});
app.get('/a', (request, response) => {
    response.json(100);
});

app.listen(port, () => {
    console.log('http://localhost' + port)
});