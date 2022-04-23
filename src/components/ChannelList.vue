<template>
  <div>
    <channel-item-direct
      url="/src/assets/avatar-mock.png"
    />
    <channel-item
      v-for="item in values"
      :key="item.id"
      :url="item.img"
    />
    <channel-item-add
    />
  </div>
</template>

<script lang="ts">
import ChannelItem from '@/components/ChannelItem.vue'
import { defineComponent } from 'vue'
import ChannelItemDirect from '@/components/ChannelItemDirect.vue'
import ChannelItemAdd from '@/components/ChannelItemAdd.vue'

export default defineComponent({
  name: 'ChannelList',
  components: {ChannelItemAdd, ChannelItemDirect, ChannelItem },

  props: {
    values: Array
  }
})
</script>

<style scoped lang="sass">
div
  overflow-y: auto
  &::-webkit-scrollbar
    width: 0
    background-color: #aaa
  &::-webkit-scrollbar-thumb
    background: #161819
    border-radius: 15px
</style>