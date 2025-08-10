<script>
  import { enhance } from '$app/forms';
  export let data;
</script>

<!-- Modern, beautiful dashboard -->
<div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
  <!-- Background pattern -->
  <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJhIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJtMCAwaDQwdjQwaC00MHoiIGZpbGw9Im5vbmUiLz4KICAgICAgPHBhdGggZD0ibTAgMGg0MHY0MGgtNDB6IiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iLjUiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIgb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')] opacity-10"></div>
  
  <div class="relative min-h-screen px-4 py-12 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-4xl">
      
      <!-- Header -->
      <div class="mb-8">
        <div class="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-6">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-purple-500">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h1 class="text-2xl font-bold text-white">Dashboard</h1>
                <p class="text-sm text-gray-300">Welcome back, {data.user.name}!</p>
              </div>
            </div>
            
            <form method="POST" action="/logout" use:enhance>
              <button
                type="submit"
                class="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transform transition hover:scale-105"
              >
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Main content grid -->
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
        
        <!-- User info card -->
        <div class="lg:col-span-2">
          <div class="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-6">
            <div class="mb-6">
              <h2 class="text-xl font-semibold text-white mb-2">Profile Information</h2>
              <p class="text-sm text-gray-300">Your account details and information</p>
            </div>
            
            <div class="space-y-4">
              <div class="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-gray-400">Email Address</p>
                    <p class="text-white font-medium">{data.user.email}</p>
                  </div>
                </div>
              </div>
              
              <div class="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-gray-400">Full Name</p>
                    <p class="text-white font-medium">{data.user.name || 'Not provided'}</p>
                  </div>
                </div>
              </div>
              
              <div class="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-gray-400">User ID</p>
                    <p class="text-white font-medium">#{data.user.id}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick actions -->
        <div class="space-y-6">
          <!-- Profile action -->
          <div class="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-6">
            <h3 class="text-lg font-semibold text-white mb-4">Quick Actions</h3>
            <div class="space-y-3">
              <a
                href="/profile"
                class="flex items-center justify-between w-full p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-200 group"
              >
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-violet-500/20 rounded-lg flex items-center justify-center">
                    <svg class="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <span class="text-white text-sm font-medium">Edit Profile</span>
                </div>
                <svg class="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
              
              <a
                href="/debug"
                class="flex items-center justify-between w-full p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-200 group"
              >
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <span class="text-white text-sm font-medium">Debug Info</span>
                </div>
                <svg class="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Stats card -->
          <div class="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-6">
            <h3 class="text-lg font-semibold text-white mb-4">Account Stats</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-300">Account Status</span>
                <span class="inline-flex items-center rounded-full bg-emerald-500/20 px-2 py-1 text-xs font-medium text-emerald-400">
                  Active
                </span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-300">Security Level</span>
                <span class="inline-flex items-center rounded-full bg-violet-500/20 px-2 py-1 text-xs font-medium text-violet-400">
                  High
                </span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-300">Profile Complete</span>
                <span class="text-sm font-medium text-white">85%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>