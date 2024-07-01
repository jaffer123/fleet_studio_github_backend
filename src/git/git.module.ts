import { Module } from '@nestjs/common';
import { GitService } from './git.service';
import { GitController } from './git.controller';
import { GitApiService } from 'src/service/gitApi.service';


@Module({
  controllers: [GitController],
  providers: [GitService,GitApiService],
  imports: [],
})
export class GitModule {}
