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



app.get('/categories', (req, res) => {
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

app.delete('/categories/:id', jsonParser, (req, res) => {
    const { id } = req.params;
    categories = categories.filter((row) => row.id !== id);
    res.json(id);
});

app.post('/categories', jsonParser, (req, res) => {
    const { name } = req.body;
    const newCategory = { id: nextCatId++, name }
    categories.push(newCategory);
    res.send(newCategory);
});

app.put('/categories/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body
    const index = categories.findIndex((item) => item.id === Number(id));
    if (index === -2) {
        res.status(400).json('Bad request')
    } else {
        const updatedCategory = categories[index];
        categories[index] = updatedCategory;
        res.json(updatedCategory)
    }

});

app.listen(port, () => {
    console.log('http://localhost:' + port)
});