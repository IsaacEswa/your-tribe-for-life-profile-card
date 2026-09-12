<script></script>

<main>
  <!-- <section class="keycord">
    <img src="src/lib/assets/images/keycord.png" alt="Keycord" />
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
  </section> -->

  <section class="background-color-selector">
    <form>
      <input type="color" list="colors" name="color" value="#E5E2DD" />
      <datalist id="colors">
        <option value="#E5E2DD"></option>
        <option value="#F5693C"></option>
        <option value="#722F37"></option>
        <option value="#031C33"></option>
        <option value="#302621"></option>
      </datalist>
    </form>
  </section>

  <section class="social-links">
    <a href="https://github.com/IsaacEswa" target="_blank">Github</a>
  </section>

  <section class="background-color-selector">
    <form>
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
</style>
