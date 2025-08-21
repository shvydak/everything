import {NextFunction} from 'express'

// User related types
export interface IUser {
    _id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: UserRole
    isActive: boolean
    createdAt: Date
    updatedAt: Date
}

export enum UserRole {
    USER = 'user',
    ADMIN = 'admin',
}

// Request and Response types
export interface ApiResponse<T = any> {
    success: boolean
    data?: T
    message?: string
    error?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
    pagination: {
        page: number
        limit: number
        total: number
        totalPages: number
    }
}

// Authentication types
export interface LoginRequest {
    email: string
    password: string
}

export interface RegisterRequest {
    email: string
    password: string
    firstName: string
    lastName: string
}

export interface AuthResponse {
    user: Omit<IUser, 'password'>
    token: string
}

// Express request extensions
export interface AuthenticatedRequest extends Request {
    user?: IUser
}

// Error types
export class AppError extends Error {
    public statusCode: number
    public isOperational: boolean

    constructor(message: string, statusCode: number) {
        super(message)
        this.statusCode = statusCode
        this.isOperational = true

        Error.captureStackTrace(this, this.constructor)
    }
}

// Database types
export interface DatabaseConfig {
    uri: string
    options: {
        maxPoolSize: number
        serverSelectionTimeoutMS: number
        socketTimeoutMS: number
    }
}

// Redis types
export interface RedisConfig {
    url: string
    password?: string | undefined
    retryDelayOnFailover: number
    maxRetriesPerRequest: number
}

// Server configuration
export interface ServerConfig {
    port: number
    nodeEnv: string
    corsOrigin: string
    jwtSecret: string
    jwtExpiresIn: string
}

// Operation result types
type OperationResult = 'success' | 'failure' | 'pending'

// Id type
type IdType = string | number

// User types
// Create user request type (without _id, createdAt, updatedAt)
type CreateUserRequest = Omit<IUser, '_id' | 'createdAt' | 'updatedAt'>

// Update user request type (all fields are optional)
type UpdateUserRequest = Partial<Omit<IUser, '_id' | 'createdAt' | 'updatedAt'>>

// Public user profile type (without password and service fields)
type PublicUserProfile = Pick<IUser, 'email' | 'firstName' | 'lastName' | 'role' | 'isActive'>

// Types for functions
type UserValidator = (user: CreateUserRequest) => boolean
type PasswordHasher = (password: string) => Promise<string>
type TokenGenerator = (userId: string, email: string) => string

// Middleware function type
type MiddlewareFunction = (req: Request, res: Response, next: NextFunction) => void

// Function overloads for user search
function findUser(id: string): IUser | null
function findUser(email: string): IUser | null
function findUser(criteria: {email?: string; id?: string}): IUser | null
function findUser(criteria: string | {email?: string; id?: string}): IUser | null {
    // Implementation will be in service
    return null
}

// Type for the overloaded function
type FindUserFunction = typeof findUser

// Generic function types
type ArrayProcessor<T> = (arr: T[]) => T[]
type DataTransformer<T, U> = (data: T) => U
type Validator<T> = (data: T) => boolean

// Generic API response handler
type ApiHandler<T, R> = (data: T) => Promise<ApiResponse<R>>

// Base class for entities
abstract class BaseEntity {
    public id?: string
    public createdAt: Date
    public updatedAt: Date

    constructor() {
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }

    public updateTimestamp(): void {
        this.updatedAt = new Date()
    }
}

// Interface for UserEntity
interface IUserEntity {
    id?: string
    email: string
    firstName: string
    lastName: string
    role: UserRole
    isActive: boolean
    createdAt: Date
    updatedAt: Date

    getFullName(): string
    isAdmin(): boolean
    updateTimestamp(): void
}

// User class extending BaseEntity
class UserEntity extends BaseEntity implements IUserEntity {
    constructor(
        public email: string,
        public firstName: string,
        public lastName: string,
        public role: UserRole = UserRole.USER,
        public isActive: boolean = true
    ) {
        super()
    }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }

    public isAdmin(): boolean {
        return this.role === UserRole.ADMIN
    }
}

// Type Guards
function isString(value: unknown): value is string {
    return typeof value === 'string'
}

function isNumber(value: unknown): value is number {
    return typeof value === 'number'
}

function isUser(value: unknown): value is IUser {
    return (
        typeof value === 'object' &&
        value !== null &&
        'email' in value &&
        'firstName' in value &&
        'lastName' in value
    )
}

function isUserEntity(value: unknown): value is UserEntity {
    return value instanceof UserEntity
}

// Conditional Types
type IsUser<T> = T extends IUser ? true : false

type ExtractUserFields<T> = T extends IUser ? keyof T : never

type UserOrString<T> = T extends IUser ? T : string

type ConditionalResponse<T> = T extends IUser
    ? ApiResponse<IUser>
    : T extends string
      ? ApiResponse<string>
      : ApiResponse<unknown>
