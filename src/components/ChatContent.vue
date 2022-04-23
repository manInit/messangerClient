<template>
  <div class="chat">
    <chat-header
      :type="chat.type"
      :users="chat.users"
    />
    <div class="chat__msgs">
      <div class="chat__date">Сегодня</div>
      <message-group
        class="chat__group-msg"
        :username="'Allan Poe'"
        :texts="[{id: 1, text: 'hjksdhf'}, {id: 1, text: 'Очень длинное сообщение'}]"
        :time="'20:30'"
      />
      <message-group
        class="chat__group-msg"
        :username="'Allan Poe'"
        :texts="[{id: 1, text: 'hjksdhf'}, {id: 1, text: 'Очень длинное сообщение'}]"
        :time="'20:30'"
        :is-reverse="true"
      />
      <message-group
          class="chat__group-msg"
          :username="'Allan Poe'"
          :texts="[{id: 1, text: 'hjksdhf'}, {id: 1, text: 'Очень длинное сообщение'}]"
          :time="'20:30'"
          :is-reverse="true"
      />
      <message-group
          class="chat__group-msg"
          :username="'Allan Poe'"
          :texts="[{id: 1, text: 'hjksdhf'}, {id: 1, text: 'Очень длинное сообщение'}]"
          :time="'20:30'"
          :is-reverse="true"
      />
      <message-group
          class="chat__group-msg"
          :username="'Allan Poe'"
          :texts="[{id: 1, text: 'hjksdhf'}, {id: 1, text: 'Очень длинное сообщение'}]"
          :time="'20:30'"
          :is-reverse="true"
      />
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
import MessageGroup from '@/components/UI/MessageGroup.vue'

export default defineComponent({
  name: 'ChatContent',
  components: {ChatInput, ChatHeader, InputForm, MessageGroup},
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
  &__date
    text-align: center
    margin-bottom: 10px
  &__group-msg
    & + &
      margin-top: 20px
  &__msgs
    flex-grow: 1
    padding: 20px 40px
    overflow-y: auto
    &::-webkit-scrollbar
      width: 0
  &__input
    width: 100%
    padding: 25px
</style>