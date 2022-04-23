<template>
  <div class="input-group">
    <h4 class="input-group__title">{{ title }}</h4>
    <input
        :value="modelValue"
        @input="updateValue"
        :placeholder="placeholder"
        :type="type"
        :class="{
          'input-group_err': err
        }"
    >
    <div class="input-group__err" v-if="err">{{ err }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputForm',
  props: {
    modelValue: [String, Number],
    title: String,
    placeholder: String,
    err: {
      type: String,
      required: false
    },
    type: {
      type: String,
      default: String
    }
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
.input-group
  &_err
    border: 1px solid #C51A1A !important
  &__title
    font-size: 18px
    font-weight: normal
  &__err
    margin-top: 7px
    margin-left: 10px
    font-size: 14px
    color: #C51A1A
  input
    font-size: 18px
    background: #27292E
    display: block
    height: 55px
    width: 500px
    margin-top: 11px
    border: none
    color: #BABABA
    text-align: center
    border-radius: 15px
    outline: none
</style>