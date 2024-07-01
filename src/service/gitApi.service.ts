import { HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import { Constant } from 'src/common/constant';


export class GitApiService {
    constructor(
        private readonly githubApiUrl = Constant.GIT.BASEURL,
        private readonly token = Constant.GIT.TOKEN
    ) { }
    async get(urlPath: string) {
        const url = `${this.githubApiUrl}${urlPath}`;
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `token ${this.token}`,
                },
            });
            return response.data;
        } catch (error) {
            throw new HttpException(
                error.response?.data || 'Unable to fetch commit data',
                error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}
