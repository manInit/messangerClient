<template>
  <div :class="{'active': active}">
    <div class="letter" v-if="isLetter && name.length > 0">{{ name[0].toLowerCase() }}</div>
    <img v-else :src="url" alt="channel-logo">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChannelItem',
  props: {
    url: String,
    active: Boolean,
    name: {
      default: '',
      type: String
    }
  },
  computed: {
    isLetter() {
      return !this.url
    }
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
.active
  background: #27292E
.letter
  text-decoration: none
  color: #fff
  font-size: 40px
  width: 70px
  height: 70px
  border-radius: 50%
  background: #27292E
img
  width: 70px
  height: 70px
  border-radius: 50%
</style>