import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GitService } from './git.service';
import { Constant } from '../common/constant';
const gitPath = Constant.url.git;

@Controller(gitPath.basePath)
export class GitController {
  constructor(private readonly gitService: GitService) {}

  @Get(gitPath.commitList)
  getCommitList(@Param('owner') ownerId: string , @Param('repository') repository:string ){
    return this.gitService.getCommitList({
      ownerId,repository
    })

  }
  @Get(gitPath.commitIdPath)
  getCommitId(@Param('owner') ownerId: string , @Param('repository') repository:string , @Param('oid') oId:string){
    return this.gitService.getCommitId({
      ownerId,repository,oId
    });
  }

  @Get(gitPath.commitDiffPath)
  getCommitDiff(@Param('owner') ownerId: string , @Param('repository') repository:string , @Param('oid') oId:string){
    return this.gitService.getCommitDiff({ownerId,repository,oId});
  }

}
