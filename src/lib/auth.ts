import 'dotenv/config';

// OAuth Configuration
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';
export const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID || '';
export const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET || '';

// Debug: Log the values to see if they're loaded
console.log('OAuth Config:', {
  GOOGLE_CLIENT_ID: GOOGLE_CLIENT_ID ? 'SET' : 'MISSING',
  GITHUB_CLIENT_ID: GITHUB_CLIENT_ID ? 'SET' : 'MISSING'
});

// OAuth URLs
export const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
export const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
export const GOOGLE_USER_INFO_URL = 'https://www.googleapis.com/oauth2/v2/userinfo';

export const GITHUB_AUTH_URL = 'https://github.com/login/oauth/authorize';
export const GITHUB_TOKEN_URL = 'https://github.com/login/oauth/access_token';
export const GITHUB_USER_INFO_URL = 'https://api.github.com/user';

// Generate OAuth URLs
export function getGoogleAuthUrl() {
  if (!GOOGLE_CLIENT_ID) {
    throw new Error('GOOGLE_CLIENT_ID is not set');
  }
  
  const params = new URLSearchParams({
    client_id: GOOGLE_CLIENT_ID,
    redirect_uri: `${process.env.BASE_URL || 'http://localhost:5174'}/auth/google/callback`,
    response_type: 'code',
    scope: 'email profile',
    access_type: 'offline'
  });
  
  return `${GOOGLE_AUTH_URL}?${params.toString()}`;
}

export function getGitHubAuthUrl() {
  if (!GITHUB_CLIENT_ID) {
    throw new Error('GITHUB_CLIENT_ID is not set');
  }
  
  const params = new URLSearchParams({
    client_id: GITHUB_CLIENT_ID,
    redirect_uri: `${process.env.BASE_URL || 'http://localhost:5174'}/auth/github/callback`,
    scope: 'user:email'
  });
  
  return `${GITHUB_AUTH_URL}?${params.toString()}`;
}