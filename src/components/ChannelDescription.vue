<template>
  <div class="desc">
    <h2>Подробности</h2>
    <div class="desc__name">
      <img :src="'/src/assets/mock-channel.png'" alt="channel-logo">
      <span>{{ name }}</span>
    </div>
    <div class="desc__text">
      <h3>Описание</h3>
      <p>
        {{ text }}
      </p>
    </div>
<!--    <div class="desc__url">-->
<!--      <h3>Пригласительная ссылка</h3>-->
<!--      <div @click="copy">{{ url }}</div>-->
<!--    </div>-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChannelDescription',
  props: {
    name: String,
    text: String,
    url: String
  },
  methods: {
    copy(e: Event) {
      const elem = e.target as HTMLElement
      const text = elem.innerText

      navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard successfully.')
      }, err => {
        console.log('Failed to copy the text to clipboard.', err)
      })
    }
  }
})
</script>

<style scoped lang="sass">
.desc
  color: #fff
  width: 100%
  background: #161819
  text-align: center
  h2
    font-size: 24px
    text-align: center
    font-weight: normal
    margin-top: 50px
  &__url
    div
      margin-top: 10px
      color: #4560EC
      cursor: pointer
      user-select: none
  &__name
    margin-top: 30px
    display: flex
    align-items: center
    justify-content: center
    span
      margin-left: 10px
  h3
    margin-top: 30px
    font-size: 20px
    font-weight: normal
  .desc__text
    margin: 0 auto
    max-width: 500px
  p
    margin-top: 15px
    text-align: center
    height: max-content
</style>