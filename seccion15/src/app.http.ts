import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        const htmlfile = fs.readFileSync('./public/index.html', 'utf-8');
        res.writeHead(200, { 'Content-type' : 'text/html' });
        res.end(htmlfile);
        return;
    }

    if(req.url?.endsWith('.js')){
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
    } else if(req.url?.endsWith('.css')){
        res.writeHead(200, { 'Content-Type': 'text/css' });
    }

    try {
        const responseContent = fs.readFileSync(`./public${req.url}`,'utf-8');
        res.end(responseContent);
    } catch (error) { 
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end();
    }
});

server.listen(8080, () => {
    console.log('Server running on port 8080');
});