import express from 'express';
import {
  signupAdmin,
  loginAdmin,
  getAllAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
} from '../controllers/admin-controller.js';

const adminRouter = express.Router();

adminRouter.post('/signup', signupAdmin);
adminRouter.post('/login', loginAdmin);
adminRouter.get('/', getAllAdmins);
adminRouter.get('/:id', getAdminById);
adminRouter.patch('/:id', updateAdmin);
adminRouter.delete('/:id', deleteAdmin);

export default adminRouter;

