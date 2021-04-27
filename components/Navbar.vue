<template>
  <div class="navbar container">
    <b-navbar-brand to="/">
      <img
        :src="require(`~/assets/images/square-portrait.png`)"
        alt="Cristin O'Connor"
        class="logo-img"
      />
    </b-navbar-brand>
    <b-navbar-nav class="mr-auto ml-0">
      <b-nav>
        <b-nav-item :active="isActive('index')" to="/" link-classes="rounded">
          Home
        </b-nav-item>
        <b-nav-item
          :active="isActive('resume')"
          to="/resume"
          link-classes="rounded"
        >
          Résumé
        </b-nav-item>
        <b-nav-item
          :active="isActive('portfolio')"
          to="/portfolio"
          link-classes="rounded"
        >
          Portfolio
        </b-nav-item>
        <b-nav-item
          :active="isActive('blog')"
          :to="{ name: 'blog', query: { page: 1 } }"
          link-classes="rounded"
        >
          Blog
        </b-nav-item>
        <b-nav-item
          :active="isActive('contact')"
          to="/contact"
          link-classes="rounded"
        >
          Contact
        </b-nav-item>

        <b-nav-item-dropdown id="my-nav-dropdown" text="Menu" right>
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
  .logo-img {
    height: 62px;
    width: 62px;
    border-radius: 50%;
    // background-color: darken($color-primary-med, 12.5%);
    // background-image: $rainbow-ellipse-top-right-dark;
    box-shadow: hsl(175, 80%, 80%) 0 1.5px, hsl(58, 100%, 80%) -1.5px 0,
      hsl(240, 80%, 82%) 1.5px 0, hsl(355, 80%, 85%) 0 -1.5px 0;
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
    min-width: 325px;
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

  .nav-item {
    .nav-link {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
}
.nav {
  justify-content: space-between;

  .nav-link {
    color: $white;
    font-family: $font-family-heading;
    font-weight: 600;
    font-size: 0.875rem;
    padding-left: 1rem;
    padding-right: 1rem;

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
}
</style>
