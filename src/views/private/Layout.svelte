<script>
    import { Route } from "svelte-router-spa";
    import Nav from '../../components/Nav.svelte';
   
    export let currentRoute;
    const params = {}

    console.log({currentRoute})
  </script>
   
   <Nav />
  <div class="main">
    <h1>Private Layout</h1>
    <Route {currentRoute} {params} />
  </div>