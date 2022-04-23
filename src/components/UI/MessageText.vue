<template>
  <div
      class="msg"
      :class="{
        'msg_reverse': isReverse
      }"
  >
    {{ text }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MessageText',
  props: {
    text: String,
    isReverse: Boolean
  }
})
</script>

<style scoped lang="sass">
.msg
  background: #27292E
  border-radius: 0 15px 15px 15px
  padding: 10px 20px
  width: max-content
  &_reverse
    margin-left: auto
    border-radius: 15px 0 15px 15px
  & + &
    margin-top: 8px
</style>