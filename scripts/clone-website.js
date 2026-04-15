import fs from 'fs';
import path from 'path';
import https from 'https';

const url = 'https://www.dpi360.com.tw/';
const outputDir = path.join(process.cwd(), 'public', 'dpi360_clone');
const outputHtml = path.join(process.cwd(), 'dpi360_raw.html');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

function download(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
}

async function scrape() {
    console.log(`Fetching ${url}...`);
    https.get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () => {
            fs.writeFileSync(outputHtml, data);
            console.log(`Saved raw HTML to ${outputHtml}`);

            // Simple regex to extract image URLs
            const imgRegex = /<img[^>]+src="([^">]+)"/g;
            let match;
            const images = [];
            while ((match = imgRegex.exec(data)) !== null) {
                let imgSrc = match[1];
                if (imgSrc.startsWith('/')) {
                    imgSrc = 'https://www.dpi360.com.tw' + imgSrc;
                } else if (!imgSrc.startsWith('http')) {
                    imgSrc = 'https://www.dpi360.com.tw/' + imgSrc;
                }
                images.push(imgSrc);
            }

            const cssRegex = /<link[^>]+href="([^">]+\.css[^">]*)"/g;
            const cssFiles = [];
            while ((match = cssRegex.exec(data)) !== null) {
                let cssSrc = match[1];
                if (cssSrc.startsWith('/')) {
                    cssSrc = 'https://www.dpi360.com.tw' + cssSrc;
                } else if (!cssSrc.startsWith('http')) {
                    cssSrc = 'https://www.dpi360.com.tw/' + cssSrc;
                }
                cssFiles.push(cssSrc);
            }

            console.log('Found images:', images.length);
            console.log('Found CSS:', cssFiles.length);
            fs.writeFileSync('dpi360_assets.json', JSON.stringify({ images, cssFiles }, null, 2));
        });
    });
}

scrape();
