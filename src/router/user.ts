import express, { Router } from 'express';
import UserController from '../controller/user-controller';

const router: Router = express.Router();
const controller =  new UserController();

router.get('/', controller.getUserList)
router.get('/:id', controller.getUserById)
router.post('/create', controller.createUser)
router.patch('/update/:id', controller.updateUser)
router.delete('/delete/:id', controller.deleteUser)

export default router