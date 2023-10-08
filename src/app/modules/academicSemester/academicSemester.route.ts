import express from 'express';
// import { UserController } from './users.controller';
import { RequestValidation } from '../../middleWares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.post(
  '/createSemester',
  RequestValidation.validateRequest(
    AcademicSemesterValidation.createAcademicSemesterZodSchema
  ),
  AcademicSemesterController.createSemester
);
router.get('/', AcademicSemesterController.getAllSemesters);

export const AcademicSemesterRoutes = router;
