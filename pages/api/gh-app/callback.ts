// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAppAccessToken } from '../../../src/app-github';
import { getAccessToken } from '../../../src/oauth-github';

type Data = {
  accessToken: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const requestToken: any = req.query.code;
  const installationId: any = req.query.installation_id;
  const appAccessToken = await getAppAccessToken(installationId)
  const accessToken = await getAccessToken(requestToken)

  res.redirect(`/dismiss?token=${accessToken}&appToken=${appAccessToken}&installationId=${installationId}`)
}
