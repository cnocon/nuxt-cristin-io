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
  </div>
</template>

<script>
export default {}
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
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.subtitle {
  display: inline-block;
  font-style: italic;
  font-family: $font-family-display;
  border-radius: 4px;
  letter-spacing: 1px;
  background-color: $highlight-yellow;
}
</style>
