import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Constant} from './common/constant'
import { ResponseInterceptor } from './interceptor/response.interceptor';
const ENV = Constant.ENV;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.enableCors();
  await app.listen(ENV.PORT);
  Logger.log(`Application is running on: ${await app.getUrl()}`)
}
bootstrap();
