import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();

// MVC 
// Model
// Views
// Controllers

// Controller
// index, show, create, update, delete

// to find registered orphanages
routes.get('/orphanages', OrphanagesController.index);
// to find one registered orphanage
routes.get('/orphanages/:id', OrphanagesController.show);
// to register orphanages
routes.post('/orphanages', OrphanagesController.create);

export default routes;