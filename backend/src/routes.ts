import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload'
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

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
// to register orphanages and upload images
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;