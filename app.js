const express = require('express');
const { createCanvas } = require('canvas');

const app = express();

app.get('/api/dynamic-image', (req, res) => {
    const username = req.query.username || 'Visitor';
    const theme = req.query.theme || 'light';

    // 创建画布
    const canvas = createCanvas(800, 200);
    const ctx = canvas.getContext('2d');

    // 设置背景颜色
    ctx.fillStyle = theme === 'dark' ? '#333' : '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 设置文本
    ctx.fillStyle = '#000';
    ctx.font = '30px Arial';
    ctx.fillText(`Hello, ${username}!`, 50, 100);

    // 生成图片并返回
    res.setHeader('Content-Type', 'image/png');
    canvas.createPNGStream().pipe(res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
