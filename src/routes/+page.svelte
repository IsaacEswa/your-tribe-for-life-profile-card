<script>
  import { enhance } from "$app/forms";
  let { form } = $props();
</script>

<main style="--bg-color: {form?.color ?? '#E5E2DD'}">
  <section class="keycord">
    <img
      class="keycord-image"
      src="src/lib/assets/images/transparant-keycord.png"
      alt="Keycord"
    />
    <div class="card">
      <h1>Squad member</h1>
      <img
        src="src/lib/assets/images/isaac.jpg"
        alt="Foto van Isaac Eswarapatham"
      />
    </div>

    <div class="personal-information">
      <ul>
        <li>
          <div class="personal-information-field">
            <h2>Name</h2>
            <p>Isaac Eswarapatham</p>
          </div>
        </li>

        <li>
          <div class="personal-information-field">
            <h2>Team</h2>
            <p>CoffeeTime</p>
          </div>
        </li>

        <li>
          <div class="personal-information-field">
            <h2>Song</h2>
            <p>90210</p>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <section class="social-links">
    <a href="https://github.com/IsaacEswa" target="_blank">Github</a>
  </section>

  <section class="background-color-selector">
    <form method="POST" use:enhance>
      <div class="color-swatches">
        <button
          class="color-swatch"
          value="#E5E2DD"
          name="color"
          aria-label="Select background color to beige"
        ></button>

        <button
          class="color-swatch"
          value="#F5693C"
          name="color"
          aria-label="Select background color to orange"
        ></button>

        <button
          class="color-swatch"
          value="#722F37"
          name="color"
          aria-label="Select background color to darkred"
        ></button>

        <button
          class="color-swatch"
          value="#031C33"
          name="color"
          aria-label="Select background color to darkblue"
        ></button>

        <button
          class="color-swatch"
          value="#302621"
          name="color"
          aria-label="Select background color to darkbrown"
        ></button>
      </div>
    </form>
  </section>
</main>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  main {
    background-color: var(--bg-color);
    transition: background-color 0.2s ease;
    min-height: 100vh;
    position: relative;
  }

  .keycord {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .keycord-image {
      max-width: 300px;
      position: absolute;
      top: -75px;
    }
  }

  .color-swatches {
    display: flex;
    gap: 0.5rem;
    flex-direction: row;

    .color-swatch {
      width: 2rem;
      height: 2rem;
      border: 2px solid #fff;
      cursor: pointer;

      &:active {
        transform: scale(0.95);
      }
    }

    .color-swatch[value="#E5E2DD"] {
      background-color: #e5e2dd;
    }
    .color-swatch[value="#F5693C"] {
      background-color: #f5693c;
    }
    .color-swatch[value="#722F37"] {
      background-color: #722f37;
    }
    .color-swatch[value="#031C33"] {
      background-color: #031c33;
    }
    .color-swatch[value="#302621"] {
      background-color: #302621;
    }
  }
</style>
