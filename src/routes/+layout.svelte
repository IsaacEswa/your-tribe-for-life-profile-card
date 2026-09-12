<script>
  import favicon from "$lib/assets/images/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <link rel="stylesheet" href="/src/styles/styleguide.css" />
</svelte:head>

{@render children()}
