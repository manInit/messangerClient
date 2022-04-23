<template>
  <header-chat/>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderChat from '@/components/HeaderChat.vue'
import Api from '@/api'

export default defineComponent({
  name: 'App',
  components: { HeaderChat },
  mounted() {
    Api.login()
  }
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
