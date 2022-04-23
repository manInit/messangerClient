<template>
  <button
    :class="{
      small: size === 'small',
      normal: size === 'normal'
    }"
  >
    +
  </button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RoundButton',
  props: {
    size: String
  }
})
</script>

<style scoped lang="sass">
button
  color: #fff
  font-size: 40px
  border-radius: 50%
  background: #263893
.normal
  width: 70px
  height: 70px
.small
  width: 50px
  height: 50px
</style>