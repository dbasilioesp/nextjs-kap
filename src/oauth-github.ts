import { GithubAxios, GithubAPIAxios } from './axios'
import { Cookie } from './cookie';
// import { Cookie } from './cookie'

const clientID = process.env.OAUTH_GITHUB_CLIENT_ID;
const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;

export function setHeaderAccessToken(accessToken?: string | null) {
    let token = accessToken;

    if (!accessToken) {
        const cookie = new Cookie()
        token = cookie.get('accessToken')
    }

    GithubAPIAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export async function getAccessToken(requestToken: string) {
    const url = `/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`

    const response = await GithubAxios({ url, method: 'post' })
    const accessToken = response.data.access_token;

    return accessToken;
}

export async function listRepos() {
    // const cookie = new Cookie()
    // const requestToken = cookie.get('requestToken')

    const url = '/user/repos';
    // const headers = { Authorization:  `Bearer ${requestToken}`}
    const response = await GithubAPIAxios.get(url)

    console.log(response);
}