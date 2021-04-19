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
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-container {
  a {
    border-bottom: 1px solid lighten($link-underline-gray, 20%);
    text-decoration: none;

    &:hover {
      border-bottom: 0;
    }
  }
}
.navbar-container {
  width: 100%;
  background-color: $primary;
  padding: 0.3125rem 0;

  // &::after {
  //   content: '';
  //   display: block;
  //   height: 6px;
  //   width: 100%;
  //   background-image: $pastel-rainbow-bar;
  //   background-size: cover;
  //   background-position: center bottom;
  //   background-repeat: no-repeat;
  // }

  // &::after {
  //   content: '';
  //   display: block;
  //   height: 4px;
  //   width: 100%;
  //   background-image: $rainbow-gradient-light;
  //   background-size: cover;
  //   background-position: center bottom;
  //   background-repeat: no-repeat;
  // }
}

.footer-container {
  // background-image: $pastel-rainbow-bar;
  // background-size: 100% 4px;
  // background-position: center top;
  // background-repeat: no-repeat;
  background-color: $light-gray;
  justify-self: flex-end;
  margin-top: auto;

  &::after {
    content: '';
    display: block;
    height: 0.5rem;
    width: 100%;
    background-image: $rainbow-gradient-light;
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
  }
}

.content-container {
  // height - footerheight - headerheight - header bottom margin
  min-height: calc(100vh - 150px - 75px - 64px);
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
.nuxt-content-highlight {
  margin: 1.25rem 0;
  border-radius: 0.25rem !important;

  @include media-breakpoint-down(sm) {
    max-width: 100%;
    overflow-x: scroll;
  }

  code {
    @include media-breakpoint-down(sm) {
      min-width: 450px !important;
    }
  }
}
.app-container {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
