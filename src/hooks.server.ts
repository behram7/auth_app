import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { getSession } from '$lib/server/session';
import { checkDatabaseConnection } from '$lib';

// Custom handle function for session management and security headers
const customHandle: Handle = async ({ event, resolve }) => {
  try {
    // Get session from cookie
    const sessionId = event.cookies.get('session');
    
    if (sessionId) {
      try {
        const userData = await getSession(sessionId);
        if (userData && typeof userData === 'object' && 'id' in userData) {
          event.locals.user = userData as { id: number; email: string; name: string };
        }
      } catch (sessionError) {
        console.error('Session error:', sessionError);
        // Clear invalid session
        event.cookies.delete('session', { path: '/' });
      }
    }

    // Add security headers
    const response = await resolve(event);
    
    // Security headers
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    
    // Remove server information
    response.headers.delete('X-Powered-By');
    
    return response;
    
  } catch (error) {
    console.error('Request handling error:', error);
    
    // Return a generic error response
    return new Response('Internal Server Error', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY'
      }
    });
  }
};

// Export the single handle function
export const handle = customHandle;
