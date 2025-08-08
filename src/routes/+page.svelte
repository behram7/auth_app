<div class="welcome-container">
  <h1>Welcome to Auth App</h1>
  <p>A secure authentication system built with SvelteKit and PostgreSQL</p>
  
  <div class="auth-links">
    <a href="/login" class="auth-button login">Login</a>
    <a href="/register" class="auth-button register">Register</a>
  </div>
</div>

<style>
  .welcome-container {
    max-width: 600px;
    margin: 4rem auto;
    text-align: center;
    padding: 2rem;
  }
  
  h1 {
    color: #333;
    margin-bottom: 1rem;
  }
  
  p {
    color: #666;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
  
  .auth-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
  
  .auth-button {
    padding: 0.75rem 2rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.2s;
  }
  
  .login {
    background: #007bff;
    color: white;
  }
  
  .login:hover {
    background: #0056b3;
  }
  
  .register {
    background: #28a745;
    color: white;
  }
  
  .register:hover {
    background: #1e7e34;
  }
</style>