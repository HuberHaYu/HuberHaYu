const { createCanvas } = require('canvas');
const fs = require('fs');

const generateImage = (username = 'DefaultUser', theme = 'light') => {
    const width = 800;
    const height = 200;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Set background
    ctx.fillStyle = theme === 'dark' ? '#333' : '#fff';
    ctx.fillRect(0, 0, width, height);

    // Set text
    ctx.fillStyle = theme === 'dark' ? '#fff' : '#000';
    ctx.font = '30px Arial';
    ctx.fillText(`Hello, ${username}`, 50, 100);

    // Save image to file
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync('./output/hello.png', buffer);
    console.log('Image generated successfully!');
};

// 获取环境变量
const username = process.env.USERNAME || 'Anonymous';
const theme = process.env.THEME || 'light';
generateImage(username, theme);
