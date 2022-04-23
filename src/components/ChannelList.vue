<template>
  <div>
    <router-link
      class="link"
      to="/channel/direct"
    >
      <channel-item-direct
          url="/src/assets/avatar-mock.png"
      />
    </router-link>

    <router-link
        class="link"
        v-for="item in values"
        :key="item.id"
        :to="`/channel/${item.id}`"
    >
      <channel-item
        :url="item.img"
        :active="active === item.id.toString()"
      />
    </router-link>

    <channel-item-add
        @click="showModal"
    />
    <create-channel-modal
      :show="show"
      @close="show = false"
    />
  </div>
</template>

<script lang="ts">
import ChannelItem from '@/components/ChannelItem.vue'
import { defineComponent } from 'vue'
import ChannelItemDirect from '@/components/ChannelItemDirect.vue'
import ChannelItemAdd from '@/components/ChannelItemAdd.vue'
import CreateChannelModal from '@/components/CreateChannelModal.vue'

export default defineComponent({
  name: 'ChannelList',
  components: {CreateChannelModal, ChannelItemAdd, ChannelItemDirect, ChannelItem },

  props: {
    values: Array,
    active: {
      required: false,
      type: String
    }
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    showModal() {
      this.show = true
    }
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
.link
  display: block
.router-link-active
  background: #27292E
</style>