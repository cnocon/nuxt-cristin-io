<template>
  <!-- prettier-ignore -->
  <h2 :class="'mb-5 section-header align-' + alignment">

    <span>
      <slot name="section-header-icon"></slot>
      <!-- <i class="fal fa-user-astronaut"></i> -->
      <b>{{ text }}</b>
    </span>
  </h2>
</template>

<script>
/* eslint-disable prettier/prettier */
export default {
  props: {
    alignment: {
      type: String,
      default: 'left',
    },
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
.section-header {
  position: relative;
  white-space: nowrap;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: calc(50% + 3px);
    left: 50%;
    transform: translate(-50%,-50%);
    height: 64px;
    margin: 0;
    width: 100%;
    max-width: none;
    box-sizing: content-box;
    border-bottom: 3px solid $light-gray;
  }

  b {
    font-size: 1.5rem;
    font-family: $font-family-heading;
    font-weight: 800;
    white-space: nowrap;
  }

  i {
    position: relative;
    display: inline-block;
    line-height: 60px;
    vertical-align: middle;
    border: 3px solid $light-gray;
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
}
</style>
