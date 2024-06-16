import express from 'express';
import { StudentControllers } from './student-controller';

const router = express.Router();

// will call controller func

router.get('/', StudentControllers.getAllStudent);
router.get('/:id', StudentControllers.getSingleStudent);
router.delete('/:id', StudentControllers.deleteStudent);
router.patch('/:id', StudentControllers.updateStudent);

export const StudentRoutes = router;
