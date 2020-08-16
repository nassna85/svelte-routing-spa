<script>
    import isAuthenticated from "../stores/auth";
    import { Navigate, navigateTo } from 'svelte-router-spa'
    const handleLogoutClick = () => {
        $isAuthenticated = false;
        navigateTo('login')
    }
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <Navigate styles="navbar-brand" to="/">Navbar</Navigate>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <Navigate styles="nav-link" to="/">Home</Navigate>
        </li>
        <li class="nav-item">
          <Navigate styles="nav-link" to="/posts">Posts</Navigate>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <Navigate styles="nav-link" to="/login">Login</Navigate>
        </li>
        <li class="nav-item">
          <button class="btn btn-danger" on:click={handleLogoutClick}>Logout</button>
        </li>
      </ul>
    </div>
  </nav>