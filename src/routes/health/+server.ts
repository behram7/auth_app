import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { checkDatabaseConnection } from '$lib';

export const GET: RequestHandler = async () => {
  try {
    const dbConnected = await checkDatabaseConnection();
    
    const health = {
      status: dbConnected ? 'healthy' : 'unhealthy',
      timestamp: new Date().toISOString(),
      database: {
        connected: dbConnected
      },
      uptime: process.uptime(),
      memory: process.memoryUsage()
    };
    
    return json(health, {
      status: dbConnected ? 200 : 503
    });
  } catch (error) {
    console.error('Health check error:', error);
    
    return json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      error: 'Health check failed'
    }, { status: 503 });
  }
};
