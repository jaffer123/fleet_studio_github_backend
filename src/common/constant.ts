import { config } from 'dotenv';
config();

export const Constant = {
    url: {
        git: {
            basePath: 'repositories',
            commitList: ':owner/:repository/commits',
            commitIdPath: ':owner/:repository/commits/:oid',
            commitDiffPath: ':owner/:repository/commits/:oid/diff',
        }
    },
    ENV:{
        PORT:process.env.PORT
    },
    GIT:{
        BASEURL: process.env.GIT_URL,
        TOKEN: process.env.GIT_TOKEN
    },
}