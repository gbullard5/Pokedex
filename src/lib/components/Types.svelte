<script>
    export let typeList = [];
    import capatalize from './../utility.js'

</script>

<div>
    {#each typeList as {type}}
        <p class={type.name}>{capatalize(type.name)}</p>
    {/each}
</div>

<style>
  div {
    display: flex;
    gap: 2rem;
  }

  p {
    padding: 0.5rem 2rem;
    border-radius: 1rem;
    color: #fff;
    text-shadow: 2px 2px 2px rgb(50, 50, 50);
  }
</style>