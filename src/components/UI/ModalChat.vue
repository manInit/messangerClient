<template>
  <div class="modal" v-if="isShow" @click="hideDialogue">
    <div @click.stop class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ModalChat',
  props: {
    isShow: Boolean
  },
  methods: {
    hideDialogue() {
      this.$emit('close', false)
    }
  }
})
</script>

<style scoped lang="sass">
.modal
  position: fixed
  display: flex
  height: 100vh
  width: 100vw
  top: 0
  left: 0
  background: rgba(0, 0, 0, 0.5)
  &__content
    padding: 20px
    margin: auto
    color: #fff
    background: #181A1B
    min-height: 50px
    min-width: 400px
</style>