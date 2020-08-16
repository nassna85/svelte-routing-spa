<script>
    import { Route } from 'svelte-router-spa'
    export let currentRoute
    const params = {}
    console.log({currentRoute})
  </script>
   
  <div class="main">
      <Route {currentRoute}  {params} />
  </div>