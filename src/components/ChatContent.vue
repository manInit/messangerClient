<template>
  <div class="chat">
    <chat-header
      :type="chat.chatType"
      :users="users"
      :chat="chat"
    />
    <div class="chat__msgs">
      <div class="chat__date">Сегодня</div>
      <message-group
        v-for="msg in msgs"
        :key="msg.id"
        class="chat__group-msg"
        :texts="[{id: 1, text: msg.text}]"
      />

<!--      <message-group-->
<!--        :user="chat.users[0]"-->
<!--        :texts="[{id: 1, text: 'hjksdhf'}, {id: 1, text: 'Очень длинное сообщение'}]"-->
<!--        :time="'20:30'"-->
<!--      />-->
    </div>
    <chat-input
      class="chat__input"
      v-model="text"
      @send="sendMessage"
    />
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import ChatHeader from '@/components/ChatHeader.vue'
import InputForm from '@/components/UI/InputForm.vue'
import ChatInput from '@/components/UI/ChatInput.vue'
import MessageGroup from '@/components/UI/MessageGroup.vue'
import type { PropType } from 'vue'
//@ts-ignore
import SockJS from 'sockjs-client/dist/sockjs'
import { Stomp } from '@stomp/stompjs'
import type Message from '@/types/Message'
import type Chat from '@/types/Chat'
import Api from '@/api'
const socket = new SockJS('http://192.168.0.102:8080/chat')
const stompClient = Stomp.over(socket)
stompClient.connect({}, (frame: any) => {

})

export default defineComponent({
  name: 'ChatContent',
  components: {ChatInput, ChatHeader, InputForm, MessageGroup},
  props: {
    chat: {
      required: true,
      type: Object as PropType<Chat>
    }
  },
  computed: {
    type() {
      return this.chat?.id
    }
  },
  watch: {
    type() {
      this.fetchUsers()
      this.connect()
    }
  },
  data() {
    return {
      text: '',
      users: [],
      msgs: [] as Message[]
    }
  },
  methods: {
    fetchUsers() {
      if (!this.chat.id) return

      Api.getChatsUsers(this.chat.id, this.$store.getters['auth/userToken']).then(data => {
        this.users = data
      })
    },
    connect() {
      if (!this.chat.id) return
      stompClient.subscribe(`/topic/chat/${this.chat.id}`, (messageOutput: any) => {
        const msg: Message = JSON.parse(messageOutput.body)
        this.msgs.push(msg)
      })
    },
    sendMessage() {
      this.text = ''
      stompClient.send(`/api/chat/${this.chat.id}`, {}, JSON.stringify({
        text: this.text,
        sender: {
          token: this.$store.getters['auth/userToken']
        }
      }))
    }
  },
  mounted() {
    this.fetchUsers()
    this.connect()
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