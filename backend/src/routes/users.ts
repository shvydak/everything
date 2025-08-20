import {Router} from 'express'
import {
    loginUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getUserById,
    registerUser,
} from '../controllers/userController'

const router = Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router
