<template>
  <Section
    header-text="Résumé & Courses"
    header-icon-type="fad"
    header-icon="file-user"
    header-alignment="center"
  >
  </Section>
</template>

<script>
import Section from '@/components/Section'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFileUser } from '@fortawesome/pro-duotone-svg-icons'

library.add(faFileUser)

export default {
  components: {
    Section,
  },
}
</script>
