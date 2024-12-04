const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "UPDATE"],
    allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
    exposedHeaders: ["*", "Authorization"]
}))

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'photoblog'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
    console.log('Hello, World!');
});

app.post('/', (req, res) => {
    res.send('Hello, World!');
    console.log('Hello, World!');
});

app.get('/packs', (req, res) => {
    db.query('SELECT * FROM packs', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/packs/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM packs WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});


app.post('/packs', (req, res) => {
    const { title, price, photos } = req.body;
    db.query('INSERT INTO packs (title, price, photos) VALUES (?, ?, ?)', [title, price, photos], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Se agrego correctamente el paquete', id: result.insertId });
    });
});

// Eliminar elemento
app.delete('/packs/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM packs WHERE id = ?', [id], (err) => {
        if (err) throw err;
        res.json({ message: 'Elemeto eliminado correctamente' });
    });
});

app.put('/packs/:id', (req, res) => {
    const { id } = req.params;
    const { title, price, photos } = req.body;
    db.query('Update packs SET title = ?, price = ?, photos = ? WHERE id = ?', [title, price, photos, id], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Elemento actualizado correctamente', id: results.insertId });
    });
});
