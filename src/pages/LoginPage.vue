<template>
  <div class="wrapper">
    <main>
      <h1>Giga chat</h1>
      <nav class="login__links">
        <router-link class="login__link" to="/register">Регистрация</router-link>
        <router-link class="login__link" to="/login">Вход</router-link>
      </nav>
      <form @submit.prevent>
        <input-form
            class="login__input"
            title="Логин"
            v-model="login"
            placeholder="Введите логин..."
            :err="errs.login"
        />
        <input-form
            class="login__input"
            title="Пароль"
            v-model="password"
            placeholder="Введите пароль..."
            :err="errs.password"
        />
        <button-chat class="btn-submit">Войти</button-chat>
      </form>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InputForm from '@/components/UI/InputForm.vue'
import ButtonChat from '@/components/UI/ButtonChat.vue'

export default defineComponent({
  name: 'LoginPage',
  components: { ButtonChat, InputForm },
  data() {
    return {
      login: '',
      password: '',
      errs: {
        login: '',
        password: ''
      }
    }
  }
})
</script>

<style scoped lang="sass">
h1
  text-align: center
  font-weight: normal
.wrapper
  width: 100vw
  height: calc(100vh - 55px)
  display: flex
  justify-content: center
  align-items: center
  background: #161819
main
  max-width: 500px
  color: #fff
.btn-submit
  margin-top: 51px
.login
  &__links
    margin-top: 30px
    display: flex
    justify-content: center
  &__link
    font-size: 20px
    text-decoration-line: underline
    color: #BABABA
    & + &
      margin-left: 30px
  &__input
    & + &
      margin-top: 15px

.router-link-active
  color: #5E50FF
</style>