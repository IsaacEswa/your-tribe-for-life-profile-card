<script>
  import favicon from "$lib/assets/images/favicon.svg";

  let { children, data } = $props();
  const person = data.person;

  // let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <link rel="stylesheet" href="/src/styles/styleguide.css" />
  <title>Profile card van {person.name}</title>
</svelte:head>

{@render children()}
