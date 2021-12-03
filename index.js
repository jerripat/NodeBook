const http = require('http')
import { readFileSync, writeFileSync } from 'fs'
const homePage = readFileSync('index.html')
const aboutPage = readFileSync('about.html')
const contactPage = writeFileSync('contact.html')
const pageNotFound = writeFileSync('pageNotFound')

const server = createServer((req, res) => {
    if (req.url === '/about')
        res.end(aboutPage)
    else if (req.url === '/contact')
        res.end(contactPage)
    else if (req.url === '/')
        res.end(homePage)
    else {
        res.writeHead(404)
        res.end('pageNotFound')
    }
})
server.listen(3000)
console.log('The server is listening on port 3000')