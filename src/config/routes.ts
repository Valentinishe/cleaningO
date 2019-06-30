import { Router } from 'express';
import { getUsers, postUser, getUser, putUser, deleteUser } from '@Controllers/Users';
import { onValidation } from '@Utils/validationHelper';
import { 
  createUserValidationMap, 
  getUsersValidationMap,
  getUserValidationMap,
  deleteUserValidationMap,
  updateUserValidationMap
} from '@Validations/Users';


const router = Router();

router.route('/users')
  .get(onValidation(getUsersValidationMap), getUsers)
  .post(onValidation(createUserValidationMap), postUser);

router.route('/user/:id')
  .get(onValidation(getUserValidationMap), getUser)
  .put(onValidation(updateUserValidationMap),putUser)
  .delete(onValidation(deleteUserValidationMap), deleteUser);

export default router;