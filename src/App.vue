<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

</script>

<template>
  <header>
    <section class="cal_wrapper">
      <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->
       <h1>BNU</h1>
       <h2>Ateliers Lab et formations usager·e·s</h2>
      <div class="wrapper">
        <HelloWorld />
      </div>
    </section>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>

h1{
  font-family: sans-serif;
  margin: 10px 0;
  padding: 1px 10px;
  border-radius: 5px;
  color: hsla(160, 100%, 37%, 1);
  background: linear-gradient(45deg, hsl(160deg 100% 37% / 20%), transparent);
  font-size: xx-large;
  letter-spacing: 3px;
}
h2{
  margin: 10px 0;
  padding: 1px 10px;
  border-radius: 5px;
  color:var(--sx-color-on-primary-container);
  /* color:light-dark(var(--sx-color-on-primary-container), var(--sx-color-primary-container)); */
  font-size: large;
}

@media (prefers-color-scheme: dark) {
  h2{
    color: var(--sx-color-primary-container)
  }
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .cal_wrapper{
    position: fixed;
  }

  .logo {
    /* margin: 0 2rem 0 0; */
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
