// backend > request and response
//               REQ  /  RES

import express from 'express';

const app = express();

// resource = users ----------------------------------
// route: --------------------------------------------
app.get('/users', (request, response) => {
    // console.log('teste');
    // return response.send('Hello World');
    return response.json({ message: "Hello World" });
});
// http://localhost:3333/users
// ---------------------------------------------------

// port -----------
app.listen(3333);
// localhost:3333
// ----------------