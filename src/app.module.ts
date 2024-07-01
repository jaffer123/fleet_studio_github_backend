import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GitModule } from './git/git.module';
import { GitApiService } from './service/gitApi.service';

@Module({
  imports: [GitModule],
  controllers: [AppController],
  providers: [AppService,GitApiService],
})
export class AppModule {}
