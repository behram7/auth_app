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

<!-- Modern, beautiful login page -->
<div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
  <!-- Background pattern -->
  <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJhIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJtMCAwaDQwdjQwaC00MHoiIGZpbGw9Im5vbmUiLz4KICAgICAgPHBhdGggZD0ibTAgMGg0MHY0MGgtNDB6IiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iLjUiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIgb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')] opacity-10"></div>
  
  <div class="relative flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      
      <!-- Logo and header -->
      <div class="text-center">
        <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-purple-500">
          <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-white">
          Welcome back
        </h2>
        <p class="mt-2 text-center text-sm text-gray-300">
          Sign in to your account to continue
        </p>
      </div>

      <!-- Login form -->
      <div class="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-8">
        <form method="POST" use:enhance class="space-y-6">
          
          <!-- Email field -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-200">
              Email address
            </label>
            <div class="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                class="block w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm px-3 py-3 text-white placeholder-gray-400 ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <!-- Password field -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-200">
              Password
            </label>
            <div class="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Enter your password"
                class="block w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm px-3 py-3 text-white placeholder-gray-400 ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <!-- Remember me and forgot password -->
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                class="h-4 w-4 rounded border-white/20 bg-white/10 text-violet-600 focus:ring-violet-500"
              />
              <label for="remember" class="ml-2 block text-sm text-gray-300">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <button type="button" class="font-medium text-violet-400 hover:text-violet-300">
                Forgot password?
              </button>
            </div>
          </div>

          <!-- Sign in button -->
          <div>
            <button
              type="submit"
              class="group relative flex w-full justify-center rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 px-3 py-3 text-sm font-semibold text-white shadow-lg hover:from-violet-700 hover:to-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 transform transition hover:scale-[1.02]"
            >
              Sign in
            </button>
          </div>
        </form>

        <!-- Divider -->
        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-white/20"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="bg-transparent px-2 text-gray-300">Or continue with</span>
            </div>
          </div>
        </div>

        <!-- Social login -->
        <div class="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            on:click={signInWithGoogle}
            class="inline-flex w-full justify-center items-center gap-3 rounded-lg bg-white/10 backdrop-blur-sm px-3 py-3 text-sm font-medium text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 focus:outline-offset-0 transition-all duration-200"
          >
            <svg class="h-4 w-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </button>

          <button
            type="button"
            on:click={signInWithGitHub}
            class="inline-flex w-full justify-center items-center gap-3 rounded-lg bg-white/10 backdrop-blur-sm px-3 py-3 text-sm font-medium text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 focus:outline-offset-0 transition-all duration-200"
          >
            <svg class="h-4 w-4" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </button>
        </div>

        <!-- Sign up link -->
        <div class="mt-6 text-center">
          <p class="text-sm text-gray-300">
            Don't have an account?{' '}
            <a href="/register" class="font-medium text-violet-400 hover:text-violet-300">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  