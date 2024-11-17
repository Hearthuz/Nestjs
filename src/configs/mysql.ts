import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { Product } from 'src/products/Products.entity'
import {
  MYSQL_DB_NAME,
  MYSQL_HOST,
  MYSQL_PASSWORD,
  MYSQL_PORT,
  MYSQL_USERNAME,
} from './env'

export const mysqlConfigs: TypeOrmModuleOptions = {
  type: 'mysql',
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  username: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  database: MYSQL_DB_NAME,
  autoLoadEntities: true,
  synchronize: true,
}
