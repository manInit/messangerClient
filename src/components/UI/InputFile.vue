<template>
  <div class="input-group">
    <h4 class="input-group__title">
      {{ title }}
      <span class="input-group__required">*Не обязательно</span>
    </h4>
    <label class="file" for="input-file-channel">
      {{ fileName ? 'Выбран файл: ' + fileName : 'Выберите файл' }}
    </label>
    <input
      id="input-file-channel"
      @change="updateValue"
      :placeholder="placeholder"
      type="file"
      accept="image/*"
    >
    <div class="input-group__err" v-if="err">{{ err }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputFile',
  props: {
    modelValue: Object,
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
  data() {
    return {
      fileName: ''
    }
  },
  methods: {
    updateValue(e: Event) {
      const inputFile = e.target as HTMLInputElement
      if (!inputFile.files || !inputFile.files[0]) return

      const name = inputFile.files[0].name
      if (name.length > 17) this.fileName = name.slice(0, 20) + '...'
      else this.fileName = name

      this.$emit('fileChoose', inputFile.files[0])
    }
  }
})
</script>

<style scoped lang="sass">
.input-group
  position: relative
  &__required
    color: #6e7575
    top: -5px
    position: relative
    margin-left: 5px
    font-size: 12px
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
  display: none
.file
  cursor: pointer
  font-size: 18px
  background: #27292E
  display: block
  height: 55px
  line-height: 55px
  width: 500px
  margin-top: 11px
  border: none
  color: #BABABA
  text-align: center
  border-radius: 15px
  outline: none
</style>