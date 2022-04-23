<template>
  <div
      v-for="i in Math.min(users.length, count)"
      :key="users[i - 1].id"
      class="user"
  >
    <user-avatar
      :user="users[i - 1]"
      :url="'/src/assets/avatar-mock.png'"
    />
  </div>
  <div class="user__count" v-if="allCount > 0">
    {{ allCount }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserAvatar from '@/components/UserAvatar.vue'

export default defineComponent({
  name: 'UserList',
  components: {
    UserAvatar
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  computed: {
    allCount() {
      return this.users.length - this.count
    }
  },
  data() {
    return {
      count: 3
    }
  }
})
</script>

<style scoped lang="sass">
.user
  cursor: pointer
  &__count
    width: 36px
    height: 36px
    line-height: 36px
    text-align: center
    background: #27292E
    border-radius: 10px
    font-size: 16px
    margin-left: 10px
    cursor: pointer
    transition: background-color 0.2s
    &:hover
      background: gray
.user + .user
  margin-left: 10px
</style>