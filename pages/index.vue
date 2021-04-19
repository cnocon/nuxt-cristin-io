<template>
  <div class="container">
    <header>
      <!-- <Logo /> -->
      <img
        :src="require(`~/assets/images/square-portrait.png`)"
        alt="Cristin O'Connor"
        class="header-image"
      />
      <h1 class="title">Cristin O'Connor</h1>
      <p class="subtitle">Front End Software Engineer</p>
    </header>
    <main>
      <RotatingHeader />
    </main>
  </div>
</template>

<script>
import RotatingHeader from '@/components/RotatingHeader'

export default {
  components: {
    RotatingHeader,
  },
}
</script>

<style lang="scss">
header {
  text-align: center;
}
.header-image {
  display: none;
  height: 100px;
  width: 100px;
  box-shadow: $rainbow-box-shadow-dark;
  border-radius: 50%;
}
.title {
  font-weight: 500;
  text-transform: uppercase;
  font-family: $font-family-display;
  margin-bottom: 0.5rem;
}
.subtitle {
  display: inline-block;
  font-style: italic;
  font-family: $font-family-display;
  border-radius: 0.25rem;
  // letter-spacing: 1px;
  background-color: $highlight-yellow;
  font-size: 1.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
</style>
