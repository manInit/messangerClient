<template>
  <div>
    <round-button :size="'normal'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RoundButton from '@/components/UI/RoundButton.vue'

export default defineComponent({
  name: 'ChannelItemAdd',
  components: {RoundButton},
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
</style>