const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser')

const jsonParser = bodyParser.json();

const app = express();

app.use(cors());

const port = 8000;

let categories = [
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



app.get('/categories', jsonParser, (req, res) => {
    res.status(200);
    res.json(categories);
});
app.get('/categories/:id', (req, res) => {
    const { id } = request.params;
    let category = null;
    for (const row of categories) {
        if (id == row.id) {
            category = row;
            break;
        }
    }
    response.json(category);
});

let nextCatId = categories.length

app.delete('/categories/:id', (req, res) => {
    const { id } = req.params;
    categories = categories.filter((row) => row.id !== id);
    res.json(id);
});

app.post('/categories', (req, res) => {
    const { name } = req.body;
    const newCategory = { id: nextCatId++, name }
    categories.push(newCategory);
    res.send(newCategory);
})


app.listen(port, () => {
    console.log('http://localhost:' + port)
});