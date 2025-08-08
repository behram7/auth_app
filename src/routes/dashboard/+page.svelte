<script>
  import { enhance } from '$app/forms';
  export let data;
</script>

<div class="dashboard-container">
  <header class="dashboard-header">
    <h1>Dashboard</h1>
    <form method="POST" action="/logout" use:enhance>
      <button type="submit" class="logout-btn">Logout</button>
    </form>
  </header>
  
  <div class="user-info">
    <h2>Welcome, {data.user.name}!</h2>
    <div class="info-card">
      <div class="info-item">
        <strong>Email:</strong> {data.user.email}
      </div>
      <div class="info-item">
        <strong>User ID:</strong> {data.user.id}
      </div>
    </div>
  </div>
  
  <div class="actions">
    <a href="/profile" class="action-btn">Edit Profile</a>
  </div>
</div>

<style>
  .dashboard-container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
  }
  
  .dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #ddd;
  }
  
  h1 {
    color: #333;
    margin: 0;
  }
  
  .logout-btn {
    padding: 0.5rem 1rem;
    background: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;
  }
  
  .logout-btn:hover {
    background: #c82333;
  }
  
  .user-info {
    margin-bottom: 2rem;
  }
  
  h2 {
    color: #333;
    margin-bottom: 1rem;
  }
  
  .info-card {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    border: 1px solid #dee2e6;
  }
  
  .info-item {
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
  
  .actions {
    margin-top: 2rem;
  }
  
  .action-btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.2s;
  }
  
  .action-btn:hover {
    background: #0056b3;
  }
</style>