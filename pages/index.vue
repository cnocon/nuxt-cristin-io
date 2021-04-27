<template>
  <div>
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
      <Section
        header-icon-type="fal"
        header-icon="user-astronaut"
        header-text="A Little About Me"
        header-alignment="left"
      >
        <RotatingHeader />
      </Section>

      <Section
        hader-icon-type="fas"
        header-icon="concierge-bell"
        header-text="Services"
        header-alignment="left"
      >
        <div class="row d-flex align-items-center">
          <div class="col-sm-6 col-lg-3 text-center mb-5">
            <div class="rainbow-border rounded-circle p-2 d-inline-block mb-2">
              <font-awesome-icon
                :icon="['fal', 'code']"
                size="2x"
                :style="iconStyle"
              ></font-awesome-icon>
            </div>
            <h4>WEB DEVELOPMENT</h4>
            <p>
              This is my primary area of expertise after 10+ years in the field.
              <a href="mailto:her@cristin.io">Contact me</a> about development.
            </p>
          </div>
          <div class="col-sm-6 col-lg-3 text-center mb-5">
            <div class="rainbow-border rounded-circle p-2 d-inline-block mb-2">
              <font-awesome-icon
                :icon="['fal', 'graduation-cap']"
                size="2x"
                :style="iconStyle"
              ></font-awesome-icon>
            </div>
            <h4>CODE TUTORING</h4>
            <p>
              I focus on teaching with compassion and work with all ages.
              <a href="mailto:her@cristin.io">Contact me</a> about tutoring.
            </p>
          </div>
          <div class="col-sm-12 col-lg-6 mb-5">
            <quote classes="subtle bg-lightest rounded-lg pr-5">
              <template #quote>
                Cristin O'Connor is a lifesaver! Being new to Gatsby.js, I was
                having a difficult time finding a solution for a blocker. I
                scoured documentation, tried every combination of keywords, and
                and went to every forum I could think of to find the solution. I
                came across Cristin's reached out. Cristin was responsive, and
                knowledgeable. She was also kind and concise which was exactly
                what a newbie like me needed."
              </template>
              <template #cite>Mariah W., Freelance Web Developer</template>
            </quote>
          </div>
        </div>
      </Section>

      <Section
        hader-icon-type="fas"
        header-icon="rss"
        header-text="Latest Blog Posts"
        header-alignment="left"
      >
        <PostList
          :posts="posts"
          column-classes="col-sm-12 col-md-6 mb-5"
        ></PostList>
      </Section>

      <section-header text="Connect" alignment="left">
        <template #section-header-icon>
          <font-awesome-icon :icon="['far', 'handshake']"></font-awesome-icon>
        </template>
      </section-header>
      <section>
        <ul class="list-style-none row">
          <li class="col-lg-2 col-md-4 col-6 text-center mb-5">
            <a
              href="https://github.com/cnocon"
              target="_blank"
              rel="noopener noreferrer"
              class="d-inline-block text-center plain"
            >
              <div
                class="rainbow-border rounded-circle p-2 d-inline-block mb-2"
              >
                <font-awesome-icon
                  :icon="['fab', 'github']"
                  size="2x"
                ></font-awesome-icon>
              </div>
              <span class="d-block">GitHub</span>
            </a>
          </li>
          <li class="col-lg-2 col-md-4 col-6 text-center mb-5">
            <a
              href="https://codepen.io/cnocon"
              target="_blank"
              rel="noopener noreferrer"
              class="plain"
            >
              <div
                class="rainbow-border rounded-circle p-2 d-inline-block mb-2"
              >
                <font-awesome-icon
                  :icon="['fab', 'codepen']"
                  size="2x"
                ></font-awesome-icon>
              </div>
              <span class="d-block">CodePen</span>
            </a>
          </li>
          <li class="col-lg-2 col-md-4 col-6 text-center mb-5">
            <a
              href="https://stackoverflow.com/users/2187039/cnocon"
              target="_blank"
              rel="noopener noreferrer"
              class="plain"
            >
              <div
                class="rainbow-border rounded-circle p-2 d-inline-block mb-2"
              >
                <font-awesome-icon
                  :icon="['fab', 'stack-overflow']"
                  size="2x"
                  class="fa-w-16"
                ></font-awesome-icon>
              </div>
              <span class="d-block">Stack Overflow</span>
            </a>
          </li>
          <li class="col-lg-2 col-md-4 col-6 text-center mb-5">
            <a
              href="https://twitter.com/cnocon"
              target="_blank"
              rel="noopener noreferrer"
              class="plain"
            >
              <div
                class="rainbow-border rounded-circle p-2 d-inline-block mb-2"
              >
                <font-awesome-icon
                  :icon="['fal', 'hashtag']"
                  size="2x"
                  class="fa-w-16"
                ></font-awesome-icon>
              </div>
              <span class="d-block">Twitter</span>
            </a>
          </li>
          <li class="col-lg-2 col-md-4 col-6 text-center mb-5">
            <a
              href="https://www.linkedin.com/in/cristinoconnor"
              target="_blank"
              rel="noopener noreferrer"
              class="plain"
            >
              <div
                class="rainbow-border rounded-circle p-2 d-inline-block mb-2"
              >
                <font-awesome-icon
                  :icon="['fab', 'linkedin-in']"
                  size="2x"
                  class="fa-w-16"
                ></font-awesome-icon>
              </div>
              <span class="d-block">LinkedIn</span>
            </a>
          </li>
          <li class="col-lg-2 col-md-4 col-6 text-center mb-5">
            <a
              href="mailto:her@cristin.io"
              target="_blank"
              rel="noopener noreferrer"
              class="plain"
            >
              <div
                class="rainbow-border rounded-circle p-2 d-inline-block mb-2"
              >
                <font-awesome-icon
                  :icon="['fal', 'envelope']"
                  size="2x"
                ></font-awesome-icon>
              </div>
              <span class="d-block">Email</span></a
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
import Section from '@/components/Section'
import PostList from '@/components/PostList'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHandshake } from '@fortawesome/pro-regular-svg-icons'
import { faUserAstronaut, faEnvelope, faHashtag, faCode, faGraduationCap } from '@fortawesome/pro-light-svg-icons'
// import { faHandshake } from '@fortawesome/pro-duotone-svg-icons'
import { faConciergeBell, faRss } from '@fortawesome/pro-solid-svg-icons'
import { faLinkedinIn, faStackOverflow, faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faGraduationCap, faCode, faUserAstronaut, faConciergeBell, faRss, faHandshake, faEnvelope, faLinkedinIn, faHashtag, faStackOverflow, faCodepen, faGithub)

export default {
  components: {
    RotatingHeader,
    Section,
    PostList,
  },
  // eslint-disable-next-line require-await
  async asyncData({ $content, params, query }) {
    const posts = await $content('articles').limit(4).sortBy('date', 'desc').fetch()
    // eslint-disable-next-line no-console
    console.log(posts);

    return {
      posts
    }
  },
  computed: {
    iconStyle() {
      return {
        // width: '42px',
        // height: '42px',
        // padding: '1rem',
        // fontSize: '2rem',
      }
    },
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
