// backend > request and response
//               REQ  /  RES

// ----- HTTP methods = GET, POST, PUT, DELETE -----
// GET    > (search) requests a representation of the specified resource
// POST   > (create) submit an entity to the specified resource
// PUT    > (update) replaces all current representations of the target resource
// DELETE > (delete) deletes the specified resource


import express from 'express';

const app = express();

// resource = users ----------------------------------
// HTTP method = GET ---------------------------------
// <route> -------------------------------------------
app.get('/users', (request, response) => {
    // console.log('teste');
    // return response.send('Hello World');
    return response.json({ message: "Hello World" });
});
// </route> ------------------------------------------
// http://localhost:3333/users
// ---------------------------------------------------

// port -----------
app.listen(3333);
// localhost:3333
// ----------------