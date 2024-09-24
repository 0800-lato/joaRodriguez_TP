const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => res.sendFile(path.join(__dirname,'views','home.html')))
app.get('/admin', (req,res) => res.sendFile(path.join(__dirname,'views','admin.html')))
app.get('/login', (req,res) => res.sendFile(path.join(__dirname,'views','login.html')))
app.get('/productos-detail', (req,res) => res.sendFile(path.join(__dirname,'views','product-detail.html')))
app.get('/productos', (req,res) => res.sendFile(path.join(__dirname,'views','productos.html')))
app.get('/profile', (req,res) => res.sendFile(path.join(__dirname,'views','profile.html')))
app.get('/register', (req,res) => res.sendFile(path.join(__dirname,'views','register.html')))

app.listen(PORT, () => `Servidor corriendo en http://localhost:${PORT}`);