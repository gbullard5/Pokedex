<script>
  import {total} from './lib/store.js'
  import List from "./lib/components/List.svelte";

</script>

<header>
  <h1>Pokedex
    <small>({$total})</small>
  </h1>

</header>

<List  />


<style>


  small{
    font-size: 1rem;
  }

</style>
