import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { Cookie } from '../src/cookie'
import { GithubAPIAxios } from '../src/axios'

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const cookie = new Cookie()
    const accessToken = cookie.get('accessToken')
    if (accessToken) {
      GithubAPIAxios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }
  }, [])

  return <Component {...pageProps} />
}
