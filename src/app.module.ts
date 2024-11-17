import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { ProductsModule } from './products/products.module'
import { AuthModule } from './auth/auth.module'
import { RolesGuard } from './roles/roles.guard'
import { MongooseModule } from '@nestjs/mongoose'
import { MONGO_URI } from './configs/env'
import { mysqlConfigs } from './configs/mySql'
import { mongooseConfigs } from './configs/mongoose'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot(mysqlConfigs),
    MongooseModule.forRoot(MONGO_URI, mongooseConfigs),
    AuthModule,
    UsersModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService, RolesGuard],
})
export class AppModule {}
