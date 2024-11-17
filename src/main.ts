import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { PORT } from './configs/env'
import { LoggingInterceptor } from './logging.interceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalInterceptors(new LoggingInterceptor())
  await app.listen(PORT)
}
bootstrap()
