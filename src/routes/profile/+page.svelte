<script>
  import { enhance } from '$app/forms';
  export let data;
  export let form;
</script>

<!-- Modern, beautiful profile page -->
<div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
  <!-- Background pattern -->
  <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJhIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJtMCAwaDQwdjQwaC00MHoiIGZpbGw9Im5vbmUiLz4KICAgICAgPHBhdGggZD0ibTAgMGg0MHY0MGgtNDB6IiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iLjUiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIgb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')] opacity-10"></div>
  
  <div class="relative flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div class="w-full max-w-2xl space-y-8">
      
      <!-- Header -->
      <div class="text-center">
        <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500">
          <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-white">
          Edit Profile
        </h2>
        <p class="mt-2 text-center text-sm text-gray-300">
          Update your account information and preferences
        </p>
      </div>

      <!-- Main form card -->
      <div class="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-8">
        
        <!-- Navigation -->
        <div class="mb-6">
          <a
            href="/dashboard"
            class="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Dashboard
          </a>
        </div>

        <form method="POST" use:enhance class="space-y-6">
          
          <!-- Name field -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-200">
              Full Name
            </label>
            <div class="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form?.name || data.user.name}
                class="block w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm px-3 py-3 text-white placeholder-gray-400 ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

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
                value={form?.email || data.user.email}
                class="block w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm px-3 py-3 text-white placeholder-gray-400 ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <!-- Current password field -->
          <div>
            <label for="currentPassword" class="block text-sm font-medium text-gray-200">
              Current Password
            </label>
            <div class="mt-1">
              <input
                id="currentPassword"
                name="currentPassword"
                type="password"
                placeholder="Enter current password to confirm changes"
                class="block w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm px-3 py-3 text-white placeholder-gray-400 ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
            </div>
            <p class="mt-2 text-xs text-gray-400">
              Required to save any changes
            </p>
          </div>

          <!-- New password field -->
          <div>
            <label for="newPassword" class="block text-sm font-medium text-gray-200">
              New Password
            </label>
            <div class="mt-1">
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                placeholder="Leave blank to keep current password"
                class="block w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm px-3 py-3 text-white placeholder-gray-400 ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
            </div>
            <p class="mt-2 text-xs text-gray-400">
              Optional - only enter if you want to change your password
            </p>
          </div>

          <!-- Save button -->
          <div>
            <button
              type="submit"
              class="group relative flex w-full justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-3 text-sm font-semibold text-white shadow-lg hover:from-blue-700 hover:to-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transform transition hover:scale-[1.02]"
            >
              <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Save Changes
            </button>
          </div>
        </form>

        <!-- Messages -->
        {#if form?.error}
          <div class="mt-6 rounded-lg bg-red-500/20 border border-red-500/30 p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-red-300">
                  {form.error}
                </p>
              </div>
            </div>
          </div>
        {/if}

        {#if form?.success}
          <div class="mt-6 rounded-lg bg-emerald-500/20 border border-emerald-500/30 p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-emerald-300">
                  Profile updated successfully!
                </p>
              </div>
            </div>
          </div>
        {/if}

        <!-- Additional info -->
        <div class="mt-8 pt-6 border-t border-white/20">
          <div class="bg-white/5 rounded-lg p-4">
            <h3 class="text-sm font-medium text-gray-200 mb-2">Security Information</h3>
            <div class="space-y-2 text-xs text-gray-400">
              <p>• Your password is encrypted and securely stored</p>
              <p>• Email changes may require verification</p>
              <p>• We'll never share your personal information</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>