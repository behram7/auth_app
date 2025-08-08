<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  
  export let data: { message?: string; status?: number };
  
  let errorMessage = data?.message || 'An unexpected error occurred';
  let status = data?.status || 500;
  
  onMount(() => {
    // Log error for debugging
    console.error('Error page rendered:', { status, message: errorMessage });
  });
  
  function goBack() {
    history.back();
  }
</script>

<svelte:head>
  <title>Error {status}</title>
</svelte:head>

<div class="error-container">
  <div class="error-content">
    <h1>Oops! Something went wrong</h1>
    
    {#if status === 404}
      <p>The page you're looking for doesn't exist.</p>
    {:else if status === 403}
      <p>You don't have permission to access this resource.</p>
    {:else if status === 500}
      <p>We're experiencing technical difficulties. Please try again later.</p>
    {:else}
      <p>{errorMessage}</p>
    {/if}
    
    <div class="error-actions">
      <a href="/" class="btn btn-primary">Go Home</a>
      <button on:click={goBack} class="btn btn-secondary">Go Back</button>
    </div>
    
    {#if status === 500}
      <div class="error-help">
        <p>If this problem persists, please contact support.</p>
      </div>
    {/if}
  </div>
</div>

<style>
  .error-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 1rem;
  }
  
  .error-content {
    background: white;
    padding: 3rem;
    border-radius: 12px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 500px;
    width: 100%;
  }
  
  h1 {
    color: #333;
    margin-bottom: 1rem;
    font-size: 2rem;
  }
  
  p {
    color: #666;
    margin-bottom: 2rem;
    line-height: 1.6;
  }
  
  .error-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 2rem;
  }
  
  .btn {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .btn-primary {
    background: #667eea;
    color: white;
  }
  
  .btn-primary:hover {
    background: #5a6fd8;
    transform: translateY(-2px);
  }
  
  .btn-secondary {
    background: #f8f9fa;
    color: #333;
    border: 1px solid #dee2e6;
  }
  
  .btn-secondary:hover {
    background: #e9ecef;
    transform: translateY(-2px);
  }
  
  .error-help {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid #eee;
  }
  
  .error-help p {
    color: #888;
    font-size: 0.9rem;
    margin: 0;
  }
</style>
