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
      <chat-item
        v-for="item of values"
        :key="item.id"
        :title="item.name"
        :type="item.type"
        :nickname="'Логин'"
        :msg="'Последнее сообщение'"
      />
      <chat-item-add
        class="chat-list__add"
        v-if="isModerator"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ChatItem from '@/components/ChatItem.vue'
import ChannelItemAdd from '@/components/ChannelItemAdd.vue'
import ChatItemAdd from '@/components/ChatItemAdd.vue'

export default defineComponent({
  name: 'ChatList',
  components: {ChatItemAdd, ChatItem, ChannelItemAdd},
  props: {
    values: Array,
    channelName: String,
    isModerator: Boolean
  }
})
</script>

<style scoped lang="sass">
.chat-list
  background: #181A1B
  color: #fff
  &__add
    position: fixed
    bottom: 0
    background: #181A1B

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