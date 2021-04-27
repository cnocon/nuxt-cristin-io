<template>
  <section>
    <section-header :text="headerText" :alignment="headerAlignment">
      <template #section-header-icon>
        <font-awesome-icon
          :icon="[headerIconType, headerIcon]"
        ></font-awesome-icon>
      </template>
    </section-header>
    <slot></slot>
  </section>
</template>
<script>
export default {
  props: {
    headerIcon: {
      // eslint-disable-next-line vue/require-valid-default-prop
      default: '',
      type: String,
    },
    headerIconType: {
      // eslint-disable-next-line vue/require-valid-default-prop
      default: 'fas',
      type: String,
    },
    headerText: {
      default: 'Section Title',
      type: String,
    },
    headerAlignment: {
      default: 'left',
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped></style>
