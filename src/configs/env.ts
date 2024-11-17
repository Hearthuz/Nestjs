import 'dotenv/config'

export const PORT = process.env.PORT ?? 4000

export const JWT_SECRET = process.env.JWT_SECRET ?? 'secret'

export const MONGO_URI = process.env.MONGO_URI ?? 'mongodb://localhost:27017'
export const MONGO_USERNAME = process.env.MONGO_USERNAME ?? 'root'
export const MONGO_PASSWORD = process.env.MONGO_PASSWORD ?? 'password'
export const MONGO_DB_NAME = process.env.MONGO_DB_NAME ?? 'test'

export const MYSQL_HOST = process.env.MYSQL_HOST ?? ''
export const MYSQL_PORT = parseInt(process.env.MYSQL_PORT) ?? 3306
export const MYSQL_USERNAME = process.env.MYSQL_USERNAME ?? ''
export const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD ?? ''
export const MYSQL_DB_NAME = process.env.MYSQL_DB_NAME ?? ''
