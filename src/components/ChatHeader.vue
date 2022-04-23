<template>
  <div class="chat-header">
    <div class="chat-header__icon">
      <chat-image
          :type="type"
          :size="'s'"
      />
    </div>
    <h4 class="chat-header__title">Название чата 2</h4>
    <div class="chat-header__type">Групповой чат</div>
    <div class="chat-header__users">
      <user-list :users="users"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ChatImage from '@/components/UI/ChatImage.vue'
import UserList from '@/components/UserList.vue'

export default defineComponent({
  name: 'ChatHeader',
  components: { UserList, ChatImage },
  props: {
    type: Number,
    users: Array
  }
})
</script>

<style scoped lang="sass">
.chat-header
  background: #1C1E1F
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1)
  height: 65px
  width: 100%
  display: flex
  align-items: center
  padding-left: 20px
  &__title
    font-size: 18px
    margin-left: 10px
    font-weight: normal
  &__type
    margin-left: 12px
    font-size: 12px
    color: #BABABA
  &__icon
    width: 35px
    height: 35px
    border-radius: 50%
    background: #27292E
    display: flex
    align-items: center
    justify-content: center
  &__users
    display: flex
    margin-left: auto
    padding-right: 20px
</style>