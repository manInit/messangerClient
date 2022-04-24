<template>
  <div class="chat" :class="{'chat_active': active}">
    <div class="chat__img">
      <chat-image :type="type" :size="'lg'" />
    </div>
    <div class="chat__content">
      <h5 class="chat__title">{{ title }}</h5>
<!--      <div class="chat__msg">-->
<!--        <span class="chat__nick">{{ nickname }}: </span>-->
<!--        <span class="chat__text">{{ msg }}</span>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import ChatImage from '@/components/UI/ChatImage.vue'
import type ChatType from '@/types/ChatType'

export default defineComponent({
  name: 'ChatItem',
  components: { ChatImage },

  props: {
    title: String,
    nickname: String,
    msg: String,
    active: {
      required: false,
      type: Boolean
    },
    userAvatar: {
      type: String,
      required: false
    },
    type: Number as PropType<ChatType>
  }
})
</script>

<style scoped lang="sass">
.chat
  display: flex
  width: 360px
  height: 67px
  padding: 10px 20px
  cursor: pointer
  transition: background-color 0.2s
  &_active
    background: #27292E
  &:hover
    background: #27292E
  &__title
    font-size: 16px
    font-weight: normal
  &__content
    margin-left: 7px
  &__msg
    margin-top: 7px
    font-size: 14px
    color: #BABABA
  &__img
    width: 50px
    height: 50px
    display: flex
    justify-content: center
    align-items: center
    border-radius: 50%
    background: #27292E
    img
      width: 100%
      height: 100%
      border-radius: 50px
</style>