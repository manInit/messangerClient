<template>
  <main class="main">
    <channel-list
      class="main__channel-list"
      :values="channelArr"
    />
    <chat-list
      :channel-name="'Личное'"
      :values="chatArr"
      :is-moderator="true"
    />
    <chat-content
      class="main__chat"
      :chat="chat"
    />
  </main>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ChannelList from '@/components/ChannelList.vue'
import HeaderChat from '@/components/HeaderChat.vue'
import UserAvatar from '@/components/UI/UserAvatar.vue'
import ChatList from '@/components/ChatList.vue'
import ChatType from '@/types/ChatType'
import type Message from '@/types/Message'
import ChatContent from '@/components/ChatContent.vue'

export default defineComponent({
  name: 'MainPage',
  components: {
    ChatContent,
    UserAvatar,
    HeaderChat,
    ChannelList,
    ChatList
  },
  data() {
    return {
      channelArr: [
        {img: '/src/assets/mock-channel.png', id: 1},
        {img: '/src/assets/mock-channel.png', id: 2},
        {img: '/src/assets/mock-channel.png', id: 3},
        {img: '/src/assets/mock-channel.png', id: 1},
        {img: '/src/assets/mock-channel.png', id: 2},
        {img: '/src/assets/mock-channel.png', id: 3},
        {img: '/src/assets/mock-channel.png', id: 1},
        {img: '/src/assets/mock-channel.png', id: 2},
        {img: '/src/assets/mock-channel.png', id: 3}
      ],
      chatArr: [
        {id: 1, type: ChatType.PUBLIC, name: 'ЧТо-то'},
        {id: 2, type: ChatType.PRIVATE, name: 'ЧТо-то'},
        {id: 3, type: ChatType.CHANNEL, name: 'ЧТо-то'},
        {id: 3, type: ChatType.CHANNEL, name: 'ЧТо-то'},
        {id: 3, type: ChatType.CHANNEL, name: 'ЧТо-то'},
        {id: 3, type: ChatType.CHANNEL, name: 'ЧТо-то'},
        {id: 3, type: ChatType.CHANNEL, name: 'ЧТо-то'},
        {id: 3, type: ChatType.CHANNEL, name: 'ЧТо-то'},
        {id: 3, type: ChatType.CHANNEL, name: 'ЧТо-то'},
        {id: 3, type: ChatType.CHANNEL, name: 'ЧТо-то'},
        {id: 3, type: ChatType.PRIVATE, name: 'ЧТо-то'}
      ],
      chat: {
        type: 1,
        users: [{id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}]
      }
    }
  }
})
</script>

<style scoped lang="sass">
.main
  display: flex
  height: calc(100vh - 55px)
  &__channel-list
    padding-top: 15px
    width: 100px
    background: #1C1E1F
  &__chat
    flex-grow: 1
</style>