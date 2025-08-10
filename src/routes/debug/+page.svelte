<script lang="ts">
  import type { PageData } from './$types';
  
  export let data: PageData;
</script>

<!-- Modern, beautiful debug page -->
<div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
  <!-- Background pattern -->
  <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJhIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJtMCAwaDQwdjQwaC00MHoiIGZpbGw9Im5vbmUiLz4KICAgICAgPHBhdGggZD0ibTAgMGg0MHY0MGgtNDB6IiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iLjUiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIgb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')] opacity-10"></div>
  
  <div class="relative min-h-screen px-4 py-12 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-6xl">
      
      <!-- Header -->
      <div class="mb-8">
        <div class="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-6">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h1 class="text-2xl font-bold text-white">Debug Information</h1>
                <p class="text-sm text-gray-300">User database overview and diagnostics</p>
              </div>
            </div>
            
            <a
              href="/dashboard"
              class="inline-flex items-center gap-2 rounded-lg bg-gray-600 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 transform transition hover:scale-105"
            >
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Dashboard
            </a>
          </div>
        </div>
      </div>

      <!-- Stats cards -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-8">
        <div class="bg-white/10 backdrop-blur-md rounded-xl shadow-xl border border-white/20 p-6">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
            </div>
            <div class="ml-5 w-0 flex-1">
              <dl>
                <dt class="text-sm font-medium text-gray-300 truncate">Total Users</dt>
                <dd class="text-lg font-semibold text-white">{data.users.length}</dd>
              </dl>
            </div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-md rounded-xl shadow-xl border border-white/20 p-6">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div class="ml-5 w-0 flex-1">
              <dl>
                <dt class="text-sm font-medium text-gray-300 truncate">Database Status</dt>
                <dd class="text-lg font-semibold text-emerald-400">Connected</dd>
              </dl>
            </div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-md rounded-xl shadow-xl border border-white/20 p-6">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
            </div>
            <div class="ml-5 w-0 flex-1">
              <dl>
                <dt class="text-sm font-medium text-gray-300 truncate">Data Tables</dt>
                <dd class="text-lg font-semibold text-white">2</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <!-- Users table -->
      <div class="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
        <div class="px-6 py-4 border-b border-white/20">
          <h2 class="text-xl font-semibold text-white">All Users</h2>
          <p class="text-sm text-gray-300 mt-1">Complete list of registered users in the database</p>
        </div>

        {#if data.users.length === 0}
          <div class="p-12 text-center">
            <div class="w-16 h-16 bg-gray-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 class="text-lg font-medium text-white mb-2">No users found</h3>
            <p class="text-gray-400">The user database appears to be empty.</p>
          </div>
        {:else}
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-white/20">
              <thead class="bg-white/5">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    User ID
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Email Address
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Full Name
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Created At
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-white/10">
                {#each data.users as user, index}
                  <tr class="hover:bg-white/5 transition-colors">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-8 w-8">
                          <div class="h-8 w-8 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center">
                            <span class="text-xs font-medium text-white">#{user.id}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm font-medium text-white">{user.email}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-300">{user.name || 'Not provided'}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-300">
                        {user.created_at ? new Date(user.created_at).toLocaleString() : 'N/A'}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400">
                        Active
                      </span>
                    </td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        {/if}
      </div>

      <!-- Warning notice -->
      <div class="mt-8 bg-amber-500/20 border border-amber-500/30 rounded-lg p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-medium text-amber-200">Debug Information</h3>
            <div class="mt-2 text-sm text-amber-100">
              <p>This page shows sensitive database information and should only be accessible to administrators in development environments.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>