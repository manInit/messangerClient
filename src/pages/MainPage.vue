<template>
  <main class="main">
    <channel-list
      class="main__channel-list"
      :values="channelArr"
      :active="activeChannelId ?? false"
      @update="fetchChannels"
    />
    <chat-list
      class="main__chat-list"
      :channel-name="'Личное'"
      :values="chatArr"
      :channel="channel"
      :is-moderator="true"
      :active="activeChatId ?? false"
      @updateChat="fetchChats"
    />
    <channel-description
      v-if="!activeChatId"
      :name="channel.name"
      :text="channel.about"
      :url="channel.url"
      class="main__chat"
    />
    <chat-content
      v-else
      class="main__chat"
      :chat="chat"
    />
  </main>
  <extra-user-info />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ChannelList from '@/components/ChannelList.vue'
import HeaderChat from '@/components/HeaderChat.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import ChatList from '@/components/ChatList.vue'
import ChatType from '@/types/ChatType'
import ChatContent from '@/components/ChatContent.vue'
import ChannelDescription from '@/components/ChannelDescription.vue'
import ModalChat from '@/components/UI/ModalChat.vue'
import ExtraModalInfo from '@/components/ExtraUserInfo.vue'
import Api from '@/api'
import ExtraUserInfo from '@/components/ExtraUserInfo.vue'
import type Channel from '@/types/Channel'
//@ts-ignore
import SockJS from 'sockjs-client/dist/sockjs'
import { Stomp } from '@stomp/stompjs'
import type Chat from '@/types/Chat'

export default defineComponent({
  name: 'MainPage',
  components: {
    ExtraUserInfo,
    ExtraModalInfo,
    ModalChat,
    ChannelDescription,
    ChatContent,
    UserAvatar,
    HeaderChat,
    ChannelList,
    ChatList
  },
  computed: {
    activeChannelId() {
      if (!this.$route.params.channelId) return null
      if (this.$route.params.channelId === 'direct') {
        this.chatArr = []
        this.setDirectChannel()
        return
      }
      return this.$route.params.channelId
    },
    activeChatId() {
      return this.$route.params.chatId ?? null
    }
  },
  watch: {
    activeChannelId() {
      this.channel = this.channelArr.find(item => item.id === this.$route.params.channelId)
      this.fetchChats()
    }
  },
  mounted() {
    const socket = new SockJS('http://192.168.0.102:8080/chat')
    const stompClient = Stomp.over(socket)
    stompClient.connect({}, (frame: any) => {
      console.log('Connected: ' + frame);
      stompClient.subscribe('/api/chat', function (messageOutput) {
        console.log(messageOutput);
      });

      stompClient.send(
          'api/chat/1', {},
          JSON.stringify({ text: 'dfdfd' }))
    })


    this.fetchChannels()
    if (this.activeChannelId) this.fetchChats()
  },
  methods: {
    async fetchChannels() {
      this.channelArr = await Api.getChannels(this.$store.getters['auth/userToken'])
    },
    async fetchChats() {
      if (!this.activeChannelId || this.activeChannelId === 'direct') return
      this.chatArr = await Api.getChats(this.activeChannelId, this.$store.getters['auth/userToken'])
    },
    setDirectChannel() {
      this.channel = {
        name: 'Личное',
        about: 'Ваши личные сообщения'
      }
    }
  },
  data() {
    return {
      channelArr: [] as Channel[],
      chatArr: [] as Chat[],
      channel: {} as Channel,
      chat: {
        type: 1,
        users: [
          {id: 1, login: 'alla', name: 'sdsdsd', about: 'dfdfdfd'},
          {id: 1, login: 'alla', name: 'tiuyi', about: 'dfdfdfd'},
          {id: 1, login: 'alla', name: 'ee', about: 'dfdfdfd'},
          {id: 1, login: 'alla', name: 'ertrt', about: 'dfdfdfd'},
          {id: 1, login: 'alla', name: 'eeee', about: 'yyrtrt'}]
      },
    }
  }
})
</script>

<style scoped lang="sass">
.main
  display: flex
  height: calc(100vh - 55px)
  &__chat-list
    min-width: 360px
  &__channel-list
    padding-top: 15px
    min-width: 100px
    width: 100px
    background: #1C1E1F
  &__chat
    flex-grow: 1
</style>