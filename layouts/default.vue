<template>
  <div class="app-container mb-0">
    <div class="navbar-container mb-3">
      <Navbar />
    </div>
    <div class="container content-container mb-4">
      <Nuxt />
    </div>
    <div class="footer-container">
      <Footer />
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Footer,
  },
}
</script>

<style lang="scss">
.content-container {
  a,
  a:link,
  a:visited,
  a:active {
    border-bottom: 1px solid lighten($link-underline-gray, 20%);
    text-decoration: none;

    &:hover {
      border-bottom: 0;
    }
  }
}
[target='_blank']::after {
  content: '';
  display: block;
  margin-left: 0.5rem;
  background-image: url('~assets/images/box-arrow-up-right.svg');
  display: inline-block;
  width: 0.8125rem;
  height: 0.8125rem;
  background-size: 0.8125rem 0.8125rem;
}
</style>
