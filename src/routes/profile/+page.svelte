<script>
  import { enhance } from '$app/forms';
  export let data;
  export let form;
</script>

<div class="profile-container">
  <header class="profile-header">
    <h1>Profile</h1>
    <a href="/dashboard" class="back-btn">Back to Dashboard</a>
  </header>
  
  <div class="profile-content">
    <form method="POST" use:enhance>
      <div class="form-group">
        <label for="name">Name</label>
        <input 
          id="name" 
          name="name" 
          type="text" 
          value={form?.name || data.user.name} 
          required 
        />
      </div>
      
      <div class="form-group">
        <label for="email">Email</label>
        <input 
          id="email" 
          name="email" 
          type="email" 
          value={form?.email || data.user.email} 
          required 
        />
      </div>
      
      <div class="form-group">
        <label for="currentPassword">Current Password</label>
        <input 
          id="currentPassword" 
          name="currentPassword" 
          type="password" 
          placeholder="Enter current password to confirm changes"
        />
      </div>
      
      <div class="form-group">
        <label for="newPassword">New Password (optional)</label>
        <input 
          id="newPassword" 
          name="newPassword" 
          type="password" 
          placeholder="Leave blank to keep current password"
        />
      </div>
      
      <button type="submit" class="save-btn">Save Changes</button>
    </form>
    
    {#if form?.error}
      <div class="error-message">
        {form.error}
      </div>
    {/if}
    
    {#if form?.success}
      <div class="success-message">
        Profile updated successfully!
      </div>
    {/if}
  </div>
</div>

<style>
  .profile-container {
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
  }
  
  .profile-header {
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
  
  .back-btn {
    padding: 0.5rem 1rem;
    background: #6c757d;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-size: 0.9rem;
  }
  
  .back-btn:hover {
    background: #5a6268;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #333;
  }
  
  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  .save-btn {
    width: 100%;
    padding: 0.75rem;
    background: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 1rem;
  }
  
  .save-btn:hover {
    background: #1e7e34;
  }
  
  .error-message {
    background: #f8d7da;
    color: #721c24;
    padding: 1rem;
    border-radius: 4px;
    margin-top: 1rem;
    border: 1px solid #f5c6cb;
  }
  
  .success-message {
    background: #d4edda;
    color: #155724;
    padding: 1rem;
    border-radius: 4px;
    margin-top: 1rem;
    border: 1px solid #c3e6cb;
  }
</style>
  