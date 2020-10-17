import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();

// MVC 
// Model
// Views
// Controllers

// Controller
// index, show, create, update, delete

// to register orphanages
routes.post('/orphanages', OrphanagesController.create);
// to find registered orphanages
routes.get('/orphanages', OrphanagesController.index);

export default routes;