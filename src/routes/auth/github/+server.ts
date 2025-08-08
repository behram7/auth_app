import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { getGitHubAuthUrl } from '$lib/auth';

export const GET: RequestHandler = async () => {
  const authUrl = getGitHubAuthUrl();
  throw redirect(302, authUrl);
};
