<template>
  <img
      v-if="type === 'PRIVATE'"
      :src="'/src/assets/avatar-mock.png'"
      alt="user avatar" >
  <div class="chat__picture_public" v-else-if="type === 'PUBLIC'">
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
    type: String,
    url: String,
    size: String
  }
})
</script>

<style scoped lang="sass">

</style>