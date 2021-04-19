<template>
  <pre>
    <code :class="'line-numbers language-' + lang"><slot name="code"></slot></code>
  </pre>
</template>

<script>
import Prism from '~/plugins/prism'

export default {
  props: {
    lang: {
      type: String,
      required: true,
      default: 'js',
    },
  },
  mounted() {
    Prism.highlightAll()
  },
}
</script>

<style lang="scss">
pre {
  margin: 1rem 0 !important;
  // padding: 0 1.25rem 0 0 !important;
  border-radius: 0.25rem;

  @include media-breakpoint-down(sm) {
    max-width: 100%;
    overflow-x: scroll;
  }

  code[class*='language-'] {
    display: block;
    // transform: translateY(-3rem);
    margin-top: -3rem;
    margin-bottom: -1rem;
    width: 100%;

    @include media-breakpoint-down(sm) {
      min-width: 450px !important;
    }

    .token.operator {
      background: transparent;
    }
  }

  code,
  code span {
    text-shadow: none !important;
  }
}
</style>
