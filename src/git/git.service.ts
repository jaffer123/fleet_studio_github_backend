import { Injectable } from '@nestjs/common';
import { GitApiService } from 'src/service/gitApi.service';
import { GitDto } from './dto/git.dto';
import {transformCommitData,transformCommitDiff} from '../utils/git.formatter'
@Injectable()
export class GitService {
  constructor(
    private readonly gitApiService: GitApiService,
  ) { }

  async getCommitList(data: GitDto) {
    const UrlPath = `${data.ownerId}/${data.repository}/commits`
    const commitList = await this.gitApiService.get(UrlPath);
    const formatterCommitList = await commitList.map(dt =>{
      return transformCommitData(dt)
    })
    return formatterCommitList;
  }
  async getCommitId(data: GitDto) {
    const UrlPath = `${data.ownerId}/${data.repository}/commits/${data.oId}`
    const commitIdDetails = await this.gitApiService.get(UrlPath);
    const formatterData = await transformCommitData(commitIdDetails);
    return formatterData;

  }

  async getCommitDiff(data: GitDto) {
    const UrlPath = `${data.ownerId}/${data.repository}/commits/${data.oId}`
    const commitIdDetails = await this.gitApiService.get(UrlPath);
    return transformCommitDiff(commitIdDetails);
  }
}
