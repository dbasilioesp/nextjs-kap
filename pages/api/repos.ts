// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { listAppRepos } from '../../src/app-github'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {  
  const data =  await listAppRepos(req.query.appToken);
  
  res.json(data)
}
