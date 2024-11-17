import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common'
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name, {
    timestamp: true,
  })

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest()

    const method = request.method
    const url = request.originalUrl

    return next.handle().pipe(
      tap(() => {
        const { statusCode } = context.switchToHttp().getResponse()
        this.logger.log(`[${method}] ${url} -- ${statusCode}`)
      }),
    )
  }
}
