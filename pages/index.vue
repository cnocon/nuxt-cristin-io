<template>
  <div class="container">
    <header>
      <img
        :src="require(`~/assets/images/square-portrait.png`)"
        alt="Cristin O'Connor"
        class="header-image"
      />
      <h1 class="title">Cristin O'Connor</h1>
      <p class="subtitle">Front End Software Engineer</p>
    </header>
    <main>
      <section-header text="A Little About Me" alignment="left">
        <template #section-header-icon>
          <font-awesome-icon
            :icon="['fal', 'user-astronaut']"
          ></font-awesome-icon>
        </template>
      </section-header>
      <RotatingHeader />

      <section-header text="Services" alignment="left">
        <template #section-header-icon>
          <font-awesome-icon
            :icon="['fas', 'concierge-bell']"
          ></font-awesome-icon>
        </template>
      </section-header>

      <section-header text="Latest Blog Posts" alignment="left">
        <template #section-header-icon>
          <font-awesome-icon :icon="['fas', 'rss']"></font-awesome-icon>
        </template>
      </section-header>

      <section-header text="Connect" alignment="left">
        <template #section-header-icon>
          <font-awesome-icon :icon="['far', 'handshake']"></font-awesome-icon>
        </template>
      </section-header>
      <section>
        <ul class="connect">
          <li class="col-lg-2 col-md-4 col-6">
            <a
              href="https://github.com/cnocon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
              <span class="text">GitHub</span>
            </a>
          </li>
          <li class="col-lg-2 col-md-4 col-6">
            <a
              href="https://codepen.io/cnocon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <font-awesome-icon :icon="['fab', 'codepen']"></font-awesome-icon>
              <span class="text">CodePen</span>
            </a>
          </li>
          <li class="col-lg-2 col-md-4 col-6">
            <a
              href="https://stackoverflow.com/users/2187039/cnocon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <font-awesome-icon
                :icon="['fab', 'stack-overflow']"
              ></font-awesome-icon>
              <span class="text">Stack Overflow</span>
            </a>
          </li>
          <li class="col-lg-2 col-md-4 col-6">
            <a
              href="https://twitter.com/cnocon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <font-awesome-icon :icon="['fal', 'hashtag']"></font-awesome-icon>
              <span class="text">Twitter</span>
            </a>
          </li>
          <li class="col-lg-2 col-md-4 col-6">
            <a
              href="https://www.linkedin.com/in/cristinoconnor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <font-awesome-icon
                :icon="['fab', 'linkedin-in']"
              ></font-awesome-icon>
              <span class="text">LinkedIn</span>
            </a>
          </li>
          <li class="col-lg-2 col-md-4 col-6">
            <a
              href="mailto:her@cristin.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <font-awesome-icon
                :icon="['fal', 'envelope']"
              ></font-awesome-icon>
              <span class="text">Email</span></a
            >
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
/* eslint-disable prettier/prettier */
import RotatingHeader from '@/components/RotatingHeader'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHandshake } from '@fortawesome/pro-regular-svg-icons'
import { faUserAstronaut, faEnvelope, faHashtag } from '@fortawesome/pro-light-svg-icons'
// import { faHandshake } from '@fortawesome/pro-duotone-svg-icons'
import { faConciergeBell, faRss } from '@fortawesome/pro-solid-svg-icons'
import { faLinkedinIn, faStackOverflow, faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faUserAstronaut, faConciergeBell, faRss, faHandshake, faEnvelope, faLinkedinIn, faHashtag, faStackOverflow, faCodepen, faGithub)

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
