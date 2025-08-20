import {Router} from 'express'

const router = Router()

router.get('/info', (_req, res) => {
    res.json({
        status: 'running',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        version: '1.0.0',
    })
})

export default router
