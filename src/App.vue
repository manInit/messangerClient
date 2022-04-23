<template>
  <header-chat/>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderChat from '@/components/HeaderChat.vue'
import Api from '@/api'
import ExtraModalInfo from '@/components/ExtraUserInfo.vue'

export default defineComponent({
  name: 'App',
  components: {ExtraModalInfo, HeaderChat }
})
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box
  font-family: Roboto, sans-serif
body
  overflow-x: hidden
button
  display: block
  border: none
  cursor: pointer
</style>
