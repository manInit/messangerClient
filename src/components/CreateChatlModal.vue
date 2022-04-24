<template>
  <modal-chat class="modal" :is-show="show" @close="show">
    <input-form
      class="modal__input"
      title="Название чата"
      v-model="chat.name"
      placeholder="Введите название..."
      @input="validationName"
      :err="errs.name"
    />
    <input-select
      v-model="chat.chatType"
      title="Выберите тип"
    />
    <button-chat @click="createChat" class="modal__btn">
      Создать чат
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
import InputSelect from '@/components/UI/InputSelect.vue'
import type Chat from '@/types/Chat'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'CreateChatModal',
  components: {InputSelect, InputFile, ButtonChat, InputForm, ModalChat },
  props: {
    show: Boolean,
    channel: {
      type: Object as PropType<Channel>
    }
  },
  data() {
    return {
      chat: {
        name: '',
        chatType: '1'
      } as unknown as Chat,
      errs: {
        name: '',
      }
    }
  },
  methods: {
    validationName(): Boolean {
      this.errs.name = ''
      if (this.chat.name.length < 2) {
        this.errs.name = 'Название состоит не менее из 3 символов'
        return true
      }
      return false
    },
    validation() {
      this.errs.name = ''

      const vName = this.validationName()

      return !vName
    },
    show() {
      this.$emit('close')
    },
    createChat() {
      const isValid = this.validation()
      if (!isValid) return
      if (!this.channel) return

      const chat = {
        name: this.chat.name,
        chatType: parseInt(this.chat.chatType),
        channel: this.channel
      }
      Api.createChat(chat, this.$store.getters['auth/userToken']).then(data => {
        this.$emit('update')
      })
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