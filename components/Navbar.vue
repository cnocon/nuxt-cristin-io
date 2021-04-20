<template>
  <div class="navbar container">
    <b-navbar-brand to="/">
      <img
        :src="require(`~/assets/images/square-portrait.png`)"
        alt="Cristin O'Connor"
        class="logo-img"
      />
      <b-link :active="isActive('home')" to="/" class="brand-link">
        <span class="sans-serif">.</span>io
        <!-- <font-awesome-icon
          :icon="['f  as', 'home-lg-alt']"
          class="text-success"
        ></font-awesome-icon> -->
      </b-link>
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav pills>
        <b-nav-item :active="isActive('resume')" to="/resume">
          Résumé
        </b-nav-item>
        <b-nav-item :active="isActive('portfolio')" to="/portfolio">
          Portfolio
        </b-nav-item>
        <b-nav-item
          :active="isActive('blog')"
          :to="{ name: 'blog', query: { page: 1 } }"
        >
          Blog
        </b-nav-item>
        <b-nav-item :active="isActive('contact')" to="/contact">
          Contact
        </b-nav-item>

        <b-nav-item-dropdown
          id="my-nav-dropdown"
          text="Menu"
          toggle-class="nav-link-custom"
          right
        >
          <template slot="button-content">
            <BIconList class="py-0" />
          </template>
          <b-dropdown-item :active="isActive('resume')" to="/resume"
            >Résumé</b-dropdown-item
          >
          <b-dropdown-item :active="isActive('portfolio')" to="/portfolio"
            >Portfolio</b-dropdown-item
          >
          <b-dropdown-item :active="isActive('blog')" to="/blog"
            >Blog</b-dropdown-item
          >
          <b-dropdown-item :active="isActive('contact')" to="/contact"
            >Contact</b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-nav>
    </b-navbar-nav>
  </div>
</template>

<script>
import { BIconList } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHomeLgAlt } from '@fortawesome/pro-solid-svg-icons'

library.add(faHomeLgAlt)

export default {
  components: {
    BIconList,
  },
  methods: {
    isActive(path) {
      if (path === 'blog') {
        return (
          this.$route.name.match(/blog/) &&
          this.$route.name.match(/blog/).length > 0
        )
      } else {
        return this.$route.name === path
      }
    },
  },
}
</script>

<style lang="scss">
.navbar {
  @include media-breakpoint-down(sm) {
    width: 100%;
  }
}
.navbar-brand {
  .sans-serif {
    font-family: $font-family-heading;
    line-height: 60px;
    vertical-align: bottom;
  }
  .brand-link {
    font-weight: 600;
    // font-size: 0.875rem;
    font-family: $font-family-heading;
    color: transparent;
    background-image: $rainbow-ellipse-bottom-right;
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: text;
    -webkit-background-clip: text;
    text-transform: uppercase;
    margin-left: -0.625rem;
    font-family: 'Source Code Pro';
    font-size: 52px;
    line-height: 60px;
    display: inline-block;
    vertical-align: middle;
    font-weight: 400;
    letter-spacing: -1px;
    text-indent: 1px;
  }
  .logo-img {
    height: 42px;
    width: 42px;
    border-radius: 50%;
    background-color: darken($color-primary-med, 7.5%);
    box-shadow: hsl(175, 80%, 80%) 0 1.5px, hsl(58, 100%, 80%) -1.5px 0,
      hsl(240, 80%, 82%) 1.5px 0, hsl(355, 80%, 85%) 0 -1.5px 0;
    margin-right: 0.5rem;
    display: inline-block;
  }
}
.nav-item:not(#my-nav-dropdown) {
  @include media-breakpoint-down(sm) {
    display: none !important;
  }
}
#my-nav-dropdown {
  @include media-breakpoint-up(md) {
    display: none;
  }
}
.navbar-nav {
  @include media-breakpoint-up(md) {
    min-width: 250px;
  }
  .dropdown-toggle {
    margin-right: -1rem;
    font-size: 150%;
    padding: 0.125rem 0.5rem !important;
    &::after {
      display: none;
    }
  }
  .dropdown-menu.show {
    left: 0.25rem;
  }
}
.nav {
  justify-content: space-between;
  .nav-item {
    &:last-of-type .nav-link {
      @include media-breakpoint-up(md) {
        padding-right: 0;
      }
    }
  }
  .nav-link {
    color: $white;
    font-family: $font-family-heading;
    font-weight: 600;
    font-size: 0.875rem;
    &:hover {
      text-decoration: underline;
    }
    &.active {
      background-color: $lightest-gray !important;
      color: $primary !important;
    }
    &.dropdown-toggle {
      font-size: 150%;
    }
  }
  .nav-link {
    @include media-breakpoint-up(md) {
      padding-left: 1rem !important;
      padding-right: 1rem !important;
    }
  }
}
</style>
