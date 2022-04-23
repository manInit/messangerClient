<template>
  <button>
    <slot/>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonChat'
})
</script>

<style scoped lang="sass">
button
  display: block
  color: #fff
  text-align: center
  padding: 16px 0
  background: #263893
  width: 100%
  border: none
  cursor: pointer
  transition: background-color 0.2s
  &:hover
    background: #1c2a74
</style>