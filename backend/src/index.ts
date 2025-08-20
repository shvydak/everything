import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'

// Import configurations and utilities
import {serverConfig, rateLimitConfig} from '@/config'
import {databaseConnection} from '@/utils/database'
import {redisConnection} from '@/utils/redis'

// Import middleware
import {errorHandler, notFoundHandler} from '@/middleware/errorHandler'

import infoRoutes from '@/routes/info'
// Import routes (we'll create these next)
// import authRoutes from '@/routes/auth';
// import userRoutes from '@/routes/users';

/**
 * Express application class
 * Handles server setup, middleware configuration, and graceful shutdown
 */
class App {
    public app: express.Application

    constructor() {
        this.app = express()
        this.initializeMiddlewares()
        this.initializeRoutes()
        this.initializeErrorHandling()
    }

    /**
     * Initialize all middleware
     */
    private initializeMiddlewares(): void {
        // Security middleware
        this.app.use(
            helmet({
                contentSecurityPolicy: {
                    directives: {
                        defaultSrc: ["'self'"],
                        styleSrc: ["'self'", "'unsafe-inline'"],
                        scriptSrc: ["'self'"],
                        imgSrc: ["'self'", 'data:', 'https:'],
                    },
                },
            })
        )

        // CORS configuration
        this.app.use(
            cors({
                origin: serverConfig.corsOrigin,
                credentials: true,
                methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
                allowedHeaders: ['Content-Type', 'Authorization'],
            })
        )

        // Rate limiting
        this.app.use(
            rateLimit({
                windowMs: rateLimitConfig.windowMs,
                max: rateLimitConfig.max,
                message: {
                    success: false,
                    error: 'Too many requests from this IP, please try again later.',
                },
                standardHeaders: true,
                legacyHeaders: false,
            })
        )

        // Compression middleware - temporarily disabled due to type conflicts
        // this.app.use(compression());

        // Logging middleware
        if (serverConfig.nodeEnv === 'development') {
            this.app.use(morgan('dev'))
        } else {
            this.app.use(morgan('combined'))
        }

        // Body parsing middleware
        this.app.use(express.json({limit: '10mb'}))
        this.app.use(express.urlencoded({extended: true, limit: '10mb'}))

        // Request logging for debugging
        this.app.use((req, _res, next) => {
            console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`)
            next()
        })
    }

    /**
     * Initialize all routes
     */
    private initializeRoutes(): void {
        // Health check endpoint
        this.app.get('/health', (_req, res) => {
            res.status(200).json({
                success: true,
                message: 'Server is running',
                timestamp: new Date().toISOString(),
                environment: serverConfig.nodeEnv,
            })
        })

        // API routes
        this.app.use('/api/v1', (req, _res, next) => {
            console.log(`API Request: ${req.method} ${req.path}`)
            next()
        })

        // Mount route modules (we'll create these next)
        this.app.use('/api/v1/info', infoRoutes)
        // this.app.use('/api/v1/users', userRoutes);

        // Default API response
        this.app.get('/api/v1', (_req, res) => {
            res.json({
                success: true,
                message: 'Welcome to the Learning Full-Stack API',
                version: '1.0.0',
                documentation: '/api/v1/docs',
            })
        })
    }

    /**
     * Initialize error handling middleware
     */
    private initializeErrorHandling(): void {
        // 404 handler - must be before error handler
        this.app.use(notFoundHandler)

        // Global error handler - must be last
        this.app.use(errorHandler)
    }

    /**
     * Start the server
     */
    public async start(): Promise<void> {
        try {
            // Connect to databases
            console.log('🔄 Connecting to databases...')
            await databaseConnection.connect()
            await redisConnection.connect()

            // Start the server
            this.app.listen(serverConfig.port, () => {
                console.log(`🚀 Server running on port ${serverConfig.port}`)
                console.log(`📊 Environment: ${serverConfig.nodeEnv}`)
                console.log(`🔗 Health check: http://localhost:${serverConfig.port}/health`)
                console.log(`🌐 API base URL: http://localhost:${serverConfig.port}/api/v1`)
            })
        } catch (error) {
            console.error('❌ Failed to start server:', error)
            process.exit(1)
        }
    }

    /**
     * Graceful shutdown
     */
    public async shutdown(): Promise<void> {
        console.log('🛑 Shutting down server...')

        try {
            await databaseConnection.disconnect()
            await redisConnection.disconnect()
            console.log('✅ Server shutdown complete')
            process.exit(0)
        } catch (error) {
            console.error('❌ Error during shutdown:', error)
            process.exit(1)
        }
    }
}

// Create and start the application
const app = new App()

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
    console.error('❌ Uncaught Exception:', error)
    app.shutdown()
})

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason)
    app.shutdown()
})

// Start the server
app.start()
