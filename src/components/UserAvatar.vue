<template>
  <img @click="showUserInfo" :src="'/src/assets/avatar-mock.png'" alt="avatar">
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type User from '@/types/User'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'UserAvatar',
  props: {
    user: Object as PropType<User>
  },
  methods: {
    showUserInfo() {
      this.$store.dispatch('userModal/show', this.user)
    }
  }
})
</script>

<style scoped lang="sass">
img
  cursor: pointer
  width: 36px
  height: 36px
  border-radius: 10px
</style>