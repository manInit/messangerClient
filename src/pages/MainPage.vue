<template>
  <main class="main">
    <channel-list
      class="main__channel-list"
      :values="channelArr"
      :active="activeChannelId ?? false"
    />
    <chat-list
      :channel-name="'Личное'"
      :values="chatArr"
      :is-moderator="true"
      :active="activeChatId ?? false"
    />
    <channel-description
      v-if="!activeChatId"
      :name="channel.name"
      :text="channel.text"
      :url="channel.url"
      class="main__chat"
    />
    <chat-content
      v-else
      class="main__chat"
      :chat="chat"
    />
  </main>
  <extra-modal-info />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ChannelList from '@/components/ChannelList.vue'
import HeaderChat from '@/components/HeaderChat.vue'
import UserAvatar from '@/components/UI/UserAvatar.vue'
import ChatList from '@/components/ChatList.vue'
import ChatType from '@/types/ChatType'
import ChatContent from '@/components/ChatContent.vue'
import ChannelDescription from '@/components/ChannelDescription.vue'
import ModalChat from '@/components/UI/ModalChat.vue'
import ExtraModalInfo from '@/components/ExtraModalInfo.vue'
import Api from '@/api'

export default defineComponent({
  name: 'MainPage',
  components: {
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
      return this.$route.params.channelId ?? null
    },
    activeChatId() {
      return this.$route.params.chatId ?? null
    }
  },
  mounted() {
    this.fetchChannels()
  },
  methods: {
    async fetchChannels() {
      const chats = await Api.getChannels(this.$store.getters['auth/userToken'])
      console.log(chats)
    }
  },
  data() {
    return {
      channelArr: [
        {img: '/src/assets/mock-channel.png', id: 1},
        {img: '/src/assets/mock-channel.png', id: 2},
        {img: '/src/assets/mock-channel.png', id: 3},
        {img: '/src/assets/mock-channel.png', id: 4},
        {img: '/src/assets/mock-channel.png', id: 5},
        {img: '/src/assets/mock-channel.png', id: 6},
        {img: '/src/assets/mock-channel.png', id: 7},
        {img: '/src/assets/mock-channel.png', id: 8},
        {img: '/src/assets/mock-channel.png', id: 9}
      ],
      chatArr: [
        {id: 1, type: ChatType.PUBLIC, name: 'ЧТо-то'},
        {id: 2, type: ChatType.PRIVATE, name: 'ЧТо-то'},
        {id: 3, type: ChatType.CHANNEL, name: 'ЧТо-то'},
        {id: 4, type: ChatType.CHANNEL, name: 'ЧТо-то'},
        {id: 5, type: ChatType.CHANNEL, name: 'ЧТо-то'},
        {id: 6, type: ChatType.CHANNEL, name: 'ЧТо-то'},
        {id: 7, type: ChatType.CHANNEL, name: 'ЧТо-то'},
        {id: 8, type: ChatType.CHANNEL, name: 'ЧТо-то'},
        {id: 9, type: ChatType.CHANNEL, name: 'ЧТо-то'},
        {id: 10, type: ChatType.CHANNEL, name: 'ЧТо-то'},
        {id: 11, type: ChatType.PRIVATE, name: 'ЧТо-то'}
      ],
      chat: {
        type: 1,
        users: [{id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}]
      },
      channel: {
        name: 'Название канала',
        text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
        url: 'http://localhost:8080/linklink'
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
    min-width: 100px
    width: 100px
    background: #1C1E1F
  &__chat
    flex-grow: 1
</style>