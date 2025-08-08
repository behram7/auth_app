<script lang="ts">
  import type { PageData } from './$types';
  
  export let data: PageData;
</script>

<h1>Debug: All Users</h1>

{#if data.users.length === 0}
  <p>No users found in database.</p>
{:else}
  <table border="1">
    <thead>
      <tr>
        <th>ID</th>
        <th>Email</th>
        <th>Name</th>
        <th>Created At</th>
      </tr>
    </thead>
    <tbody>
      {#each data.users as user}
        <tr>
          <td>{user.id}</td>
          <td>{user.email}</td>
          <td>{user.name}</td>
          <td>{user.created_at ? new Date(user.created_at).toLocaleString() : 'N/A'}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{/if}
