<template>
  <img :src="url" alt="avatar">
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UserAvatar',
  props: {
    url: String
  }
})
</script>

<style scoped lang="sass">
img
  width: 36px
  height: 36px
  border-radius: 10px
</style>