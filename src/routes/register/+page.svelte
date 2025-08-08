<script>
  import { enhance } from '$app/forms';
  
  function signInWithGoogle() {
    // Redirect to Google OAuth
    window.location.href = '/auth/google';
  }
  
  function signInWithGitHub() {
    // Redirect to GitHub OAuth
    window.location.href = '/auth/github';
  }
</script>

<div class="auth-container">
  <h1>Register</h1>
  
  <form method="POST" use:enhance>
    <div class="form-group">
      <label for="name">Name</label>
      <input id="name" name="name" type="text" placeholder="Enter your name" required />
    </div>
    
    <div class="form-group">
      <label for="email">Email</label>
      <input id="email" name="email" type="email" placeholder="Enter your email" required />
    </div>
    
    <div class="form-group">
      <label for="password">Password</label>
      <input id="password" name="password" type="password" placeholder="Enter your password" required />
    </div>
    
    <button type="submit">Register</button>
  </form>
  
  <div class="oauth-divider">
    <span>or</span>
  </div>
  
  <div class="oauth-buttons">
    <button type="button" class="oauth-btn google-btn" on:click={signInWithGoogle}>
      <svg class="oauth-icon" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
      Sign up with Google
    </button>
    
    <button type="button" class="oauth-btn github-btn" on:click={signInWithGitHub}>
      <svg class="oauth-icon" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
      Sign up with GitHub
    </button>
  </div>
  
  <p>Already have an account? <a href="/login">Login here</a></p>
</div>

<style>
  .auth-container {
    max-width: 400px;
    margin: 2rem auto;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: white;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  button {
    width: 100%;
    padding: 0.75rem;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
  }
  
  button:hover {
    background: #0056b3;
  }
  
  .oauth-divider {
    text-align: center;
    margin: 1.5rem 0;
    position: relative;
  }
  
  .oauth-divider::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: #ddd;
  }
  
  .oauth-divider span {
    background: white;
    padding: 0 1rem;
    color: #666;
    font-size: 0.9rem;
  }
  
  .oauth-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .oauth-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: white;
    color: #333;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .oauth-btn:hover {
    background: #f8f9fa;
    border-color: #adb5bd;
  }
  
  .google-btn:hover {
    border-color: #4285F4;
  }
  
  .github-btn:hover {
    border-color: #333;
  }
  
  .oauth-icon {
    width: 20px;
    height: 20px;
  }
  
  p {
    text-align: center;
    margin-top: 1rem;
  }
  
  a {
    color: #007bff;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
</style>
  