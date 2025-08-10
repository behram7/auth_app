<!-- Modern, beautiful homepage -->
<div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
  <!-- Background pattern -->
  <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJhIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJtMCAwaDQwdjQwaC00MHoiIGZpbGw9Im5vbmUiLz4KICAgICAgPHBhdGggZD0ibTAgMGg0MHY0MGgtNDB6IiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iLjUiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIgb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')] opacity-10"></div>
  
  <div class="relative flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div class="w-full max-w-2xl text-center">
      
      <!-- Hero section -->
      <div class="space-y-8">
        <!-- Logo -->
        <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-purple-500 shadow-xl">
          <svg class="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>

        <!-- Main heading -->
        <div class="space-y-4">
          <h1 class="text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Welcome to
            <span class="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              AuthApp
            </span>
          </h1>
          <p class="mx-auto max-w-lg text-xl text-gray-300 leading-relaxed">
            A secure and beautiful authentication system built with SvelteKit, PostgreSQL, and modern design principles.
          </p>
        </div>

        <!-- Feature highlights -->
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-12">
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div class="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">Secure Auth</h3>
            <p class="text-sm text-gray-300">Enterprise-grade security with encrypted sessions</p>
          </div>

          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
            <p class="text-sm text-gray-300">Optimized performance with SvelteKit</p>
          </div>

          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">Modern UI</h3>
            <p class="text-sm text-gray-300">Beautiful, responsive design with Tailwind CSS</p>
          </div>
        </div>

        <!-- CTA buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <a
            href="/login"
            class="group relative flex justify-center items-center gap-3 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:from-violet-700 hover:to-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 transform transition hover:scale-105"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            Sign In
          </a>

          <a
            href="/register"
            class="group relative flex justify-center items-center gap-3 rounded-lg bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transform transition hover:scale-105"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            Create Account
          </a>
        </div>

        <!-- Social proof -->
        <div class="mt-16 text-center">
          <p class="text-sm text-gray-400 mb-4">Trusted by developers worldwide</p>
          <div class="flex justify-center items-center space-x-8 opacity-60">
            <div class="bg-white/10 rounded-lg px-4 py-2">
              <span class="text-white font-semibold">🔒 Secure</span>
            </div>
            <div class="bg-white/10 rounded-lg px-4 py-2">
              <span class="text-white font-semibold">⚡ Fast</span>
            </div>
            <div class="bg-white/10 rounded-lg px-4 py-2">
              <span class="text-white font-semibold">🎨 Beautiful</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>