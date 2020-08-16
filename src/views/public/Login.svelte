<script>
    import isAuthenticated from "../../stores/auth"
    import { Navigate } from 'svelte-router-spa'
    const handleLoginClick = () => {
        $isAuthenticated = true;
        console.log({$isAuthenticated})
    }
</script>

<h1>Page Login</h1>

<button on:click={handleLoginClick}>Login</button>

{#if $isAuthenticated}
    <Navigate to="/" class="btn btn-">Home</Navigate>
{/if}