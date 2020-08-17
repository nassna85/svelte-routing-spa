<script>
    export let currentRoute;
    const {id} = currentRoute.namedParams;
    console.log({currentRoute})
</script>

<h1>Page Edit Post n° {id} </h1>