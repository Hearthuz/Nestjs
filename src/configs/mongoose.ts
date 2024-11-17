import { MongooseModuleOptions } from '@nestjs/mongoose'
import { MONGO_DB_NAME, MONGO_PASSWORD, MONGO_USERNAME } from './env'

export const mongooseConfigs: MongooseModuleOptions = {
  user: MONGO_USERNAME,
  pass: MONGO_PASSWORD,
  dbName: MONGO_DB_NAME,
}
