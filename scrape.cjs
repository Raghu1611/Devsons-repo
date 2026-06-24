const fs = require('fs');
const path = require('path');

const filePath = 'C:\\Users\\DHANUNJAI\\.gemini\\antigravity-ide\\brain\\7b227b3f-dea8-4853-a420-1d783cd56ef6\\.system_generated\\steps\\136\\content.md';
const data = fs.readFileSync(filePath, 'utf8');

const regex = /https:\/\/burgerandsauce\.com\/wp-content\/uploads\/[^"\s'<>]+?\.(?:jpg|jpeg|png|webp|svg)/gi;
const matches = [...new Set(data.match(regex))];
fs.writeFileSync('urls.json', JSON.stringify(matches, null, 2));
console.log('Saved ' + matches.length + ' URLs to urls.json');
