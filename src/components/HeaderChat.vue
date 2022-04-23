<template>
  <header>
    <div class="logo" @click="$router.push('/')">
      <img src="@/assets/head-logo.png" alt="logo">
      <span>chat</span>
    </div>
  </header>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderChat'
})
</script>

<style lang="sass" scoped>
header
  width: 100vw
  height: 55px
  display: flex
  background: #161819
  color: #fff
  box-shadow: 0 4px 10px 1px rgba(0, 0, 0, 0.2)
.logo
  cursor: pointer
  display: flex
  align-items: center
  margin-left: 70px
  font-size: 22px
</style>