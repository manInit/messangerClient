<template>
  <div class="chat">
    <div class="chat__img">
      <round-button :size="'small'"/>
    </div>
    <div class="chat__content">
      Создать чат
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RoundButton from '@/components/UI/RoundButton.vue'

export default defineComponent({
  name: 'ChatItemAdd',
  components: {RoundButton}
})
</script>

<style scoped lang="sass">
.chat
  display: flex
  align-items: center
  width: 360px
  height: 67px
  padding: 10px 20px
  cursor: pointer
  transition: background-color 0.2s
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