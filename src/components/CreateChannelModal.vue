<template>
  <modal-chat class="modal" :is-show="show" @close="show">
    <input-form
        class="modal__input"
        title="Название канала"
        v-model="channel.name"
        placeholder="Введите название..."
        @input="validationName"
        :err="errs.name"
    />
    <input-form
        class="modal__input"
        title="Описание канала"
        v-model="channel.about"
        placeholder="Опишите канал..."
        @input="validationAbout"
        :err="errs.about"
    />
    <input-file
      class="modal__input"
      title="Аватарка канала"
      v-model="file"
      placeholder="Выберите аватарку..."
      @fileChoose="fileChoose"
    />
    <button-chat @click="createChannel" class="modal__btn">
      Создать канал
    </button-chat>
  </modal-chat>
</template>

<script lang="ts">
import InputForm from '@/components/UI/InputForm.vue'
import ModalChat from '@/components/UI/ModalChat.vue'
import { defineComponent } from 'vue'
import type Channel from '@/types/Channel'
import ButtonChat from '@/components/UI/ButtonChat.vue'
import InputFile from '@/components/UI/InputFile.vue'
import Api from '@/api'

export default defineComponent({
  name: 'CreateChannelModal',
  components: { InputFile, ButtonChat, InputForm, ModalChat },
  props: {
    show: Boolean
  },
  data() {
    return {
      file: null as unknown as File,
      channel: {
        about: '',
        name: ''
      } as unknown as Channel,
      errs: {
        name: '',
        about: ''
      }
    }
  },
  methods: {
    validationName(): Boolean {
      this.errs.name = ''
      if (this.channel.name.length < 2) {
        this.errs.name = 'Название состоит не менее из 3 символов'
        return true
      }
      return false
    },
    validationAbout(): Boolean {
      this.errs.about = ''
      if (this.channel.about!.length < 20) {
        this.errs.about = 'Описание состоит не менее из 20 символов'
        return true
      }
      return false
    },
    validation() {
      this.errs.name = ''
      this.errs.about = ''

      const vName = this.validationName()
      const vAbout = this.validationAbout()

      return !vAbout && !vName
    },
    show() {
      this.$emit('close')
    },
    fileChoose(file: File) {
      this.file = file
      console.log(file)
    },
    createChannel() {
      const isValid = this.validation()
      if (!isValid) return

      Api.createChannel(this.channel, this.$store.getters['auth/userToken'])
    }
  }
})
</script>

<style scoped lang="sass">
.modal
  &__btn
    margin-top: 30px
  &__input
    & + &
      margin-top: 15px
</style>