const express = require('express')
const app = express()
const path = require('path')
app.listen(3000, () => {
    console.log("App is listening on port 3000")
})
app.get('/about', (req, res) => {
        res.sendFile(path.resolve(_dirname, 'about.html'))
    })
    // const homePage = fs.readFileSync('index.html')
    // const aboutPage = fs.readFileSync('about.html')
    // const contactPage = fs.readFileSync('contact.html')
    // const notFoundPage = fs.readFileSync('notFound.html')

// //const server = http.createServer((req, res) => {
// if (req.url === '/about')
//     res.end(aboutPage)
// else if (req.url === '/contact')
//     res.end(contactPage)
// else if (req.url === '/')
//     res.end(homePage)
// else {
//     res.writeHead(404)
//     res.end(notFoundPage)
// }
//})
// server.listen(3000)
// console.log('Sever listening on port 3000')