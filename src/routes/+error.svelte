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

<!-- Modern, beautiful error page -->
<div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
  <!-- Background pattern -->
  <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJhIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJtMCAwaDQwdjQwaC00MHoiIGZpbGw9Im5vbmUiLz4KICAgICAgPHBhdGggZD0ibTAgMGg0MHY0MGgtNDB6IiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iLjUiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIgb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')] opacity-10"></div>
  
  <div class="relative flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div class="w-full max-w-lg text-center">
      
      <!-- Error illustration -->
      <div class="mb-8">
        <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-pink-500 shadow-xl">
          {#if status === 404}
            <svg class="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-3-4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          {:else if status === 403}
            <svg class="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
            </svg>
          {:else}
            <svg class="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          {/if}
        </div>
      </div>

      <!-- Error content -->
      <div class="space-y-6">
        <!-- Status code -->
        <div>
          <h1 class="text-6xl font-bold text-white opacity-60">{status}</h1>
        </div>

        <!-- Main error message -->
        <div class="space-y-4">
          <h2 class="text-3xl font-bold tracking-tight text-white">
            {#if status === 404}
              Page Not Found
            {:else if status === 403}
              Access Forbidden
            {:else if status === 500}
              Server Error
            {:else}
              Something Went Wrong
            {/if}
          </h2>
          
          <p class="text-lg text-gray-300 leading-relaxed">
            {#if status === 404}
              The page you're looking for doesn't exist or has been moved.
            {:else if status === 403}
              You don't have permission to access this resource.
            {:else if status === 500}
              We're experiencing technical difficulties. Please try again later.
            {:else}
              {errorMessage}
            {/if}
          </p>
        </div>

        <!-- Action buttons -->
        <div class="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-8">
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              class="group relative flex justify-center items-center gap-3 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-violet-700 hover:to-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 transform transition hover:scale-105"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Go Home
            </a>

            <button
              on:click={goBack}
              class="group relative flex justify-center items-center gap-3 rounded-lg bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transform transition hover:scale-105"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              Go Back
            </button>
          </div>

          {#if status === 500}
            <div class="mt-8 pt-6 border-t border-white/20">
              <div class="bg-amber-500/20 border border-amber-500/30 rounded-lg p-4">
                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <h3 class="text-sm font-medium text-amber-200">Need Help?</h3>
                    <div class="mt-2 text-sm text-amber-100">
                      <p>If this problem persists, please contact our support team for assistance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/if}

          <!-- Additional help -->
          <div class="mt-8 text-center">
            <p class="text-sm text-gray-400">
              Error code: <span class="font-mono bg-white/10 px-2 py-1 rounded">{status}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>