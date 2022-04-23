<template>
  <div class="input-form">
    <div class="input-form__wrapper">
      <textarea
        placeholder="Введите сообщение..."
        :value="modelValue"
        @input="updateValue"
      ></textarea>
      <font-awesome-icon :icon="['fas', 'paperclip']" />
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChatInput',
  props: {
    modelValue: String
  },
  methods: {
    updateValue(e: Event) {
      const input = e.target as HTMLInputElement
      this.$emit('update:modelValue', input.value)
    }
  }
})
</script>

<style scoped lang="sass">
.input-form
  width: 100%
  &__wrapper
    background: #27292E
    height: 65px
    border-radius: 15px
    padding-bottom: 10px
  textarea
    width: 80%
    height: 100%
    padding: 20px 10px 10px 20px
    border-radius: 15px
    font-size: 18px
    outline: none
    background: #27292E
    color: #BABABA
    border: none
    display: block
    resize: none
    &::-webkit-scrollbar
      width: 0
</style>