<template>
  <img
      v-if="type === 0"
      :src="'/src/assets/avatar-mock.png'"
      alt="user avatar" >
  <div class="chat__picture_public" v-else-if="type === 1">
    <font-awesome-icon :icon="['fas', 'user-group']"
                       :size="size" />
  </div>
  <div class="chat__picture_public" v-else>
    <font-awesome-icon :icon="['fas', 'bullhorn']"
                       :size="size"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChatImage',
  props: {
    type: Number,
    url: String,
    size: String
  }
})
</script>

<style scoped lang="sass">

</style>