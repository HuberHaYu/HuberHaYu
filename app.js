const express = require('express');
const { createCanvas } = require('canvas');

const app = express();

app.get('/api/dynamic-image', (req, res) => {
    const username = req.query.username || 'Visitor';
    const theme = req.query.theme || 'light';

    const canvas = createCanvas(800, 200);
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = theme === 'dark' ? '#333' : '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#000';
    ctx.font = '30px Arial';
    ctx.fillText(`Hello, ${username}!`, 50, 100);

    res.setHeader('Content-Type', 'image/png');
    canvas.createPNGStream().pipe(res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
