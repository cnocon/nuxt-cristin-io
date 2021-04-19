<template>
  <div class="blog-index-page">
    <Breadcrumbs :crumbs="breadcrumbs" />

    <h1 class="mb-5">Latest Posts</h1>
    <PostList
      :posts="pagePosts"
      column-classes="col-12 col-lg-6 mb-5"
    ></PostList>

    <prev-next
      name="blog"
      :prev="
        page - 1 >= 1
          ? {
              params: { slug: 'blog' },
              query: { page: page - 1 },
            }
          : null
      "
      :next="
        page + 1 <= Math.ceil(postsCount / limit)
          ? {
              params: { slug: 'blog' },
              query: { page: page + 1 },
            }
          : null
      "
    ></prev-next>
  </div>
</template>

<script>
import PostList from '@/components/PostList'
import Breadcrumbs from '@/components/Breadcrumbs'

export default {
  components: {
    PostList,
    Breadcrumbs,
  },
  async asyncData({ $content, query }) {
    const page = query.page || 1
    const limit = 4
    const posts = await $content('articles').sortBy('date', 'desc').fetch()
    const postsCount = posts.length

    const breadcrumbs = [
      {
        text: 'Recent Posts',
        href: '/blog?page=1',
      },
      {
        text: `Page ${page}`,
        href: null,
      },
    ]

    const pagePosts = posts.slice(limit * (page - 1), page * limit)

    return {
      page,
      postsCount,
      pagePosts,
      limit,
      breadcrumbs,
    }
  },
  watchQuery: ['page'],
}
</script>

<style lang="scss" scoped></style>
