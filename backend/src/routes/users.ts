import {Router} from 'express'
import {
    registerUser,
    getAllUsersHandler,
    getUserByIdHandler,
    updateUserHandler,
    deleteUserHandler,
    getUserByEmailHandler,
    loginUser,
} from '../controllers/userController'
import {authenticate} from '@/middleware/auth'

const router = Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/', authenticate, getAllUsersHandler)
router.get('/:id', authenticate, getUserByIdHandler)
router.get('/email/:email', authenticate, getUserByEmailHandler)
router.put('/:id', authenticate, updateUserHandler)
router.delete('/:id', authenticate, deleteUserHandler)

export default router
