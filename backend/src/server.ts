// backend > request and response
//               REQ  /  RES

// ----- HTTP methods = GET, POST, PUT, DELETE -------
// GET    > (search) requests a representation of the specified resource
// POST   > (create) submit an entity to the specified resource
// PUT    > (update) replaces all current representations of the target resource
// DELETE > (delete) deletes the specified resource
// * when you try to access some website or website resource using a browser, you are using the GET method
// e.g.
// https://rocketseat.com.br/
// https://rocketseat.com.br/copyright
// * when you need to test the POST, PUT, DELETE methods, you can use an API tester
// e.g.
// https://insomnia.rest/
// https://www.postman.com/
// ---------------------------------------------------

import express from 'express';
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';

import './database/connection';

const app = express();

// to turn Express able to understand JSON
app.use(express.json());

app.post('/orphanages', async (request, response) => {
    // console.log(request.body);
    const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
          } = request.body;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
    });

    await orphanagesRepository.save(orphanage);

    return response.json({ message: "Dados gravados!" });
});
// resource = users ----------------------------------
// HTTP method = GET ---------------------------------
// <route> -------------------------------------------
// app.get('/users', (request, response) => {
//     // console.log('teste');
//     // return response.send('Hello World');
//     return response.json({ message: "Hello World" });
// });
// </route> ------------------------------------------
// http://localhost:3333/users
// ---------------------------------------------------

// ----- Parameters: -----
//
// Query Params: http://localhost:3333/users?search=diego (parameter "?search=diego")
// app.post('/users', (request, response) => {
//     console.log(request.query);  // using insomnia > http://localhost:3333/users?search=diego
//     return response.json({ message: "Hello World" });
// });
//
// Route Params: http://localhost:3333/users/1 (used to identify a resource)
// Body        : The POST request method requests that a web server accepts the data enclosed in the body of the request message
// app.post('/users/:id', (request, response) => {
//     console.log(request.params); // using insomnia > http://localhost:3333/users/1
//     console.log(request.body);   // using insomnia > http://localhost:3333/users/1 > text JSON: { "name": "Diego Fernandes" }

//     return response.json({ message: "Hello World" });
// });
//

// app.post('/users', (request, response) => {
//     console.log(request.params); // using insomnia > http://localhost:3333/users/1
//     // 

//     return response.json({ message: "Hello World" });
// });

// port -----------
app.listen(3333);
// localhost:3333
// ----------------


// Database

// native driver (e.g. slite3.query('SELECT * FROM users'))
// or
// query builder (http://knexjs.org/ > e.g. knex('users').select('*').where('name', 'Diego'))
// or
// ORM (table "users" = class "User")

// create tables using "database migrations"