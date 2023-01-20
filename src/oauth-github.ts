import { GithubAxios, GithubAPIAxios } from './axios'

const clientID = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;

export async function getAccessToken(requestToken: string) {
    const url = `/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`

    const response = await GithubAxios({ url, method: 'post' })
    const accessToken = response.data.access_token;

    return accessToken;
}

export async function listRepos(accessToken: string | string[] | undefined) {
    const url = '/user/repos';
    const headers = { Authorization:  `Bearer ${accessToken}` }
    const response = await GithubAPIAxios({ url, headers })

    return response.data;
}