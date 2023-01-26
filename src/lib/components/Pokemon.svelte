<script>
  import {onMount} from "svelte";
  import Types from "./Types.svelte";
  import {formatName} from './../utility.js'
  export let url;



  let data = {};
  let loaded = false;


  onMount(async ()=>{
    const result = await fetch(url);
    data = await result.json();
    loaded = true;
  });



</script>

{#if loaded}
  <section>
    <span>{data.id}</span>
    
    <p>{formatName(data.name)}</p>
    <div>
      <img src={data.sprites.front_default} alt={`Front view of a ${formatName(data.name)}`} />
      <img src={data.sprites.back_default} alt={`Rear view of a ${formatName(data.name)}`} />
    </div>
      
  <Types typeList={data.types}/>

  </section>
{/if}

<style>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 0.5rem;
    border: 1px solid;
    box-shadow: 4.0px 8.0px 8.0px rgb(0 0 0 / 0.38);
  }

  span {
    position: absolute;
    top: 1rem;
    left: 1rem;
    margin: 0;
    color: rgb(0 0 0 / .45);
  }

  p {
    font-size: 1.25rem;
  }

  img {
    min-inline-size: 150px;
  }


</style>