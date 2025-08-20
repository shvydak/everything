import {Request, Response} from 'express'
import {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    getUserByEmail,
} from '@/services/userService'

export const registerUser = async (req: Request, res: Response) => {
    try {
        const userData = req.body
        const user = await createUser(userData)
        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            data: user,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Registration failed',
            message: error instanceof Error ? error.message : 'Unknown error',
        })
    }
}

export const getAllUsersHandler = async (_req: Request, res: Response) => {
    try {
        const users = await getAllUsers()
        res.status(200).json({
            success: true,
            message: 'Users fetched successfully',
            data: users,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to fetch users',
            message: error instanceof Error ? error.message : 'Unknown error',
        })
    }
}

export const getUserByIdHandler = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const user = await getUserById(id as string)

        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found',
            })
        }

        return res.status(200).json({
            success: true,
            message: 'User fetched successfully',
            data: user,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Failed to fetch user',
            message: error instanceof Error ? error.message : 'Unknown error',
        })
    }
}

export const getUserByEmailHandler = async (req: Request, res: Response) => {
    try {
        const {email} = req.params
        const user = await getUserByEmail(email as string)
        res.status(200).json({
            success: true,
            message: 'User fetched successfully',
            data: user,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to fetch user',
            message: error instanceof Error ? error.message : 'Unknown error',
        })
    }
}

export const updateUserHandler = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const userData = req.body
        const user = await updateUser(id as string, userData)
        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            data: user,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to update user',
            message: error instanceof Error ? error.message : 'Unknown error',
        })
    }
}

export const deleteUserHandler = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const user = await deleteUser(id as string)
        res.status(200).json({
            success: true,
            message: 'User deleted successfully',
            data: user,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to delete user',
            message: error instanceof Error ? error.message : 'Unknown error',
        })
    }
}
