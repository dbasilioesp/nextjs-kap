import jwt from 'jsonwebtoken'
import { GithubAPIAxios } from './axios'

export function genJWT() {
    const now = Math.floor(Date.now() / 1000)
    const tenMinutes = now + (10 * 60)
    const clockDrift = now - 60
    const base: any = process.env.GITHUB_PRIVATE_KEY
    const privateKey: any = Buffer.from(base, 'base64').toString('ascii')

    const payload = {
        iat: clockDrift, // issued at time, 60 seconds in the past to allow for clock drift
        exp: tenMinutes,
        iss: process.env.GITHUB_APP_ID
    }
    
    return jwt.sign(payload, privateKey, { algorithm: 'RS256' });
}

export async function getAppAccessToken(installationId: string) {
    const jwtToken = genJWT()
    const headers = { Authorization:  `Bearer ${jwtToken}` }
    
    const url = `/app/installations/${installationId}/access_tokens`

    const response = await GithubAPIAxios({ url, headers, method: 'post' })
    const accessToken = response.data.token;

    return accessToken;
}

export async function listAppRepos(accessToken: string | string[] | undefined) {
    const url = '/installation/repositories';
    const headers = { Authorization:  `Bearer ${accessToken}` }
    const response = await GithubAPIAxios({ url, headers })

    return response.data;
}