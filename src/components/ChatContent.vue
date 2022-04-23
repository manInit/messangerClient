<template>
  <div class="chat">
    <chat-header
      :type="chat.type"
      :users="chat.users"
    />
    <div class="chat__msgs">
      Messages
    </div>
    <chat-input
      class="chat__input"
      v-model="text"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ChatHeader from '@/components/ChatHeader.vue'
import InputForm from '@/components/UI/InputForm.vue'
import ChatInput from '@/components/UI/ChatInput.vue'

export default defineComponent({
  name: 'ChatContent',
  components: {ChatInput, ChatHeader, InputForm},
  props: {
    chat: {
      type: Object,
      users: Array
    }
  },
  data() {
    return {
      text: ''
    }
  }
})
</script>

<style scoped lang="sass">
.chat
  display: flex
  flex-direction: column
  background: #161819
  color: #fff
  &__msgs
    flex-grow: 1
  &__input
    width: 100%
    padding: 25px
</style>