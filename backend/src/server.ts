// backend > request and response
// REQ / RES

import express from 'express';

const app = express();

// http://localhost:3333/users
app.get('/users', (request, response) => {
    // console.log('teste');
    // return response.send('Hello World');
    return response.json({ message: "Hello World" });
});

// localhost:3333
app.listen(3333);