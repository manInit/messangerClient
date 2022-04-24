<template>
  <div class="chat-list">
    <h3>{{ channelName }}</h3>
    <div
        class="list-container"
        :class="{
          'list-container_moderator': isModerator,
          'list-container_no-moderator': !isModerator
        }"
    >
      <router-link
        style="text-decoration: none; color: inherit;"
        class="link"
        v-for="item of values"
        :key="item.id"
        :to="`/channel/${$route.params.channelId}/chat/${item.id}`"
      >
        <chat-item
          :title="item.name"
          :type="item.chatType"
          :nickname="'Логин'"
          :msg="'Последнее сообщение'"
          :active="active.toString() === item.id.toString()"
        />
      </router-link>

      <chat-item-add
        class="chat-list__add"
        v-if="isModerator"
        @click="show = true"
        style="z-index: 1;"
      />
      <create-chat-modal
        :show="show"
        @close="show = false"
        :channel="channel"
        @update="update"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ChatItem from '@/components/ChatItem.vue'
import ChannelItemAdd from '@/components/ChannelItemAdd.vue'
import ChatItemAdd from '@/components/ChatItemAdd.vue'
import CreateChatModal from '@/components/CreateChatlModal.vue'
import type Channel from '@/types/Channel'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'ChatList',
  components: {CreateChatModal, ChatItemAdd, ChatItem, ChannelItemAdd},
  props: {
    values: Array,
    channelName: String,
    isModerator: Boolean,
    active: Boolean,
    channel: {
      type: Object as PropType<Channel>
    }
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    update() {
      this.show = false
      this.$emit('updateChat')
    }
  }
})
</script>

<style scoped lang="sass">
.chat-list
  background: #181A1B
  color: #fff
  &__add
    width: 100%
    position: fixed
    bottom: 0
    background: #181A1B
.link
  display: block
.list-container
  margin-top: 15px
  overflow-y: auto
  &_moderator
    max-height: calc(100vh - 55px - 37px - 15px - 47px - 20px)
  &_no-moderator
    max-height: calc(100vh - 55px - 37px - 15px)
  &::-webkit-scrollbar
    width: 0
h3
  margin-top: 15px
  font-size: 18px
  font-weight: normal
  text-align: center
</style>