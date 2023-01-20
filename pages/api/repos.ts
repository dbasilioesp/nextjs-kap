// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { listRepos } from '../../src/oauth-github'

type Data = {
  accessToken: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  const data =  await listRepos(req.query.token);
  
  res.json(data)
}
