<template>
  <div>
    <img :src="url" alt="channel-logo">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChannelItem',
  props: {
    url: String
  }
})
</script>

<style lang="sass" scoped>
div
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  height: 80px
  cursor: pointer
  transition: background-color 0.2s
  &:hover
    background: #27292E
img
  width: 70px
  height: 70px
  border-radius: 50%
</style>