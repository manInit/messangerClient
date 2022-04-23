<template>
  <div>
    <div class="avatar-wrapper">
      <user-avatar :url="url"/>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserAvatar from '@/components/UserAvatar.vue'

export default defineComponent({
  name: 'ChannelItemDirect',
  components: {UserAvatar},
  props: {
    url: String
  }
})
</script>

<style lang="sass" scoped>
div
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  height: 80px
  cursor: pointer
  transition: background-color 0.2s
  &:hover
    background: #27292E
.avatar-wrapper
  width: 70px
  height: 70px
  border-radius: 50%
  background: #27292E
</style>