<template>
  <header-chat/>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderChat from '@/components/HeaderChat.vue'

export default defineComponent({
  name: 'App',
  components: { HeaderChat }
})
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box
  font-family: Roboto, sans-serif
button
  display: block
  border: none
  cursor: pointer
</style>
