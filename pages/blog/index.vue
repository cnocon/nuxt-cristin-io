<template>
  <div class="blog-index-page">
    <h1 class="mb-5">Latest from the Blog</h1>
    <div class="row">
      <div v-for="post in posts" :key="post.slug" class="col-12 col-lg-6 mb-5">
        <article class="shadow-sm">
          <header>
            <div class="post-image">
              <img
                :src="require(`~/assets/images/${post.img}`)"
                :alt="post.alt"
              />
            </div>

            <nuxt-link :to="'blog/' + post.slug">{{ post.title }}</nuxt-link>

            <div class="meta">
              <time :datetime="post.date">{{ formatDate(post.date) }}</time>
              <span
                v-for="cat in post.categories"
                :key="cat"
                class="badge badge-primary"
              >
                {{ cat }}
              </span>
            </div>
          </header>
          <section>
            <p>{{ post.summary }}</p>
          </section>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content('articles').fetch()
    posts.sort((a, b) => {
      const aTime = new Date(a.date).getTime()
      const bTime = new Date(b.date).getTime()

      return aTime < bTime ? 1 : -1
    })

    return { posts }
  },
  methods: {
    formatDate(date) {
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  margin-bottom: 1.5rem;
  text-align: center;

  a {
    font-size: 1.5rem;
    font-family: $font-family-heading;
    font-weight: 300;
  }

  .post-image {
    max-width: 3.75rem;
    margin: 0 auto 1rem;
  }

  img {
    display: inline-block;
    max-width: 3.75rem;
    flex-basis: 3.75rem;
    margin-right: 1.25rem;
  }

  time {
    display: block;
    font-weight: 400;
    font-size: 1rem;
    margin-top: 0.5rem;
    font-family: $font-family-display;
  }
}
.badge:not(:last-of-type) {
  margin-right: 0.4em;
}
article {
  padding: 2rem 2rem 1.5rem;
  height: 100%;

  @include media-breakpoint-down(sm) {
    padding: 1.25rem 1.25rem 0.5rem;
  }
}
</style>
