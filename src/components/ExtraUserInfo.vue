<template>
  <modal-chat v-if="user" class="modal" :is-show="show" @close="close">
    <h5 class="modal__title">Подробности</h5>
    <div class="modal__group user">
      <div class="user__avatar">
        <user-avatar :url="'/src/assets/avatar-mock.png'"/>
      </div>
      <div class="user__desc">
        <h6 class="user__name">{{ user.name }}</h6>
<!--        <div class="user__status">Online</div>-->
      </div>
    </div>
    <div class="modal__group">
      <div class="modal__field">Никнейм</div>
      <div class="modal__value">{{ user.login }}</div>
    </div>
    <div class="modal__group">
      <div class="modal__field">О себе</div>
      <div class="modal__value">{{ user.about }}</div>
    </div>
    <button-chat class="modal__btn">Написать</button-chat>
  </modal-chat>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ModalChat from '@/components/UI/ModalChat.vue'
import ButtonChat from '@/components/UI/ButtonChat.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import InputForm from '@/components/UI/InputForm.vue'
import type User from '@/types/User'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'ExtraUserInfo',
  components: {InputForm, UserAvatar, ButtonChat, ModalChat},
  computed: {
    user(): User {
      return this.$store.state.userModal.user ?? null
    },
    show(): boolean {
      return this.$store.state.userModal.open
    }
  },
  methods: {
    close() {
      this.$store.dispatch('userModal/hide')
    }
  }
})
</script>

<style scoped lang="sass">
.modal
  &__title
    font-weight: normal
    font-size: 20px
    text-align: center
    margin-bottom: 15px
  &__field
    font-size: 18px
  &__value
    font-size: 14px
    color: #BABABA
  &__btn
    margin-top: 30px
    max-width: 150px
  &__group
    & + &
      margin-top: 15px
.user
  display: flex
  &__name
    font-size: 18px
    font-weight: normal
  &__status
    font-size: 14px
    color: #BABABA
  &__desc
    margin-left: 15px
</style>