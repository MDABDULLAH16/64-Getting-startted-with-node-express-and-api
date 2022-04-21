const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); //when req.body is undifind on cmd, then use midlequire-- app.use(express.json());//

app.get("/", (req, res) => {
    res.send("hello friends 22222sf");

});

const users = [
    { id: 1, name: 'sabana', email: 'sabana@gmail.com', phone: '017888888' },
    { id: 2, name: 'sabnur', email: 'sabnur@gmail.com', phone: '017888888' },
    { id: 3, name: 'shuchirita', email: 'shuchirita@gmail.com', phone: '017888888' },
    { id: 4, name: 'shuhana', email: 'shuhana@gmail.com', phone: '017888888' },
    { id: 5, name: 'sabila', email: 'sabila@gmail.com', phone: '017888888' },
    { id: 6, name: 'nabila', email: 'nabila@gmail.com', phone: '017888888' },
    { id: 7, name: 'kabila', email: 'kabila@gmail.com', phone: '017888888' },
]

app.get('/user', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);

    }
    res.send(users);
})

app.post('/user', (req, res) => {
    console.log('request', req.body) //when req.body is undifind on cmd then use midlequire-- app.use(express.json());//
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user);

})

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
})
app.listen(port, () => {
    console.log("loook mama this is terminal log", port);
});