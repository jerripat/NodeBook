const http = require('http')
const fs = require('fs')
const express = require('express')
const homePage = fs.readFileSync('index.html')
const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const notFoundPage = fs.readFileSync('notFound.html')

const server = http.createServer((req, res) => {
    if (req.url === '/about')
        res.end(aboutPage)
    else if (req.url === '/contact')
        res.end(contactPage)
    else if (req.url === '/')
        res.end(homePage)
    else {
        res.writeHead(404)
        res.end(notFoundPage)
    }
})
server.listen(3000)
console.log('Sever listening on port 3000')