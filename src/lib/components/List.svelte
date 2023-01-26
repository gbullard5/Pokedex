<script>
    import {filtered} from "./../store.js"
    import Pokemon from "./Pokemon.svelte";

</script>
{#key $filtered}
<main>
    {#each $filtered as {url}}
    <Pokemon {url}/>
    {/each}
</main>
{/key}

  <style>
  main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 1rem;
  }
  </style>