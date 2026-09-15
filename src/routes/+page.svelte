<script>
  import { enhance } from "$app/forms";
  let { form } = $props();
</script>

<main style="--bg-color: {form?.color ?? '#E5E2DD'}">
  <section class="keycord-wrapper">
    <img
      class="keycord-image"
      src="src/lib/assets/images/transparant-keycord.png"
      alt="Keycord"
    />
    <div class="card">
      <h1>Squad member</h1>
      <img
        class="mugshot"
        src="src/lib/assets/images/isaac.jpg"
        alt="Foto van Isaac Eswarapatham"
      />

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
    </div>
  </section>

  <section class="color-swatches-wrapper">
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

  <section class="social-links">
    <a href="https://github.com/IsaacEswa" target="_blank">GitHub</a>
  </section>
</main>

<style>
  @font-face {
    font-family: "Just Me Again Down Here";
    src: url("src/lib/fonts/JustMeAgainDownHere-Regular.ttf") format("truetype");
    /* font-family: "Just Me Again Down Here", serif; */
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url("src/lib/fonts/HelveticaNeueBold.otf") format("opentype");
    /* font-family: "Helvetica Neue", sans-serif; */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1,
  h2,
  a {
    font-weight: bold;
    font-family: "Helvetica Neue", sans-serif;
    letter-spacing: -5%;
    text-transform: uppercase;
  }

  main {
    background-color: var(--bg-color);
    transition: background-color 0.2s ease;
    height: 100vh;
    position: relative;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 1.5rem;
  }

  .keycord-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: -120px;

    position: relative;

    margin-bottom: -7rem;

    .keycord-image {
      max-width: 300px;
    }

    .card {
      height: 21rem;
      width: 16rem;
      /*  border: 1px solid black; temporary */
      background-color: #fbfaf6;
      z-index: 10;
      position: absolute;
      bottom: 3%;
      /* bottom: 22%; */
      padding: 0.5rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      h1 {
        font-size: 1.75rem;
        text-align: center;
      }

      .mugshot {
        width: 7rem;
        height: 8rem;
        aspect-ratio: 1/2;
        object-fit: cover;
        object-position: 53%;
        filter: grayscale(1);
        transition: 0.2s ease;

        &:hover {
          filter: grayscale(0);
        }
      }

      .personal-information {
        ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .personal-information-field {
          display: flex;
          flex-direction: row;
          align-items: end;
          gap: 0.5rem;

          h2 {
            font-size: 1rem;
          }

          p {
            width: 100%;
            font-family: "Just Me Again Down Here", serif;
            font-size: 1.75rem;
            line-height: 1;

            &::after {
              content: "";
              display: block;
              border-bottom: 1px dashed black;
              width: 100%;
            }
          }
        }
      }
    }
  }

  .color-swatches-wrapper {
    display: flex;
    justify-content: center;

    /* margin-top: -20px; */

    .color-swatches {
      display: flex;
      gap: 1rem;
      flex-direction: row;

      .color-swatch {
        width: 3rem;
        height: 3rem;
        border: 1px solid #fff;
        /* border: none; */
        cursor: pointer;
        transition: 0.2s ease;

        &:hover {
          transform: scale(0.95);
        }

        &:active {
          transform: scale(0.9);
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
  }

  .social-links {
    display: flex;
    justify-content: center;
    a {
      text-decoration: none;
      color: #fbfaf6;
      text-transform: none;
      mix-blend-mode: exclusion;
      font-size: 1.25rem;
      transition: 0.2s ease;

      &:hover {
        transform: scale(0.95);
      }

      &:active {
        transform: scale(0.9);
      }
    }
  }
</style>
