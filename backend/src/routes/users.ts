import {Router} from 'express'
import {
    registerUser,
    getAllUsersHandler,
    getUserByIdHandler,
    updateUserHandler,
    deleteUserHandler,
    getUserByEmailHandler,
} from '../controllers/userController'

const router = Router()

router.post('/register', registerUser)
router.get('/', getAllUsersHandler)
router.get('/:id', getUserByIdHandler)
router.get('/:email', getUserByEmailHandler)
router.put('/:id', updateUserHandler)
router.delete('/:id', deleteUserHandler)

export default router
