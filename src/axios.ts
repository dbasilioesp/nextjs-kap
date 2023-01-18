import axios from 'axios'

export const GithubAxios = axios.create({
    baseURL: 'https://github.com',
    timeout: 1000,
    headers: { accept: 'application/json' }
});

export const GithubAPIAxios = axios.create({
    baseURL: 'https://api.github.com',
    timeout: 1000,
    headers: { 
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'Access-Control-Allow-Origin': '*',
    }
})