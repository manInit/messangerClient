<template>
  <div
    class="message-group"
    :class="{
      'message-group_reverse': isReverse
    }"
  >
    <div class="message-group__avatar">
      <user-avatar
        :url="'/src/assets/avatar-mock.png'"
      />
    </div>
    <div class="message-group__content">
      <div class="message-group__meta">
        <h5>{{ username }}</h5>
        <span class="message-group__time">{{ time }}</span>
      </div>
      <div class="message-group__list">
        <message-text
            class="message-group__msg"
            v-for="msg in texts"
            :is-reverse="isReverse"
            :key="msg.id"
            :text="msg.text"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserAvatar from '@/components/UI/UserAvatar.vue'
import MessageText from '@/components/UI/MessageText.vue'

export default defineComponent({
  name: 'MessageGroup',
  components: {MessageText, UserAvatar},
  props: {
    username: String,
    time: String,
    texts: Array,
    isReverse: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style scoped lang="sass">
.message-group
  display: flex
  &_reverse
    flex-direction: row-reverse
    .message-group__meta
      margin-right: 10px
      flex-direction: row-reverse
      justify-content: end
    .message-group__time
      margin-right: 10px
    .message-group__list
      margin-right: 10px
  &__content
    margin-left: 15px
  &__time
    font-size: 12px
    color: #BABABA
    margin-left: 10px
  &__list
    margin-top: 10px
  &__meta
    display: flex
    align-items: end
    h5
      font-weight: normal
      font-size: 16px
</style>